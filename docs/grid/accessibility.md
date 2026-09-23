---
sidebar_label: Accessibility
title: JavaScript Grid - Accessibility
description: You can learn about accessibility and keyboard navigation in DHTMLX Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Accessibility in DHTMLX Grid

DHTMLX Grid is built to be usable by everyone, including people who rely on keyboards, screen readers, screen magnification, or high-contrast display modes. WAI-ARIA semantics are part of the rendered markup, and a single, coherent focus model spans the header, body, and footer.

:::info Target conformance
DHTMLX Grid is designed to meet **WCAG 2.2 Level AA**, **Section 508** of the U.S. Rehabilitation Act, and **EN 301 549** (the technical baseline of the European Accessibility Act). Because WCAG 2.2 AA also satisfies ADA and Section 508 expectations, a single conformance target covers the major regulatory requirements.

Conformance is reported criterion by criterion rather than as a blanket claim. The detailed **Accessibility Conformance Report (VPAT® 2.5)** is available: [Accessibility Conformance Report](grid/accessibility_conformance_report.md).
:::

## At a glance

| Area | Support |
| ---- | ------- |
| Keyboard operation | Full: cell navigation, editing, sorting, range selection, tree expand/collapse, and clipboard all have keyboard equivalents. Cell navigation works in every configuration, with or without a selection module |
| WAI-ARIA semantics | Built-in (`grid` / `treegrid` model), enabled by default |
| Focus model | A single tab stop for the whole cell surface; focus moves between header, body, and footer |
| Selection model | Optional: single-cell/row (`selection`) or spreadsheet-style range (`blockSelection`), for selecting cells and ranges |
| Screen readers | Tested with NVDA, JAWS and VoiceOver |
| Visual accessibility | Dedicated light and dark high-contrast themes — colour-blind friendly, AA contrast, 16px base — and non-colour cues |
| Text resize / zoom | Layout remains operable up to 400% zoom / text spacing overrides |
| Customization | Public `announce()` API for dynamic messages, and localizable `aria_*` strings for every built-in screen-reader description |
| Standards | WCAG 2.2 AA, Section 508, EN 301 549 |

Use this page to verify the component against your own accessibility checklist, and to learn how to configure the Grid for an accessible deployment.

<!-- TODO: link to the live Accessibility sample here, in the form:
     To try it hands-on, see the live [Accessibility sample](<snippet url>). -->

## Scope

This guide covers the Grid widget itself:

- the **data body** — cells and rows, including tree mode (`type: "tree"`)
- the **column header** — sortable headers and in-header filters
- the **footer** — summaries and footer filters
- the **inline editors**
- the keyboard model that connects these zones.

