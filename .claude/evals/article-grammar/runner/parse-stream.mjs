#!/usr/bin/env node
// Разбирает stream-json одного прогона claude -p и печатает сводку в JSON.
//
// Usage: node parse-stream.mjs <stream.jsonl> [--pretty]
//
// Выдаёт:
//   skill_loaded          — виден ли след загрузки скилла article-grammar
//   bash_block_executed   — исполнился ли <bash>-блок SKILL.md (cat "$ARGUMENTS")
//   tool_calls[]          — все вызовы инструментов: {name, input_summary}
//   read_paths[]          — что читалось
//   rules_loaded[]        — какие rules/*.md прочитаны (по basename)
//   write_attempts[]      — попытки Edit/Write/MultiEdit/NotebookEdit
//   search_calls[]        — Glob/Grep/LS: признак самостоятельного обхода репозитория
//   result_text           — финальный текст ответа
//   cost_usd, duration_ms, num_turns, is_error

import { readFileSync } from 'node:fs';

const [file, ...flags] = process.argv.slice(2);
if (!file) {
  console.error('Usage: node parse-stream.mjs <stream.jsonl> [--pretty]');
  process.exit(1);
}

const lines = readFileSync(file, 'utf8').split('\n').filter((l) => l.trim());

const out = {
  stream_file: file,
  line_count: lines.length,
  parse_errors: 0,
  skill_loaded: false,
  bash_block_executed: null,
  prose_scan_executed: false,
  tool_calls: [],
  read_paths: [],
  rules_loaded: [],
  write_attempts: [],
  search_calls: [],
  bash_commands: [],
  result_text: null,
  is_error: null,
  cost_usd: null,
  duration_ms: null,
  num_turns: null,
  system_init: null,
};

const SEARCH_TOOLS = new Set(['Glob', 'Grep', 'LS']);
const WRITE_TOOLS = new Set(['Edit', 'Write', 'MultiEdit', 'NotebookEdit']);

function inputSummary(name, input) {
  if (!input || typeof input !== 'object') return null;
  if (name === 'Read' || WRITE_TOOLS.has(name)) return input.file_path ?? input.path ?? null;
  if (name === 'Bash') return input.command ?? null;
  if (name === 'Glob' || name === 'Grep') return input.pattern ?? null;
  return JSON.stringify(input).slice(0, 200);
}

function recordToolUse(block) {
  const name = block.name;
  const input = block.input ?? {};
  const summary = inputSummary(name, input);
  out.tool_calls.push({ name, input: summary });

  if (name === 'Read') {
    const p = input.file_path ?? input.path;
    if (p) {
      out.read_paths.push(p);
      const m = /\/article-grammar\/rules\/([^/]+\.md)$/.exec(p);
      if (m) out.rules_loaded.push(m[1]);
      if (/\/article-grammar\/SKILL\.md$/.test(p)) out.skill_loaded = true;
    }
  } else if (WRITE_TOOLS.has(name)) {
    out.write_attempts.push({ name, path: input.file_path ?? input.path ?? null });
  } else if (SEARCH_TOOLS.has(name)) {
    out.search_calls.push({ name, arg: summary });
  } else if (name === 'Bash') {
    const cmd = input.command ?? '';
    out.bash_commands.push(cmd);
    if (/prose-scan\.sh/.test(cmd)) out.prose_scan_executed = true;
    if (/^\s*cat\s/.test(cmd)) out.bash_block_executed = true;
  }
}

for (const line of lines) {
  let ev;
  try {
    ev = JSON.parse(line);
  } catch {
    out.parse_errors++;
    continue;
  }

  if (ev.type === 'system' && ev.subtype === 'init') {
    out.system_init = {
      model: ev.model ?? null,
      tools: Array.isArray(ev.tools) ? ev.tools.length : null,
      slash_commands: Array.isArray(ev.slash_commands) ? ev.slash_commands.length : null,
      cwd: ev.cwd ?? null,
    };
    if (Array.isArray(ev.slash_commands) && ev.slash_commands.includes('article-grammar')) {
      out.skill_loaded = true;
    }
  }

  // Полные сообщения ассистента
  if (ev.type === 'assistant' && ev.message?.content) {
    for (const block of ev.message.content) {
      if (block.type === 'tool_use') recordToolUse(block);
    }
  }

  // Потоковые события (когда включён --include-partial-messages)
  if (ev.type === 'stream_event' && ev.event?.type === 'content_block_start') {
    const cb = ev.event.content_block;
    if (cb?.type === 'tool_use' && cb.name) recordToolUse(cb);
  }

  if (ev.type === 'result') {
    out.result_text = ev.result ?? null;
    out.is_error = ev.is_error ?? null;
    out.cost_usd = ev.total_cost_usd ?? null;
    out.duration_ms = ev.duration_ms ?? null;
    out.num_turns = ev.num_turns ?? null;
  }
}

// Признак срабатывания <bash>-блока: контент статьи пришёл без единого Read по ней.
if (out.bash_block_executed === null) out.bash_block_executed = false;

out.rules_loaded = [...new Set(out.rules_loaded)].sort();
out.read_paths = [...new Set(out.read_paths)];

const json = JSON.stringify(out, null, flags.includes('--pretty') ? 2 : 0);
process.stdout.write(json + '\n');
