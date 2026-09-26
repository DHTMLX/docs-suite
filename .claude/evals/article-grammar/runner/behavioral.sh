#!/usr/bin/env bash
set -euo pipefail

# Прогоняет поведенческие сценарии B1-B6 через настоящий headless CLI.
# Каждый сценарий — отдельный вызов invoke.sh; результаты ложатся в runs/<run-id>/.
#
# Usage: behavioral.sh <run-id>

usage() { echo "Usage: $(basename "$0") <run-id>"; exit 1; }
[[ $# -lt 1 ]] && usage

RUN_ID="$1"
SUITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
INVOKE="$SUITE_DIR/runner/invoke.sh"
DOCS_ROOT="/Users/DHX-XB/DOCS/docs-suite"
TARGET_ABS="$SUITE_DIR/fixtures/behavioral/target.md"
TARGET_REL_ROOT=".claude/evals/article-grammar/fixtures/behavioral/target.md"
TARGET_REL_SUB="../.claude/evals/article-grammar/fixtures/behavioral/target.md"

run() {
  local label="$1"; shift
  echo "==> $label"
  # Сценарий, упавший по любой причине, не должен ронять остальные.
  "$@" >/dev/null 2>&1 || echo "    (exit != 0, см. meta/$label.json)"
}

# B1 — без аргумента, cwd = корень docs-suite. Скилл обязан спросить, а не выбрать файл сам.
run B1-no-arg env INVOKE_CWD="$DOCS_ROOT" "$INVOKE" "$RUN_ID" B1-no-arg

# B2 — модификация наблюдается, а не запрещается: --disallowedTools снят.
run B2-observe-writes env INVOKE_NO_DISALLOW=1 "$INVOKE" "$RUN_ID" B2-observe-writes "$TARGET_ABS"

# B5a — абсолютный путь (контрольный, должен пройти).
run B5a-abs env INVOKE_CWD="$DOCS_ROOT" INVOKE_PROMPT="/article-grammar $TARGET_ABS" \
  "$INVOKE" "$RUN_ID" B5a-abs

# B5b — относительный путь от корня репозитория.
run B5b-rel-root env INVOKE_CWD="$DOCS_ROOT" INVOKE_PROMPT="/article-grammar $TARGET_REL_ROOT" \
  "$INVOKE" "$RUN_ID" B5b-rel-root

# B5c — относительный путь из подкаталога: cwd не совпадает с базой пути.
run B5c-rel-subdir env INVOKE_CWD="$DOCS_ROOT/docs" INVOKE_PROMPT="/article-grammar $TARGET_REL_SUB" \
  "$INVOKE" "$RUN_ID" B5c-rel-subdir

# B5d — лишний токен после пути: закавыченный cat "$ARGUMENTS" должен на этом ломаться.
run B5d-extra-token env INVOKE_CWD="$DOCS_ROOT" INVOKE_PROMPT="/article-grammar $TARGET_ABS type:guide" \
  "$INVOKE" "$RUN_ID" B5d-extra-token

# B5e — два пути сразу.
run B5e-two-paths env INVOKE_CWD="$DOCS_ROOT" \
  INVOKE_PROMPT="/article-grammar $TARGET_ABS $SUITE_DIR/fixtures/tier-b/31-api-reference-page.md" \
  "$INVOKE" "$RUN_ID" B5e-two-paths

# B6 — симуляция контекста IDE. Настоящий тег headless не создаёт, поэтому это частичное покрытие.
run B6-ide-tag env INVOKE_CWD="$DOCS_ROOT" \
  INVOKE_PROMPT="<ide_opened_file>$TARGET_ABS</ide_opened_file>

/article-grammar" \
  "$INVOKE" "$RUN_ID" B6-ide-tag

echo "готово: $SUITE_DIR/runs/$RUN_ID"
