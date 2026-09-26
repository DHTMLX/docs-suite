#!/usr/bin/env node
// Сравнивает прогон с зафиксированным базлайном по метрикам, ради которых вносились правки.
//
// Usage: node compare.mjs <runs/<id>> [<runs/<id2>> ...]
// Каждый каталог должен содержать graded/*.score.json.

import { readFileSync, readdirSync, existsSync } from 'node:fs';

const BASELINE = JSON.parse(readFileSync('runs/baseline-1.1.0-opus/results.json', 'utf8'));

function aggregate(dirs) {
  const T = { findings: 0, mf: 0, matched: 0, hardFp: 0, nonprose: 0, unloc: 0, extra: 0,
              dupes: 0, catOk: 0, catTot: 0, fenceHits: 0 };
  const perFixture = [];
  for (const dir of dirs) {
    const g = `${dir}/graded`;
    if (!existsSync(g)) continue;
    for (const f of readdirSync(g).filter((x) => x.endsWith('.score.json'))) {
      const s = JSON.parse(readFileSync(`${g}/${f}`, 'utf8'));
      const m = s.metrics;
      T.findings += s.total_findings; T.mf += m.must_find_total; T.matched += m.must_find_matched;
      T.hardFp += m.hard_fp; T.nonprose += m.findings_in_nonprose; T.unloc += m.unlocatable;
      T.extra += m.unmatched_extra; T.dupes += Math.round((m.duplicate_rate || 0) * s.total_findings);
      T.fenceHits += (m.zone_counts?.code_fence ?? 0);
      const mt = s.per_finding.filter((p) => p.decision === 'matched' &&
        (p.polarity === 'must_find' || p.polarity === 'may_flag'));
      T.catTot += mt.length; T.catOk += mt.filter((p) => p.category_ok).length;
      perFixture.push({ label: f.replace('.score.json', ''), findings: s.total_findings,
        recall: m.recall, nonprose: m.findings_in_nonprose, unloc: m.unlocatable });
    }
  }
  return { T, perFixture };
}

const { T, perFixture } = aggregate(process.argv.slice(2));
const r = (x) => (x === null || Number.isNaN(x) ? null : Number(x.toFixed(3)));
const b = BASELINE;
const baseAll = {
  findings: b.tier_a.findings + b.tier_bc.findings,
  mf: b.tier_a.must_find + b.tier_bc.must_find,
  matched: b.tier_a.matched + b.tier_bc.matched,
  nonprose: b.tier_a.findings_in_nonprose + b.tier_bc.findings_in_nonprose,
  unloc: b.tier_a.unlocatable + b.tier_bc.unlocatable,
  hardFp: b.tier_a.hard_fp + b.tier_bc.hard_fp,
};

const rows = [
  ['находок всего', baseAll.findings, T.findings, null],
  ['recall', r(baseAll.matched / baseAll.mf), r(T.matched / T.mf), 'выше — лучше'],
  ['находок в не-прозе', baseAll.nonprose, T.nonprose, 'цель 0'],
  ['  из них в код-заборах', '—', T.fenceHits, 'цель 0'],
  ['выдуманных цитат', baseAll.unloc, T.unloc, 'цель ≤2%'],
  ['  доля', r(baseAll.unloc / baseAll.findings), r(T.unloc / T.findings), ''],
  ['hard FP', baseAll.hardFp, T.hardFp, 'ниже — лучше'],
  ['precision_strict', r(1 - baseAll.hardFp / baseAll.findings), r(1 - T.hardFp / T.findings), 'цель ≥0.75'],
  ['category_accuracy', b.tier_a.category_accuracy, r(T.catOk / T.catTot), 'цель ≥0.85'],
  ['duplicate_rate', b.tier_a.duplicate_rate, r(T.dupes / T.findings), 'цель ≤0.10'],
];

console.log('метрика'.padEnd(26) + 'базлайн 1.1.0'.padStart(14) + 'сейчас'.padStart(10) + '   заметка');
for (const [name, was, now, note] of rows) {
  console.log(name.padEnd(26) + String(was).padStart(14) + String(now).padStart(10) + '   ' + (note ?? ''));
}

const key = ['31-api-reference-page', '32-code-heavy', '43-long-form', '30-clean-prose', '33-exception-clauses'];
console.log('\nключевые фикстуры:');
for (const k of key) {
  const f = perFixture.find((p) => p.label.includes(k));
  if (f) console.log(`  ${k.padEnd(24)} находок ${String(f.findings).padStart(3)}  recall ${f.recall ?? '—'}  в не-прозе ${f.nonprose}`);
}
