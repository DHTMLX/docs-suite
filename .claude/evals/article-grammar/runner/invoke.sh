#!/usr/bin/env bash
set -euo pipefail

# Канонический вызов скилла article-grammar под тестом.
# Единственное место, где формируется команда claude -p — не дублировать её нигде.
#
# Usage: invoke.sh <run-id> <label> [target-file]
#
#   run-id       имя каталога под runs/, например 2026-08-28-1400
#   label        имя прогона, используется для имён файлов (например tier-b-31 или B1-no-arg)
#   target-file  файл для ревью. Копируется в runs/<run-id>/inputs/ и скиллу
#                передаётся путь к копии — оригиналы с gold-разметкой недосягаемы.
#                Опущен для сценариев без аргумента (B1).
#
# Переменные окружения:
#   EVAL_MODEL          модель (по умолчанию opus)
#   EVAL_EFFORT         уровень усилий (по умолчанию high)
#   EVAL_BUDGET         предел стоимости одного вызова в USD (по умолчанию 0.50)
#   INVOKE_CWD          рабочая директория вызова (по умолчанию корень docs-suite)
#   INVOKE_PROMPT       переопределяет промпт целиком (для B1/B5/B6)
#   INVOKE_NO_DISALLOW  =1 снимает --disallowedTools, чтобы модификация наблюдалась (B2)
#   INVOKE_TIMEOUT      таймаут в секундах (по умолчанию 600)

usage() {
  sed -n '4,25p' "$0" | sed 's/^# \{0,1\}//'
  exit 1
}

[[ $# -lt 2 ]] && usage

SUITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RUN_ID="$1"
LABEL="$2"
TARGET="${3:-}"

EVAL_MODEL="${EVAL_MODEL:-opus}"
EVAL_EFFORT="${EVAL_EFFORT:-high}"
EVAL_BUDGET="${EVAL_BUDGET:-0.50}"
INVOKE_CWD="${INVOKE_CWD:-/Users/DHX-XB/DOCS/docs-suite}"
INVOKE_TIMEOUT="${INVOKE_TIMEOUT:-600}"

RUN_DIR="$SUITE_DIR/runs/$RUN_ID"
mkdir -p "$RUN_DIR/raw" "$RUN_DIR/inputs" "$RUN_DIR/meta"

# --- подготовка цели -------------------------------------------------------
ABS_TARGET=""
SHA_BEFORE=""
if [[ -n "$TARGET" ]]; then
  [[ -f "$TARGET" ]] || { echo "ERROR: target not found: $TARGET" >&2; exit 2; }
  COPY="$RUN_DIR/inputs/${LABEL}__$(basename "$TARGET")"
  cp "$TARGET" "$COPY"
  ABS_TARGET="$COPY"
  SHA_BEFORE="$(shasum -a 256 "$COPY" | awk '{print $1}')"
fi

# --- промпт ----------------------------------------------------------------
if [[ -n "${INVOKE_PROMPT:-}" ]]; then
  PROMPT="$INVOKE_PROMPT"
elif [[ -n "$ABS_TARGET" ]]; then
  PROMPT="/article-grammar $ABS_TARGET"
else
  PROMPT="/article-grammar"
fi

# --- команда ---------------------------------------------------------------
ARGS=(
  -p "$PROMPT"
  --output-format stream-json --verbose
  --model "$EVAL_MODEL" --effort "$EVAL_EFFORT"
  --permission-mode dontAsk
  --no-session-persistence
  --max-budget-usd "$EVAL_BUDGET"
)
if [[ "${INVOKE_NO_DISALLOW:-0}" != "1" ]]; then
  ARGS+=(--disallowedTools "Edit" "Write" "NotebookEdit" "MultiEdit")
fi

STREAM="$RUN_DIR/raw/${LABEL}.jsonl"
META="$RUN_DIR/meta/${LABEL}.json"

# CLAUDECODE и CLAUDE_CODE_ENTRYPOINT снимаются намеренно: без этого CLI отказывается
# стартовать внутри другой сессии Claude Code ("cannot be launched inside another
# Claude Code session"), а вся сьюта запускается именно оттуда.
START="$(date +%s)"
set +e
# stdin закрывается обязательно: с унаследованным открытым stdin CLI виснет на старте,
# не записав ни байта в stream-json.
( cd "$INVOKE_CWD" && exec env -u CLAUDECODE -u CLAUDE_CODE_ENTRYPOINT -u CLAUDE_CODE_SSE_PORT \
    claude "${ARGS[@]}" ) < /dev/null > "$STREAM" 2> "$RUN_DIR/raw/${LABEL}.stderr"
EXIT_CODE=$?
set -e
END="$(date +%s)"

# --- пост-проверки ---------------------------------------------------------
SHA_AFTER=""
MODIFIED="null"
if [[ -n "$ABS_TARGET" ]]; then
  SHA_AFTER="$(shasum -a 256 "$ABS_TARGET" | awk '{print $1}')"
  if [[ "$SHA_BEFORE" == "$SHA_AFTER" ]]; then MODIFIED="false"; else MODIFIED="true"; fi
fi

# Прогон, упавший в лимит или иную ошибку API, не должен молча считаться валидным.
RUN_IS_ERROR="unknown"
if [[ -s "$STREAM" ]]; then
  RUN_IS_ERROR="$(node -e '
    const fs=require("fs");
    const lines=fs.readFileSync(process.argv[1],"utf8").split("\n").filter(Boolean);
    let v="unknown";
    for (const l of lines) { try { const e=JSON.parse(l); if (e.type==="result") v=String(!!e.is_error); } catch {} }
    process.stdout.write(v);
  ' "$STREAM")"
fi

cat > "$META" <<EOF
{
  "label": "$LABEL",
  "run_id": "$RUN_ID",
  "prompt": $(printf '%s' "$PROMPT" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>process.stdout.write(JSON.stringify(s)))'),
  "target_original": "${TARGET:-}",
  "target_copy": "${ABS_TARGET:-}",
  "cwd": "$INVOKE_CWD",
  "model": "$EVAL_MODEL",
  "effort": "$EVAL_EFFORT",
  "exit_code": $EXIT_CODE,
  "wall_seconds": $((END - START)),
  "sha_before": "${SHA_BEFORE:-}",
  "sha_after": "${SHA_AFTER:-}",
  "target_modified": $MODIFIED,
  "run_is_error": "$RUN_IS_ERROR",
  "disallowed_tools_applied": $([[ "${INVOKE_NO_DISALLOW:-0}" == "1" ]] && echo false || echo true),
  "stream": "$STREAM"
}
EOF

echo "$META"
exit $EXIT_CODE
