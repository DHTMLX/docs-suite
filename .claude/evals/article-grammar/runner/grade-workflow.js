export const meta = {
  name: 'article-grammar-grade',
  description: 'Извлечь находки из отчётов скилла, сопоставить с gold и рассудить расхождения',
  phases: [
    { title: 'Extract', detail: 'разбор текстовых отчётов в структурированные находки' },
    { title: 'Score', detail: 'механическое сопоставление с gold через score.mjs' },
    { title: 'Arbitrate', detail: 'независимый разбор находок вне разметки' },
  ],
}

const SUITE = '/Users/DHX-XB/DOCS/docs-suite/.claude/evals/article-grammar'
const SKILL = '/Users/DHX-XB/DOCS/skills/.claude/skills/article-grammar'

const ITEMS = args.items
const RUN_ID = args.runId

const EXTRACT_SCHEMA = {
  type: 'object',
  properties: {
    label: { type: 'string' },
    findings_count: { type: 'integer' },
    report_language: { type: 'string', enum: ['ru', 'en', 'mixed'] },
    format: {
      type: 'object',
      properties: {
        has_verdict_line: { type: 'boolean' },
        grouped_by_category: { type: 'boolean' },
        findings_with_all_five_fields: { type: 'integer' },
        severities_outside_enum: { type: 'integer' },
      },
      required: ['has_verdict_line', 'grouped_by_category', 'findings_with_all_five_fields'],
      additionalProperties: false,
    },
    wrote_file: { type: 'boolean' },
  },
  required: ['label', 'findings_count', 'format', 'wrote_file'],
  additionalProperties: false,
}

const SCORE_SCHEMA = {
  type: 'object',
  properties: {
    label: { type: 'string' },
    total_findings: { type: 'integer' },
    recall: { type: ['number', 'null'] },
    must_find_total: { type: 'integer' },
    must_find_matched: { type: 'integer' },
    missed_gold_ids: { type: 'array', items: { type: 'string' } },
    hard_fp: { type: 'integer' },
    precision_strict: { type: ['number', 'null'] },
    unlocatable: { type: 'integer' },
    category_accuracy: { type: ['number', 'null'] },
    severity_vs_gold: { type: ['number', 'null'] },
    duplicate_rate: { type: ['number', 'null'] },
    cross_cat_dupe: { type: ['number', 'null'] },
    unmatched_extra: { type: 'integer' },
    findings_in_nonprose: { type: 'integer' },
    zone_counts_json: { type: 'string' },
    extras_json: { type: 'string' },
  },
  required: ['label', 'total_findings', 'hard_fp', 'unmatched_extra', 'findings_in_nonprose'],
  additionalProperties: false,
}

const ARBITER_SCHEMA = {
  type: 'object',
  properties: {
    label: { type: 'string' },
    verdicts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          quote: { type: 'string' },
          category: { type: 'string' },
          verdict: { type: 'string', enum: ['true_positive_missing_from_gold', 'false_positive', 'ambiguous'] },
          reason: { type: 'string' },
        },
        required: ['quote', 'verdict', 'reason'],
        additionalProperties: false,
      },
    },
    true_positives: { type: 'integer' },
    false_positives: { type: 'integer' },
    ambiguous: { type: 'integer' },
  },
  required: ['label', 'verdicts', 'true_positives', 'false_positives', 'ambiguous'],
  additionalProperties: false,
}

function extractPrompt(it) {
  return `Разбери отчёт скилла article-grammar в структурированный список находок. Финальный ответ — данные.

Отчёт: ${SUITE}/runs/${RUN_ID}/reports/${it.label}.md
Проверявшийся файл: ${it.md}

Отчёт может быть на русском или на английском — язык вывода у скилла плавает. Извлекай смысл независимо от языка.

Для КАЖДОЙ находки в отчёте извлеки:
- category — приведи заголовок раздела к машинному имени из этого списка: passive-voice, gerunds, weak-verbs, misplaced-modifiers, pronouns, inversion, overused-words, abbreviations, wordiness, possessives, punctuation, tenses, articles, misused-words, api-formatting, long-sentences, repetition, vague-words, word-choice, obvious-concepts, generic-descriptions, prose-should-be-code, info-mapping. Не подходит ни одно — ставь "other".
- severity — suggestion | issue | critical, ровно как в отчёте. Другое значение — записывай как есть.
- location — строка локации из отчёта.
- line — номер строки, если он указан или однозначно выводится; иначе null.
- quote — ДОСЛОВНАЯ цитата проверяемого текста из поля Quote, без markdown-выделения, добавленного самим отчётом (** и * вокруг подсвеченных слов убери, но сам текст не меняй).
- why, fix — кратко.

Если одна находка перечисляет несколько цитат, сделай отдельную запись на каждую цитату.

Запиши результат JSON-массивом в ${SUITE}/runs/${RUN_ID}/graded/${it.label}.findings.json
(каталог создай через Bash: mkdir -p). Каждый элемент — объект с полями category, severity, location, line, quote, why, fix.

Дополнительно оцени формат отчёта:
- has_verdict_line — заканчивается ли отчёт однострочным вердиктом;
- grouped_by_category — сгруппированы ли находки по категориям;
- findings_with_all_five_fields — сколько находок имеют все пять полей (Severity, Location, Quote, Why it matters, Fix);
- severities_outside_enum — сколько severity вне трёх допустимых значений;
- report_language — ru, en или mixed;
- wrote_file — записал ли ты файл.`
}

