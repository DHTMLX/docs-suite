#!/usr/bin/env node
// Механическая часть скоринга: зоны не-прозы, локация цитат, сопоставление с gold, метрики.
// Модели здесь нет — всё детерминировано и воспроизводимо.
//
// Usage:
//   node score.mjs zones <article.md>
//       печатает вычисленные зоны не-прозы (frontmatter, заборы, @-макросы, comment-макросы, URL)
//   node score.mjs score <fixture.md> <gold.json> <findings.json>
//       сопоставляет находки с gold и печатает метрики
//   node score.mjs hardfp <article.md> <findings.json>
//       для реальных статей без gold: сколько находок попало в не-прозу
//
// findings.json — массив объектов {category, severity, location, quote, why, fix}

import { readFileSync } from 'node:fs';

const MIN_OVERLAP = 0.6;
const LINE_TOLERANCE = 1;

// --------------------------------------------------------------------------
// Нормализация с сохранением соответствия исходным позициям
// --------------------------------------------------------------------------

const STRIP_CHARS = new Set(['*', '_', '`', '~']);

export function normalizeWithMap(text) {
  let norm = '';
  const map = []; // map[i] = индекс в исходном тексте для norm[i]
  let pendingSpace = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (/\s/.test(ch)) {
      pendingSpace = norm.length > 0;
      continue;
    }
    if (STRIP_CHARS.has(ch)) continue;
    if (pendingSpace) {
      norm += ' ';
      map.push(i);
      pendingSpace = false;
    }
    norm += ch.toLowerCase();
    map.push(i);
  }
  return { norm, map };
}

export function normalizeQuery(s) {
  const { norm } = normalizeWithMap(s);
  return norm.replace(/^[\s.,;:!?—–-]+/, '').replace(/[\s.,;:!?—–-]+$/, '');
}

function lineAtOffset(text, offset) {
  let line = 1;
  for (let i = 0; i < offset && i < text.length; i++) if (text[i] === '\n') line++;
  return line;
}

// --------------------------------------------------------------------------
// Зоны не-прозы
// --------------------------------------------------------------------------

const MACRO_RE = /^@(short|signature|params|example|descr|template|edition):/;