As with any embeddable component, the accessibility of the final page also depends on the host application (see [Host-page responsibilities](#host-page-responsibilities)).

## Setting up an accessible Grid {#recommendedconfiguration}

The Grid ships accessible by default: WAI-ARIA output is emitted automatically, and keyboard navigation is on ([`keyNavigation: true`](grid/api/grid_keynavigation_config.md)), so the whole cell surface can be reached and walked with the keyboard in any configuration. For a fully WCAG 2.2 AA-compliant deployment, the only other thing you need is an AA-contrast theme. The recommended configuration is:

~~~jsx
// 1. WAI-ARIA output and keyboard navigation are enabled by default - no action needed
const grid = new dhx.Grid("grid_container", {
    columns: [/* ... */],
    data: dataset,
    keyNavigation: true // true - by default
});

// 2. Select an AA-conformant theme
dhx.setTheme("contrast-light"); // or "contrast-dark"
~~~

The theme can also be applied through the `data-dhx-theme` attribute of the container or of the root element; see the [Themes overview](/themes/) for all the options.

Add a selection module only when users need to select cells or ranges; see the next section.

### Keyboard navigation with and without selection {#selectionmodules}

#### Without a selection module

A grid configured without `selection` and `blockSelection` is still fully navigable. The active cell moves with the arrow keys, <kbd>Home</kbd> / <kbd>End</kbd>, <kbd>Ctrl</kbd> + <kbd>Home</kbd> / <kbd>End</kbd>, <kbd>Page Up</kbd> / <kbd>Page Down</kbd> and <kbd>Tab</kbd>, and it is scrolled into view, including next to frozen columns and rows. Moving it selects nothing: `aria-selected` is not set, no selection event fires, and no selection styling is painted. This is the configuration to use for a read-only table:

~~~jsx
// A read-only grid that can still be walked cell by cell
const grid = new dhx.Grid("grid_container", {
    columns: [/* ... */],
    data: dataset
});
~~~

:::note
Opening an editor from the keyboard (<kbd>Enter</kbd>, <kbd>F2</kbd>, <kbd>Space</kbd>) requires only `editable: true`; no selection module is needed.
:::

#### With a selection module

When a selection module is enabled, the selection moves together with the active cell and is exposed through `aria-selected`. The two modules are independent and drive different ARIA output and shortcut semantics.

##### 1. Cell / row selection — selection

A single active cell (or row) moves with the arrow keys. This populates `aria-selected` on the focused cell or row. Extending the selection with <kbd>Shift</kbd> is enabled only when `multiselection: true`; without it, <kbd>Shift</kbd>+arrow moves the active cell.

~~~jsx
// Single active cell, navigable with arrows / Tab / Home / End / Page Up·Down
const grid = new dhx.Grid("grid_container", {
    columns: [/* ... */],
    data: dataset,
    selection: "complex", // "cell" | "row" | "complex"
    multiselection: true, // enables Shift+Arrow multi-select
    keyNavigation: true,  // default
    sortable: true        // default — keyboard sort in headers
});
~~~

| `selection` value | Meaning |
| --- | --- |
| `"cell"` | One active cell; <kbd>Shift</kbd>+arrow extends when `multiselection: true` |
| `"row"` | One active row; arrows move the whole row, `aria-selected` is on the row |
| `"complex"` | Cell- and row-style selection combined |
| `true` | Equivalent to cell selection |
| *falsy / unset* | Selection (and `aria-selected`) disabled; keyboard navigation still works |

##### 2. Range / block selection — blockSelection

Spreadsheet-style rectangular ranges. The arrow keys move the range anchor; <kbd>Shift</kbd>+arrows grow or shrink the rectangle; <kbd>Delete</kbd> clears the range (when editing is enabled). This applies in **"range"** mode.

~~~jsx
// Google-Sheets-style range selection
const grid = new dhx.Grid("grid_container", {
    columns: [/* ... */],
    data: dataset,
    blockSelection: true, // range mode (Shift+Arrow grows the rectangle)
    editable: true,       // allows Delete to clear the range
    keyNavigation: true
});
~~~

| `blockSelection` value | Mode | Keyboard effect |
| ---------------------- | ---- | --------------- |
| `true` | range | Arrows move the range; <kbd>Shift</kbd>+arrows extend the rectangle; <kbd>Delete</kbd> clears it |

Both modules use the same navigation keys; the Grid responds to whichever module is active.

#### TreeGrid

TreeGrid mode (`type: "tree"`) adds `role="treegrid"`, `aria-level` and `aria-expanded`, and enables arrow-key expand/collapse:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [/* ... */],
    data: dataset,
    type: "tree",
    selection: "complex"
});
~~~

<!-- TODO: live demo iframe for the accessible grid setup, as:
     <iframe src="https://snippet.dhtmlx.com/<id>?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe> -->

The sections below describe each capability in detail.

## WAI-ARIA Attributes

WAI-ARIA roles and attributes are added to the component markup automatically and are **enabled by default**. The Grid exposes itself to assistive technology as an interactive grid (or treegrid) of rows and cells, with a separate group for the header and footer. The semantics are applied per structural part of the widget, so each part is announced with the correct role and state.

### Grid container

The following table lists the container role and the grid-wide attributes, which describe the grid as a whole. They are applied to the content element of the grid, which holds the header, body, footer and frozen zones:

