#!/usr/bin/env node
// Краткая сводка по прогонам одного каталога runs/<id>: правила, prose-scan, стоимость.
import { readdirSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
const dir = process.argv[2];
if (!dir || !existsSync(`${dir}/raw`)) { console.error('нет каталога raw'); process.exit(1); }
let scanned = 0, total = 0, cost = 0, rulesSum = 0;
for (const f of readdirSync(`${dir}/raw`).filter((x) => x.endsWith('.jsonl')).sort()) {
  const o = JSON.parse(execSync(`node runner/parse-stream.mjs "${dir}/raw/${f}"`, { encoding: 'utf8', maxBuffer: 1e8 }));
  total++; if (o.prose_scan_executed) scanned++;
  cost += o.cost_usd || 0; rulesSum += o.rules_loaded.length;
  console.log(
    String(o.rules_loaded.length).padStart(2) + ' правил | scan:' + (o.prose_scan_executed ? 'да ' : 'НЕТ') +
    ' | $' + (o.cost_usd || 0).toFixed(3) + ' | ' + f.replace('.jsonl', ''));
}
console.log(`\nитого ${total} прогонов | prose-scan вызван в ${scanned}/${total} | правил в среднем ${(rulesSum / total).toFixed(1)} | стоимость $${cost.toFixed(2)}`);