export function computeZones(text) {
  const lines = text.split('\n');
  const zones = [];
  let i = 0;

  // YAML frontmatter
  if (lines[0]?.trim() === '---') {
    for (let j = 1; j < lines.length; j++) {
      if (lines[j].trim() === '---') {
        zones.push({ kind: 'frontmatter', lines: [1, j + 1] });
        i = j + 1;
        break;
      }
    }
  }

  let fenceOpen = null;
  let macroOpen = null;

  for (; i < lines.length; i++) {
    const line = lines[i];
    const lineNo = i + 1;
    const fenceMatch = /^(~~~|```)/.exec(line.trim());

    if (fenceOpen) {
      if (fenceMatch && line.trim().startsWith(fenceOpen.marker)) {
        zones.push({ kind: 'code_fence', lines: [fenceOpen.start, lineNo] });
        fenceOpen = null;
      }
      continue;
    }
    if (fenceMatch) {
      // Забор закрывает открытый макрос
      if (macroOpen) {
        zones.push({ kind: 'macro', macro: macroOpen.name, lines: [macroOpen.start, lineNo - 1] });
        macroOpen = null;
      }
      fenceOpen = { marker: fenceMatch[1], start: lineNo };
      continue;
    }

    const macroMatch = MACRO_RE.exec(line.trim());
    if (macroMatch) {
      if (macroOpen) {
        zones.push({ kind: 'macro', macro: macroOpen.name, lines: [macroOpen.start, lineNo - 1] });
      }
      // @descr: открывает прозаический раздел — он не является не-прозой
      macroOpen = macroMatch[1] === 'descr' ? null : { name: `@${macroMatch[1]}:`, start: lineNo };
      if (macroMatch[1] === 'descr') zones.push({ kind: 'macro', macro: '@descr:', lines: [lineNo, lineNo] });
      continue;
    }

    if (/^\[comment\]:\s*#/.test(line.trim())) {
      zones.push({ kind: 'comment_macro', lines: [lineNo, lineNo] });
      if (macroOpen) {
        zones.push({ kind: 'macro', macro: macroOpen.name, lines: [macroOpen.start, lineNo - 1] });
        macroOpen = null;
      }
      continue;
    }

    // Пустая строка не закрывает макрос: @params: содержит пустые строки между пунктами.
    // Макрос закрывается следующим макросом, забором, comment-строкой или заголовком.
    if (macroOpen && /^#{1,6}\s/.test(line)) {
      zones.push({ kind: 'macro', macro: macroOpen.name, lines: [macroOpen.start, lineNo - 1] });
      macroOpen = null;
    }
  }

  if (fenceOpen) zones.push({ kind: 'code_fence', lines: [fenceOpen.start, lines.length] });
  if (macroOpen) zones.push({ kind: 'macro', macro: macroOpen.name, lines: [macroOpen.start, lines.length] });

  // URL внутри markdown-ссылок
  const linkRe = /\[[^\]]*\]\(([^)]+)\)/g;
  let m;
  while ((m = linkRe.exec(text))) {
    const urlStart = m.index + m[0].indexOf('(') + 1;
    zones.push({
      kind: 'link_url',
      lines: [lineAtOffset(text, urlStart), lineAtOffset(text, urlStart + m[1].length)],
      offsets: [urlStart, urlStart + m[1].length],
      url: m[1],
    });
  }

  // Хвостовые пустые строки не принадлежат макросу — иначе зона захватывает чужой текст.
  for (const z of zones) {
    if (z.kind !== 'macro') continue;
    while (z.lines[1] > z.lines[0] && !lines[z.lines[1] - 1]?.trim()) z.lines[1]--;
  }

  return zones.sort((a, b) => a.lines[0] - b.lines[0]);
}

export function zoneAtLine(zones, line, offset = null) {
  // Зоны со смещениями (URL внутри markdown-ссылки) занимают часть строки, а не всю её.
  // Без сверки по смещению любая находка в строке со ссылкой ложно считалась бы попавшей в URL.
  for (const z of zones) {
    if (!z.offsets) continue;
    if (offset != null && offset >= z.offsets[0] && offset <= z.offsets[1]) return z.kind;
  }
  const hit = zones.find((z) => !z.offsets && line >= z.lines[0] && line <= z.lines[1]);
  return hit ? hit.kind : 'prose';
}

// --------------------------------------------------------------------------
// Локация цитаты
// --------------------------------------------------------------------------

export function locate(text, quote) {
  const { norm, map } = normalizeWithMap(text);
  const q = normalizeQuery(quote);
  if (!q) return { found: false, reason: 'empty_quote' };

  let at = norm.indexOf(q);
  if (at === -1) {
    // Запасной путь: цитата могла быть усечена многоточием или склеена из двух кусков
    const head = q.slice(0, Math.min(40, q.length));
    at = head.length >= 12 ? norm.indexOf(head) : -1;
    if (at === -1) return { found: false, reason: 'not_found', normalized: q };
    return {
      found: true,
      partial: true,
      start: map[at],
      end: map[Math.min(at + head.length - 1, map.length - 1)],
      line: lineAtOffset(text, map[at]),
      normalized: q,
    };
  }
  return {
    found: true,
    partial: false,
    start: map[at],
    end: map[Math.min(at + q.length - 1, map.length - 1)],
    line: lineAtOffset(text, map[at]),
    normalized: q,
  };
}

// --------------------------------------------------------------------------
// Сопоставление с gold
// --------------------------------------------------------------------------

function overlapRatio(a, b) {
  if (!a || !b) return 0;
  const [short, long] = a.length <= b.length ? [a, b] : [b, a];
  if (long.includes(short)) return 1;
  // наибольший общий префикс скользящим окном
  let best = 0;
  for (let size = short.length; size > 0 && best === 0; size--) {
    for (let s = 0; s + size <= short.length; s++) {
      if (long.includes(short.slice(s, s + size))) {
        best = size;
        break;
      }
    }
  }
  return best / short.length;
}

export function matchFindings(text, gold, findings) {
  const zones = gold.nonprose_ranges?.length ? gold.nonprose_ranges : computeZones(text);
  const records = (gold.records ?? []).map((r) => ({ ...r, normSpan: normalizeQuery(r.span) }));
  const matchedGold = new Map();
  const results = [];

  findings.forEach((f, idx) => {
    const loc = locate(text, f.quote ?? '');
    if (!loc.found) {
      results.push({ index: idx, decision: 'unlocatable', quote: f.quote, category: f.category });
      return;
    }
    const line = f.line ?? loc.line;
    const zone = zoneAtLine(zones, loc.line, loc.start);
    const nq = loc.normalized;

    let best = null;
    for (const r of records) {
      const ratio = overlapRatio(nq, r.normSpan);
      if (ratio < MIN_OVERLAP) continue;
      if (r.line != null && Math.abs(r.line - loc.line) > LINE_TOLERANCE) continue;
      if (!best || ratio > best.ratio) best = { record: r, ratio };
    }

    if (best) {
      const cats = [best.record.category, ...(best.record.alt_categories ?? [])].filter(Boolean);
      const catOk = cats.length === 0 || cats.includes(f.category) || cats.includes('*');
      const sevOk = best.record.severity_tolerance
        ? best.record.severity_tolerance.includes(f.severity)
        : null;
      const prev = matchedGold.get(best.record.id) ?? 0;
      matchedGold.set(best.record.id, prev + 1);
      results.push({
        index: idx,
        decision: 'matched',
        gold_id: best.record.id,
        polarity: best.record.polarity,
        overlap: Number(best.ratio.toFixed(3)),
        category_ok: catOk,
        severity_ok: sevOk,
        zone,
        line: loc.line,
        duplicate_of_gold: prev > 0,
      });
    } else {
      results.push({
        index: idx,
        decision: 'unmatched_extra',
        zone,
        line: loc.line,
        category: f.category,
        quote: f.quote,
      });
    }
  });

  // --- метрики ---
  const mustFind = records.filter((r) => r.polarity === 'must_find');
  const foundGoldIds = new Set(
    results.filter((r) => r.decision === 'matched' && r.polarity === 'must_find').map((r) => r.gold_id)
  );
  const total = findings.length;

  // may_flag поглощает спорное: такая находка не штрафуется, даже если попала в не-прозу —
  // мы сами признали случай двойственным, когда размечали фикстуру.
  const hardFpIdx = results
    .filter(
      (r) =>
        r.decision !== 'unlocatable' &&
        r.polarity !== 'may_flag' &&
        ((r.decision === 'matched' && r.polarity === 'must_not_flag') ||
          (r.zone && r.zone !== 'prose'))
    )
    .map((r) => r.index);
  const hardFp = new Set(hardFpIdx);

  const matched = results.filter((r) => r.decision === 'matched');
  // Категориальная точность осмысленна только там, где находка вообще ожидалась.
  const catScored = matched.filter((r) => r.polarity === 'must_find' || r.polarity === 'may_flag');
  const dupes = [...matchedGold.values()].reduce((s, n) => s + Math.max(0, n - 1), 0);
  const catByGold = new Map();
  for (const r of matched) {
    if (!catByGold.has(r.gold_id)) catByGold.set(r.gold_id, new Set());
    catByGold.get(r.gold_id).add(findings[r.index].category);
  }
  const crossCat = [...catByGold.values()].filter((s) => s.size >= 2).length;

  const zoneCounts = {};
  for (const r of results) {
    const z = r.decision === 'unlocatable' ? 'unlocatable' : r.zone ?? 'prose';
    zoneCounts[z] = (zoneCounts[z] ?? 0) + 1;
  }

  return {
    fixture: gold.fixture,
    total_findings: total,
    per_finding: results,
    metrics: {
      must_find_total: mustFind.length,
      must_find_matched: foundGoldIds.size,
      recall: mustFind.length ? Number((foundGoldIds.size / mustFind.length).toFixed(3)) : null,
      missed_gold_ids: mustFind.filter((r) => !foundGoldIds.has(r.id)).map((r) => r.id),
      hard_fp: hardFp.size,
      precision_strict: total ? Number((1 - hard_fp_safe(hardFp.size, total)).toFixed(3)) : null,
      unlocatable: results.filter((r) => r.decision === 'unlocatable').length,
      unlocatable_rate: total
        ? Number((results.filter((r) => r.decision === 'unlocatable').length / total).toFixed(3))
        : null,
      category_accuracy: catScored.length
        ? Number((catScored.filter((r) => r.category_ok).length / catScored.length).toFixed(3))
        : null,
      severity_vs_gold: (() => {
        const scored = matched.filter((r) => r.severity_ok !== null);
        return scored.length
          ? Number((scored.filter((r) => r.severity_ok).length / scored.length).toFixed(3))
          : null;
      })(),
      duplicate_rate: total ? Number((dupes / total).toFixed(3)) : null,
      cross_cat_dupe: catByGold.size ? Number((crossCat / catByGold.size).toFixed(3)) : null,
      unmatched_extra: results.filter((r) => r.decision === 'unmatched_extra').length,
      zone_counts: zoneCounts,
      findings_in_nonprose: Object.entries(zoneCounts)
        .filter(([k]) => k !== 'prose' && k !== 'unlocatable')
        .reduce((s, [, v]) => s + v, 0),
      expected_total_range: gold.expected_total_range ?? null,
      volume_per_1000w: gold.word_count_prose
        ? Number(((total / gold.word_count_prose) * 1000).toFixed(1))
        : null,
    },
  };
}

function hard_fp_safe(hardFp, total) {
  return total ? hardFp / total : 0;
}

// --------------------------------------------------------------------------
// CLI
// --------------------------------------------------------------------------

const [cmd, ...rest] = process.argv.slice(2);

if (cmd === 'zones') {
  const text = readFileSync(rest[0], 'utf8');
  console.log(JSON.stringify(computeZones(text), null, 2));
} else if (cmd === 'score') {
  const [fixturePath, goldPath, findingsPath] = rest;
  const text = readFileSync(fixturePath, 'utf8');
  const gold = JSON.parse(readFileSync(goldPath, 'utf8'));
  const findings = JSON.parse(readFileSync(findingsPath, 'utf8'));
  console.log(JSON.stringify(matchFindings(text, gold, Array.isArray(findings) ? findings : findings.findings), null, 2));
} else if (cmd === 'hardfp') {
  const [articlePath, findingsPath] = rest;
  const text = readFileSync(articlePath, 'utf8');
  const raw = JSON.parse(readFileSync(findingsPath, 'utf8'));
  const findings = Array.isArray(raw) ? raw : raw.findings;
  const zones = computeZones(text);
  const rows = findings.map((f, i) => {
    const loc = locate(text, f.quote ?? '');
    return {
      index: i,
      category: f.category,
      quote: (f.quote ?? '').slice(0, 80),
      located: loc.found,
      line: loc.found ? loc.line : null,
      zone: loc.found ? zoneAtLine(zones, loc.line, loc.start) : 'unlocatable',
    };
  });
  const counts = {};
  for (const r of rows) counts[r.zone] = (counts[r.zone] ?? 0) + 1;
  console.log(
    JSON.stringify(
      {
        article: articlePath,
        total: rows.length,
        zone_counts: counts,
        hard_fp: rows.filter((r) => r.zone !== 'prose' && r.zone !== 'unlocatable').length,
        unlocatable: rows.filter((r) => r.zone === 'unlocatable').length,
        rows,
      },
      null,
      2
    )
  );
} else if (cmd) {
  console.error(`unknown command: ${cmd}`);
  process.exit(1);
}