| Selector | Role / attribute | Purpose |
| -------- | ---------------- | ------- |
| `.dhx_grid-content` | `role="grid"` | Standard grid |
| `.dhx_grid-content` | `role="treegrid"` | TreeGrid (`type: "tree"`) |
| `.dhx_grid-content` | `aria-rowcount` | Total number of data rows |
| `.dhx_grid-content` | `aria-colcount` | Number of visible columns |
| `.dhx_grid-content` | `aria-readonly` | `"true"` when the grid is not editable |
| `.dhx_grid-content` | `aria-multiselectable` | `"true"` when multi-selection is enabled |

### Rows and cells

The following table lists the roles and the position and state attributes applied to data rows and cells, which let assistive technology announce where the user is:

| Selector | Role / attribute | Purpose |
| -------- | ---------------- | ------- |
| Data row | `role="row"` | A row of the grid |
| Data row | `aria-rowindex` | 1-based row position |
| Data cell | `role="gridcell"` | A data cell |
| Data cell | `aria-colindex` | 1-based column position |
| Data cell | `aria-readonly` | `"true"` when the cell is not editable |
| Data cell | `aria-selected` | Selection state of the cell, when a selection module is enabled |
| Data cell | `tabindex` | `"0"` on exactly one cell (the active cell), `"-1"` on the rest, so the cell surface is a single tab stop |
| Merged cell | `aria-colspan` / `aria-rowspan` | Number of columns / rows the merged cell covers |

### Tree (TreeGrid) rows

The following table lists the hierarchy attributes applied to tree rows and the role on the expand/collapse toggle in TreeGrid mode (`type: "tree"`), which convey the row's depth and open/closed state:

| Selector | Role / attribute | Purpose |
| -------- | ---------------- | ------- |
| Tree row | `aria-level` | Depth of the row in the hierarchy |
| Tree row | `aria-expanded` | Open/closed state of a branch with children |
| Tree row | `aria-selected` | Selection state of the row |
| Expand/collapse toggle | `role="button"` + `aria-label` | `"Expand group"` / `"Collapse group"` |

### Header and footer

The following table lists the roles and attributes applied to the header and footer groups, rows, and cells, which expose the column headers, sort state, and filter controls:

| Selector | Role / attribute | Purpose |
| -------- | ---------------- | ------- |
| Header/footer group | `role="rowgroup"` | Groups the header or footer rows |
| Header/footer row | `role="row"` + `aria-rowindex` | A header or footer row |
| Header cell | `role="columnheader"` + `aria-sort` | Column header; `aria-sort` is `none` / `ascending` / `descending` and is present only on sortable columns |
| Footer cell | `role="gridcell"` + `aria-colindex` | A footer (summary) cell |
| Content (filter) cell | `role="gridcell"` | Header/footer cell hosting a filter control |
| Sort affordance | `role="button"` + `aria-label="Sort by …"` | Keyboard- and pointer-activatable sort trigger |

### Editors and filters

In-place editor inputs and header/footer filters receive an accessible name derived from column header text, so screen-reader users hear which column they are editing or filtering. For example, a filter input is labeled `"Filter {column}"` and a date filter `"Filter by date: {column}"`.

### Hidden and decorative elements

Resizer grips, sort icons, sort-order counters, drag ghosts, drop indicators, and the selection overlay are removed from the accessibility tree with `aria-hidden="true"` / `role="presentation"`, so screen readers are not cluttered with redundant markup. The hidden focus sentinels that let the keyboard enter and leave the widget are placed outside the grid role and are not exposed as controls.

## Screen reader support

DHTMLX Grid is tested against the most widely used assistive technologies:

| Screen reader | Browser | Platform |
| ------------- | ------- | -------- |
| NVDA | Firefox | Windows |
| JAWS | Chrome | Windows |
| VoiceOver | Safari | macOS |

