#!/usr/bin/env bash
set -euo pipefail
# Прогоняет скилл по замороженной выборке реальных статей docs-suite.
# Usage: run-corpus.sh <run-id> [parallel]
[[ $# -lt 1 ]] && { echo "Usage: $(basename "$0") <run-id> [parallel]"; exit 1; }
RUN_ID="$1"; PAR="${2:-2}"
SUITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DOCS_ROOT="/Users/DHX-XB/DOCS/docs-suite"

while read -r rel; do
  [[ -n "$rel" ]] || continue
  label="corpus-$(echo "${rel#docs/}" | tr '/' '-' | sed 's/\.md$//')"
  while [[ "$(jobs -rp | wc -l)" -ge "$PAR" ]]; do wait -n 2>/dev/null || sleep 2; done
  # Бюджет выше обычного: в выборке есть страницы на 7-18 тысяч слов.
  ( EVAL_BUDGET=1.20 "$SUITE_DIR/runner/invoke.sh" "$RUN_ID" "$label" "$DOCS_ROOT/$rel" >/dev/null 2>&1 || true ) &
done < "$SUITE_DIR/corpus/sample.txt"
wait
echo "готово: $(ls "$SUITE_DIR/runs/$RUN_ID/meta"/*.json 2>/dev/null | wc -l) прогонов"
