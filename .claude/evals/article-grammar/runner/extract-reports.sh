#!/usr/bin/env bash
set -euo pipefail
# Достаёт текст отчёта из каждого stream-json прогона в runs/<run-id>/reports/<label>.md
# Usage: extract-reports.sh <run-id>
[[ $# -lt 1 ]] && { echo "Usage: $(basename "$0") <run-id>"; exit 1; }
RUN_ID="$1"
SUITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RAW="$SUITE_DIR/runs/$RUN_ID/raw"
OUT="$SUITE_DIR/runs/$RUN_ID/reports"
mkdir -p "$OUT"
n=0
for f in "$RAW"/*.jsonl; do
  [[ -s "$f" ]] || continue
  label="$(basename "$f" .jsonl)"
  node "$SUITE_DIR/runner/parse-stream.mjs" "$f" \
    | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{
        const o=JSON.parse(s);process.stdout.write(o.result_text||"");})' > "$OUT/$label.md"
  n=$((n+1))
done
echo "извлечено отчётов: $n → $OUT"