Rows and cells carry their position (`aria-rowindex` / `aria-colindex`) against the grid totals (`aria-rowcount` / `aria-colcount`). Because these are absolute positions in the dataset rather than positions in the DOM, they stay correct while rows and columns are virtualized: a screen reader announces "row 4,812 of 50,000" even though only the visible window exists in the markup.

The rest of the state travels the same way, on the element it belongs to:

| State | Exposed through | Read on |
| ------ | --------------- | ------- |
| Selection | `aria-selected` | The selected cell, or the row in `selection: "row"` mode, when a selection module is enabled |
| Editability | `aria-readonly` | The grid container and each cell |
| Sort direction | `aria-sort` (`none` / `ascending` / `descending`) | The header of a sortable column |
| Hierarchy | `aria-level`, `aria-expanded` | Tree rows (`type: "tree"`) |
| Merged cells | `aria-colspan`, `aria-rowspan` | The merged cell |
| Multi-selection capability | `aria-multiselectable` | The grid container |

Editors and filters take their accessible name from the column header text, so the user always hears which column is in play. Decorative markup — resizer grips, sort icons, drag ghosts, drop indicators, the selection overlay — is hidden from the accessibility tree, so nothing redundant is announced.

### Announcing dynamic changes

For things that *happen* and have no permanent element to label — a completed load, a filter result, a corrected value — the Grid writes text into a visually hidden live region (`role="status"`, `aria-live="polite"`, `aria-atomic="true"`) that the screen reader reads aloud without moving focus. The region is available to your own code through the [`announce()`](grid/api/grid_announce_method.md) method:

~~~jsx
grid.announce("5 rows imported");
~~~

The message is always **polite**: the screen reader finishes its current sentence first, so an announcement never interrupts the user.

The Grid already announces the following out of the box:

| Event | Announced text |
| ----- | -------------- |
| Sorting by a column | `Sorted by {column}, ascending` / `Sorted by {column}, descending` |
| Applying a filter | `{count} rows match the filter` |
| Clearing the filter | `Filter cleared, {count} rows` |
| Loading data | `{count} rows loaded` |
| Entering an out-of-range number in an editor | `Value must be between {min} and {max}` and, once it is fixed, `Value corrected to {value}` |

### Translatable screen-reader names

The strings the screen reader hears live in the Grid locale, so they translate with the rest of the UI. They fall into two groups:

- **announcements** — `aria_sortedAscending`, `aria_sortedDescending`, `aria_filterApplied`, `aria_filterCleared`, `aria_rowsLoaded`, `aria_valueOutOfRange`, `aria_valueBelowMin`, `aria_valueAboveMax`, `aria_valueClamped`;
- **accessible names** — `aria_sortBy`, `aria_filter`, `aria_filterByDate`, `aria_expandGroup`, `aria_collapseGroup`, `aria_expandRow`, `aria_collapseRow`, `aria_editContent`, `aria_subRow`, `aria_rowId`, and the drag-panel names.

Override them like any other locale label, before the Grid is initialized:

~~~jsx
dhx.i18n.setLocale("grid", {
    aria_sortBy: "Sortieren nach {column}",
    aria_rowsLoaded: "{count} Zeilen geladen"
});

const grid = new dhx.Grid("grid_container", config);
~~~

Placeholders in curly braces (`{column}`, `{count}`, `{min}`, `{max}`, `{value}`, `{id}`) are substituted at runtime and must be kept in the translated string. See the [Localization](grid/localization.md) article for the full locale workflow.

## Keyboard navigation

