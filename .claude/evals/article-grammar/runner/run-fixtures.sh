#!/usr/bin/env bash
set -euo pipefail
# Прогоняет скилл по всем фикстурам указанного тира. Параллелизм ограничен,
# чтобы одновременные headless-сессии не забивали машину.
#
# Usage: run-fixtures.sh <run-id> <tier-dir> [parallel] [reps]
usage() { echo "Usage: $(basename "$0") <run-id> <tier-dir> [parallel] [reps]"; exit 1; }
[[ $# -lt 2 ]] && usage

RUN_ID="$1"; TIER="$2"; PAR="${3:-3}"; REPS="${4:-1}"
SUITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

pids=()
for f in "$SUITE_DIR/fixtures/$TIER"/*.md; do
  base="$(basename "$f" .md)"
  for r in $(seq 1 "$REPS"); do
    label="$(echo "$TIER" | tr '/' '-')-${base}"
    [[ "$REPS" -gt 1 ]] && label="${label}-r${r}"
    while [[ "$(jobs -rp | wc -l)" -ge "$PAR" ]]; do wait -n 2>/dev/null || sleep 2; done
    ( "$SUITE_DIR/runner/invoke.sh" "$RUN_ID" "$label" "$f" >/dev/null 2>&1 || true ) &
    pids+=($!)
  done
done
wait
echo "готово: $(ls "$SUITE_DIR/runs/$RUN_ID/meta"/*.json 2>/dev/null | wc -l) прогонов"
