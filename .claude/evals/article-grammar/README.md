# Eval-сьюта скилла `article-grammar`

Измеряет, сколько реальных нарушений скилл находит, сколько выдумывает, стабилен ли между
прогонами и не проверяет ли он код вместо прозы.

Система под тестом: `/Users/DHX-XB/DOCS/skills/.claude/skills/article-grammar` (v1.1.0).
Версия скилла зафиксирована в [manifest.json](manifest.json) через sha256 `SKILL.md` и всех
15 файлов правил — по нему видно, против какой версии снят базлайн.

## Как запустить

~~~bash
# один файл через настоящий headless CLI
./runner/invoke.sh <run-id> <label> <path/to/article.md>

# все фикстуры тира (параллелизм 3, повторов 1)
./runner/run-fixtures.sh <run-id> tier-a 3 1

# поведенческие сценарии B1-B6
./runner/behavioral.sh <run-id>

# метрики по одной фикстуре
node runner/score.mjs score fixtures/tier-a/01-passive-voice.md \
  fixtures/tier-a/01-passive-voice.gold.json <findings.json>

# зоны не-прозы любой статьи (без gold)
node runner/score.mjs zones docs/grid/api/grid_addspan_method.md

# ложные срабатывания на реальной статье (без gold)
node runner/score.mjs hardfp <article.md> <findings.json>
~~~

`invoke.sh` копирует цель в `runs/<id>/inputs/` и указывает скиллу на копию — оригиналы
с разметкой недосягаемы. Он же снимает `CLAUDECODE` (иначе CLI отказывается стартовать
внутри сессии Claude Code) и закрывает stdin (иначе CLI виснет, не записав ни байта).

## Устройство

| Каталог | Что внутри |
| --- | --- |
| `fixtures/tier-a/` | 21 микрофикстура, по одной на категорию правил и inline-проверку. Разметка исчерпывающая |
| `fixtures/tier-b/` | негативные контроли: страницы, где находок быть не должно |
| `fixtures/tier-c/` | композитные страницы: пересечения правил и давление объёмом. Разметка якорная |
| `fixtures/behavioral/` | цель для сценариев B1-B6 |
| `corpus/sample.txt` | замороженный список реальных статей docs-suite для прогона на шум |
| `runner/` | вызов, парсер stream-json, скоринг, [спецификация сопоставления](runner/MATCHING.md) |
| `runs/` | результаты. Коммитится только `baseline-*` |

## Формат разметки

Рядом с каждой фикстурой лежит `<имя>.gold.json`. Смысл полей разобран в
[runner/MATCHING.md](runner/MATCHING.md); коротко о трёх, которые несут основную нагрузку:

- `nonprose_ranges` — строки frontmatter, заборов кода, `@`-макросов. Находка внутри такого
  диапазона считается ложным срабатыванием, даже если её нет в `records`.
- `polarity` — `must_find` (обязан найти), `must_not_flag` (обязан не трогать),
  `may_flag` (случай двойственный, не влияет на метрики ни в одну сторону).
- `alt_categories` — категории, под которыми та же находка тоже засчитывается верной.
  Нужны потому, что правила скилла пересекаются, и одна и та же фраза законно попадает
  в разные разделы отчёта.

## Пороги

Все в [thresholds.json](thresholds.json). Жёсткие: находок внутри кода — ноль, находок на
`tier-b/31-api-reference-page.md` — ноль, доля выдуманных цитат — не выше 2%, сценарии
B1 и B2 — pass.