Keyboard navigation is on by default (`keyNavigation: true`); set `keyNavigation: false` to opt out. It works in every configuration: without a selection module the keys move the active cell, and with one they move the selection as well — see [Keyboard navigation with and without selection](#selectionmodules). Focus enters the Grid through hidden focus sentinels placed before the header and after the footer, which direct it into the correct zone. Within each zone a single cell is the tab stop, and the arrow keys move between cells from there. <kbd>Tab</kbd> at the first or the last cell leaves the Grid in every configuration, including one with frozen columns (`leftSplit` / `rightSplit`).

Shortcuts are organized into **zones** — body, header, footer — and resolved by where focus currently is. The full reference is in the [Keyboard navigation](grid/configuration.md#keyboard-navigation) article; the tables below summarize it.

### Grid body

| Keys | Action | Requires |
| ---- | ------ | -------- |
| <kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> | Move the active cell one row/column (<kbd>↑</kbd> from the first row enters the header; <kbd>↓</kbd> from the last row enters the footer when a footer exists) | — |
| <kbd>Ctrl</kbd> + arrow | Jump the active cell to the first/last cell in that direction | — |
| <kbd>Shift</kbd> + arrow | Extend the selection by one cell | `selection` with `multiselection: true`, or `blockSelection` range |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + arrow | Extend the selection to the edge | as above |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move to the first / last column of the current row | — |
| <kbd>Ctrl</kbd> + <kbd>Home</kbd> / <kbd>Ctrl</kbd> + <kbd>End</kbd> | Move to the first / last cell of the grid | — |
| <kbd>Shift</kbd> + <kbd>Home</kbd> / <kbd>End</kbd>, <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> / <kbd>End</kbd> | Extend the selection to the row/grid extent | extend-capable modes |
| <kbd>Page Up</kbd> / <kbd>Page Down</kbd> | Move the active cell up / down by one page of visible rows | — |
| <kbd>Shift</kbd> + <kbd>Page Up</kbd> / <kbd>Page Down</kbd> | Extend the selection by one page | extend-capable modes |
| <kbd>Enter</kbd> | Open the editor (or toggle a boolean cell); when editing, commit and close | `editable` |
| <kbd>F2</kbd> | Open the editor of the active cell (non-boolean) | `editable` |
| <kbd>Space</kbd> | Toggle a boolean cell | `editable` |
| <kbd>Escape</kbd> | Cancel editing without saving | `editable` |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move to the next / previous cell, wrapping rows; exits to the footer / header at the ends | — |
| <kbd>Delete</kbd> | Clear the selected range | `blockSelection` range mode and `editable` |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Undo / Redo | History module |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | Expand / collapse the row (`type: "tree"`) | TreeGrid |
| <kbd>→</kbd> / <kbd>←</kbd> (tree column) | Expand / collapse a branch, or move to first child / parent | TreeGrid |

### Header

| Keys | Action |
| ---- | ------ |
| <kbd>←</kbd> / <kbd>→</kbd> | Move between header cells (colspan-aware) |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Move between header rows (multi-row header); <kbd>↑</kbd> from the first row has no effect, <kbd>↓</kbd> from the last row moves into the body |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Sort by the column; on a filter cell, <kbd>Enter</kbd> activates the filter control |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | Toggle multi-sort for the column (requires `multiSort`) |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move within the header with row wrapping; exits to the body / out of the grid at the ends |
| <kbd>Escape</kbd> | Deactivate a filter control (restoring focus to its cell), or return focus to the body |

### Footer

| Keys | Action |
| ---- | ------ |
| <kbd>←</kbd> / <kbd>→</kbd> | Move between footer cells (colspan-aware) |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Move between footer rows (multi-row footer); <kbd>↑</kbd> from the first row moves into the body, <kbd>↓</kbd> from the last row has no effect |
| <kbd>Enter</kbd> | Activate a footer filter control |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move within the footer with row wrapping; exits the grid / to the body at the ends |
| <kbd>Escape</kbd> | Deactivate a filter control, or return focus to the body |

:::note
Navigation is **span-aware**: movement across merged (colspan/rowspan) header and footer cells stays predictable, and the logical navigation row is preserved. When focus reaches an off-screen (virtualized) column, the Grid scrolls it into view automatically.
:::

## Low vision and colour

### High-contrast themes {#highcontrastthemes}

Light and dark high-contrast themes ship with the library — `contrast-light` and `contrast-dark` — activated by `dhx.setTheme("contrast-light")` / `dhx.setTheme("contrast-dark")` or by setting `data-dhx-theme="contrast-light"` / `data-dhx-theme="contrast-dark"` on the container or the root element. Both meet WCAG AA contrast, are colour-blind friendly, and raise the base font size to 16px. See the [Themes](/themes/) guide and the [Light High Contrast](themes/contrast_light_theme.md) / [Dark High Contrast](themes/contrast_dark_theme.md) pages for details.

<!-- TODO: screenshots of the grid under contrast-light and contrast-dark, as:
     ![contrast_light_grid](/img/<file>.png) -->

### Other low-vision support

- **Colour is never the only signal.** Sort direction is carried by an arrow glyph and by `aria-sort`, selection by `aria-selected` alongside the highlight, editability by `aria-readonly`, and hierarchy by `aria-level` and `aria-expanded`.
- **Zoom and reflow.** The grid layout remains operable when the page is zoomed up to 400%.
- **Text spacing.** Applying WCAG text-spacing overrides does not clip or overlap text in grid cells, column headers or footer summaries.
- **Visible focus.** Focus is tracked per zone by the roving-tabindex model, so the active cell is the single tab stop and moves predictably with the arrow keys. With `selection: "cell"` / `"complex"` or `blockSelection`, the active cell is marked by a persistent 2px solid selection border in the theme primary colour, and no second focus outline is drawn over it. With `selection: "row"`, and in a grid without a selection module, the focused cell is marked by a dashed focus outline. Header and footer cells show a 2px focus ring, and filter inputs and open editors an inset ring.
- **Scrolling into view.** When focus reaches an off-screen row or column, the Grid scrolls it into view and compensates for frozen columns and rows and for the header and footer height, so the focused cell is never left behind a frozen zone.

## Host-page responsibilities

A few accessibility requirements live at the page level, not inside the component. Make sure the host document:

- sets a document language, e.g. `<html lang="en">`;
- provides a page `<h1>` and wraps the grid in an appropriate landmark (e.g. `<main>`);
- gives the grid container an accessible name where multiple widgets share a page.

## Testing and methodology

Accessibility is validated continuously, and against the component source rather than a single demo page, so the results hold for every configuration the Grid can be put into:

1. **Automated testing** with [axe-core](https://github.com/dequelabs/axe-core) across representative configurations, among them the plain grid, TreeGrid mode, header and footer filters, inline editing, frozen columns and rows, and the high-contrast themes.
2. **Manual review** of the source: the roles, states and accessible names emitted per part of the widget; the shortcut registry and focus model — zones, the roving tab stop, the sentinels that enter and leave the widget, and the behavior of each binding in each selection mode; and the theme tokens, with contrast ratios computed for the default light, dark, `contrast-light` and `contrast-dark` themes.
3. **Manual testing**: keyboard-only walkthroughs of every zone, screen-reader passes with NVDA, JAWS and VoiceOver, and checks under color-vision-deficiency emulation, 200% / 400% zoom and WCAG text-spacing overrides.
4. **Conformance reporting**: results are published openly, criterion by criterion, in the [Accessibility Conformance Report](grid/accessibility_conformance_report.md) — including the criteria the Grid only partially meets.

## Resources

- [Accessibility Conformance Report (VPAT 2.5)](grid/accessibility_conformance_report.md)
- [Keyboard navigation](grid/configuration.md#keyboard-navigation)
- [keyNavigation](grid/api/grid_keynavigation_config.md)
- [selection](grid/api/grid_selection_config.md)
- [blockSelection](grid/api/grid_blockselection_config.md)
- [announce()](grid/api/grid_announce_method.md)
- [Localization](grid/localization.md)
- [TreeGrid mode](grid/treegrid_mode.md)
- [Themes overview](/themes/)
- [Accessibility support across DHTMLX Suite](common_features/accessibility_support.md)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA Authoring Practices: Grid / Treegrid](https://www.w3.org/WAI/ARIA/apg/patterns/)