function scorePrompt(it) {
  return `Запусти механический скоринг и верни его результат. Финальный ответ — данные.

Выполни через Bash РОВНО эту команду:
node ${SUITE}/runner/score.mjs score ${it.md} ${it.gold} ${SUITE}/runs/${RUN_ID}/graded/${it.label}.findings.json

Она печатает JSON с полями fixture, total_findings, per_finding[], metrics{}.
Сохрани её вывод в ${SUITE}/runs/${RUN_ID}/graded/${it.label}.score.json (перенаправлением, без правки содержимого).

Затем верни поля из metrics по схеме. label = "${it.label}".
zone_counts_json — поле metrics.zone_counts, сериализованное в строку.
extras_json — JSON-строка с массивом находок, у которых decision === "unmatched_extra";
для каждой возьми из per_finding поля quote, category, line, zone. Если таких нет — "[]".

Ничего не интерпретируй и не пересчитывай сам: числа берутся только из вывода команды.`
}

function arbiterPrompt(it, extrasJson) {
  return `Ты арбитр. Скилл article-grammar выдал находки, которых нет в эталонной разметке фикстуры. Реши по каждой, является ли она законной находкой, которую разметка просто не предусмотрела, или ложным срабатыванием. Финальный ответ — данные.

Проверявшийся файл: ${it.md}
Эталонная разметка: ${it.gold}
Правила скилла: ${SKILL}/SKILL.md и ${SKILL}/rules/

Находки вне разметки:
${extrasJson}

Для каждой:
1. Открой указанное место в файле и прочитай окружающий абзац.
2. Открой файл правил соответствующей категории и проверь, действительно ли текст нарушает конкретный пункт.
3. Проверь, не относится ли фрагмент к секции исключений этого правила и не лежит ли он в не-прозе (frontmatter, забор кода, @-макрос, URL). Лежит — это ложное срабатывание, без вариантов.

Вердикт:
- "true_positive_missing_from_gold" — настоящее нарушение, разметка его упустила;
- "false_positive" — текст корректен, либо правило применено неверно, либо фрагмент в не-прозе;
- "ambiguous" — обоснованно спорно.

При сомнении выбирай "false_positive": сьюта обязана быть строгой к скиллу, а не снисходительной. В reason ссылайся на конкретный пункт правила.`
}

phase('Extract')
const results = await pipeline(
  ITEMS,
  (it) => agent(extractPrompt(it), { label: `extract:${it.label}`, phase: 'Extract', schema: EXTRACT_SCHEMA, effort: 'low' })
    .then((ex) => ({ it, ex })),
  ({ it, ex }) => agent(scorePrompt(it), { label: `score:${it.label}`, phase: 'Score', schema: SCORE_SCHEMA, effort: 'low' })
    .then((sc) => ({ it, ex, sc })),
  ({ it, ex, sc }) => {
    const extras = sc?.extras_json ?? '[]'
    if (!sc || extras === '[]' || extras === '') return { it, ex, sc, arb: null }
    return agent(arbiterPrompt(it, extras), { label: `arbitrate:${it.label}`, phase: 'Arbitrate', schema: ARBITER_SCHEMA })
      .then((arb) => ({ it, ex, sc, arb }))
  }
)

const done = results.filter(Boolean).filter((r) => r.sc)
const sum = (f) => done.reduce((s, r) => s + (f(r) ?? 0), 0)

const mustFind = sum((r) => r.sc.must_find_total)
const matched = sum((r) => r.sc.must_find_matched)
const totalFindings = sum((r) => r.sc.total_findings)
const hardFp = sum((r) => r.sc.hard_fp)
const arbFp = sum((r) => r.arb?.false_positives)
const arbTp = sum((r) => r.arb?.true_positives)

log(`отчётов: ${done.length}; находок: ${totalFindings}; recall ${matched}/${mustFind}; hard FP ${hardFp}`)

return {
  run_id: RUN_ID,
  graded: done.length,
  failed: ITEMS.filter((i) => !done.some((d) => d.it.label === i.label)).map((i) => i.label),
  totals: {
    findings: totalFindings,
    must_find_total: mustFind,
    must_find_matched: matched,
    recall: mustFind ? Number((matched / mustFind).toFixed(3)) : null,
    hard_fp: hardFp,
    findings_in_nonprose: sum((r) => r.sc.findings_in_nonprose),
    unlocatable: sum((r) => r.sc.unlocatable),
    unmatched_extra: sum((r) => r.sc.unmatched_extra),
    arbiter_true_positives: arbTp,
    arbiter_false_positives: arbFp,
    arbiter_ambiguous: sum((r) => r.arb?.ambiguous),
    precision_adjusted: totalFindings
      ? Number((1 - (hardFp + arbFp) / totalFindings).toFixed(3))
      : null,
  },
  per_fixture: done.map((r) => ({
    label: r.it.label,
    findings: r.sc.total_findings,
    recall: r.sc.recall,
    missed: r.sc.missed_gold_ids ?? [],
    hard_fp: r.sc.hard_fp,
    in_nonprose: r.sc.findings_in_nonprose,
    unlocatable: r.sc.unlocatable,
    category_accuracy: r.sc.category_accuracy,
    duplicate_rate: r.sc.duplicate_rate,
    cross_cat_dupe: r.sc.cross_cat_dupe,
    extra_tp: r.arb?.true_positives ?? 0,
    extra_fp: r.arb?.false_positives ?? 0,
    language: r.ex?.report_language ?? null,
    format_ok: r.ex?.format?.has_verdict_line && r.ex?.format?.grouped_by_category,
  })),
}
