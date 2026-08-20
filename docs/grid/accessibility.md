---
sidebar_label: Accessibility
title: JavaScript Grid - Accessibility
description: You can learn about accessibility and keyboard navigation in DHTMLX Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Accessibility in DHTMLX Grid

DHTMLX Grid is built to be operated entirely from the keyboard and to expose its structure and state to assistive technology. WAI-ARIA semantics are part of the rendered markup, and a single, coherent focus model spans the header, body, and footer. The semantics are always present — there is **no** configuration flag to disable them.

## Capabilities

| Area | Support |
| ---- | ------- |
| Keyboard operation | Full: cell navigation, editing, sorting, range selection, tree expand/collapse, and clipboard all have keyboard equivalents |
| WAI-ARIA semantics | Built-in (`grid` / `treegrid` model), enabled always — no opt-in flag |
| Focus model | A single tab stop per zone; focus moves between header, body, and footer |
| Selection model | Two modes: single-cell/row (`selection`) and spreadsheet-style range (`blockSelection`) |
| High-contrast display | Light and dark high-contrast themes (`contrast-light` / `contrast-dark`) |

## Covered areas

This documentation covers the Grid widget:

- the **data body** — cells and rows, including tree mode (`type: "tree"`)
- the **column header** — sortable headers and in-header filters
- the **footer** — summaries and footer filters
- the **inline editors**
- the keyboard model that connects these zones.

As with any embeddable component, the accessibility of the final page also depends on the host application (see [Host-page responsibilities](#host-page-responsibilities)).

## WAI-ARIA support

WAI-ARIA roles and attributes are added to the component markup automatically and are **on by default** — there is no flag to turn them off. The Grid exposes itself to assistive technology as an interactive grid (or treegrid) of rows and cells, with a separate group for the header and footer. The semantics are applied per structural part of the widget, so each part is announced with the correct role and state.

### Grid container

The following table lists the container role and the grid-wide attributes applied to the root grid element, which describe the grid as a whole:

| Selector | Role / attribute | Purpose |
| -------- | ---------------- | ------- |
| `.dhx_grid` | `role="grid"` | Standard grid |
| `.dhx_grid` | `role="treegrid"` | TreeGrid (`type: "tree"`) |
| `.dhx_grid` | `aria-rowcount` | Total number of data rows |
| `.dhx_grid` | `aria-colcount` | Number of visible columns |
| `.dhx_grid` | `aria-readonly` | `"true"` when the grid is not editable |
| `.dhx_grid` | `aria-multiselectable` | `"true"` when multi-selection is enabled |

### Rows and cells

The following table lists the roles and the position and state attributes applied to data rows and cells, which let assistive technology announce where the user is:

| Selector | Role / attribute | Purpose |
| -------- | ---------------- | ------- |
| Data row | `role="row"` | A row of the grid |
| Data row | `aria-rowindex` | 1-based row position |
| Data cell | `role="gridcell"` | A data cell |
| Data cell | `aria-colindex` | 1-based column position |
| Data cell | `aria-readonly` | `"true"` when the cell is not editable |
| Data cell | `aria-selected` | Selection state of the cell |

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
| Header/footer group | `role="rowgroup"` + `aria-rowcount` | Groups the header or footer rows |
| Header/footer row | `role="row"` + `aria-rowindex` | A header or footer row |
| Header cell | `role="columnheader"` + `aria-sort` | Column header; `aria-sort` is `none` / `ascending` / `descending` |
| Footer cell | `role="gridcell"` + `aria-colindex` | A footer (summary) cell |
| Content (filter) cell | `role="gridcell"` | Header/footer cell hosting a filter control |
| Sort affordance | `role="button"` + `aria-label="Sort by …"` | Keyboard- and pointer-activatable sort trigger |

### Editors and filters

In-place editor inputs and header/footer filters receive an accessible name derived from column header text, so screen-reader users hear which column they are editing or filtering. For example, a filter input is labeled `"Filter {column}"` and a date filter `"Filter by date: {column}"`.

### Hidden and decorative elements

Resizer grips, sort icons, sort-order counters, drag ghosts, drop indicators, and the selection overlay are removed from the accessibility tree with `aria-hidden="true"` / `role="presentation"`, so screen readers are not cluttered with redundant markup.

## Selection modes

The keyboard behavior of the body depends on which selection system is enabled. The two are independent and drive different ARIA output and shortcut semantics.

### 1. Cell / row selection — selection

A single active cell (or row) moves with the arrow keys. This populates `aria-selected` on the focused cell or row. Extending the selection with <kbd>Shift</kbd> is enabled only when `multiselection: true`; without it, <kbd>Shift</kbd>+arrow moves the active cell.

~~~jsx
// Single active cell, navigable with arrows / Tab / Home / End / Page Up·Down
const grid = new dhx.Grid("grid_container", {
    columns: [/* ... */],
    data: dataset,
    selection: "complex", // "cell" | "row" | "complex"
    multiselection: true, // enables Shift+Arrow multi-select
    keyNavigation: true   // default
});
~~~

| `selection` value | Meaning |
| --- | --- |
| `"cell"` | One active cell; <kbd>Shift</kbd>+arrow extends when `multiselection: true` |
| `"row"` | One active row; arrows move the whole row, `aria-selected` is on the row |
| `"complex"` | Cell- and row-style selection combined |
| `true` | Equivalent to cell selection |
| *falsy / unset* | Selection (and `aria-selected`) disabled |

### 2. Range / block selection — blockSelection

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

Both systems coexist with the same navigation keys; the Grid responds to whichever selection system is active.

## Keyboard navigation

Keyboard navigation is on by default (`keyNavigation: true`); set `keyNavigation: false` to opt out. Focus enters the Grid through hidden focus sentinels placed before the header and after the footer, which direct it into the correct zone. Within each zone a single cell is the tab stop, and the arrow keys move between cells from there.

Shortcuts are organized into **zones** — body, header, footer — and resolved by where focus currently is. The full reference is in the [Keyboard navigation](grid/configuration.md#keyboard-navigation) article; the tables below summarize it.

### Grid body

| Keys | Action | Selection mode |
| ---- | ------ | -------------- |
| <kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> | Move the selected cell one row/column (<kbd>↑</kbd> from the first row enters the header; <kbd>↓</kbd> from the last row enters the footer when a footer exists) | both |
| <kbd>Ctrl</kbd> + arrow | Jump the selection to the first/last cell in that direction | both |
| <kbd>Shift</kbd> + arrow | Extend the selection by one cell | `selection` with `multiselection: true`, or `blockSelection` range |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + arrow | Extend the selection to the edge | as above |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move to the first / last column of the current row | both |
| <kbd>Ctrl</kbd> + <kbd>Home</kbd> / <kbd>Ctrl</kbd> + <kbd>End</kbd> | Move to the first / last cell of the grid | both |
| <kbd>Shift</kbd> + <kbd>Home</kbd> / <kbd>End</kbd>, <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> / <kbd>End</kbd> | Extend the selection to the row/grid extent | extend-capable modes |
| <kbd>Page Up</kbd> / <kbd>Page Down</kbd> | Move the selected cell up / down by one page of visible rows | both |
| <kbd>Shift</kbd> + <kbd>Page Up</kbd> / <kbd>Page Down</kbd> | Extend the selection by one page | extend-capable modes |
| <kbd>Enter</kbd> | Open the editor (or toggle a boolean cell); when editing, commit and close | requires `editable` |
| <kbd>F2</kbd> | Open the editor of the selected cell (non-boolean) | requires `editable` |
| <kbd>Space</kbd> | Toggle a boolean cell | requires `editable` |
| <kbd>Escape</kbd> | Cancel editing without saving | requires `editable` |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move to the next / previous cell, wrapping rows; exits to the footer / header at the ends | both |
| <kbd>Delete</kbd> | Clear the selected range | `blockSelection` range mode + `editable` |
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

## Assistive technology

What the Grid exposes to assistive technology is driven entirely by the ARIA markup above. Rows and cells carry their position (`aria-rowindex` / `aria-colindex`) against the grid totals (`aria-rowcount` / `aria-colcount`), so position is announced even when rows are virtualized. Selection is exposed through `aria-selected`, editability through `aria-readonly`, sort state through `aria-sort`, and — in tree mode (`type: "tree"`) — hierarchy through `aria-level` and `aria-expanded`.

## High contrast and focus

- **High-contrast themes.** Light and dark high-contrast themes ship with the library (`contrast-light` and `contrast-dark`), activated by setting `data-dhx-theme="contrast-light"` or `data-dhx-theme="contrast-dark"`. See the [Themes](/themes/) guide and the [Light High Contrast](themes/contrast_light_theme.md) / [Dark High Contrast](themes/contrast_dark_theme.md) pages for details.
- **Visible focus.** Focus is tracked per zone by the roving-tabindex model, so the active cell is the single tab stop and moves predictably with the arrow keys.

## Configuration recipes

~~~jsx
// A. Cell navigation (single active cell)
new dhx.Grid("grid_container", {
    columns, data,
    selection: "complex",
    multiselection: true, // Shift+Arrow multi-select
    keyNavigation: true,  // default
    sortable: true        // default — keyboard sort in headers
});

// B. Spreadsheet-style range selection
new dhx.Grid("grid_container", {
    columns, data,
    blockSelection: true, // range mode: Shift+Arrow grows the rectangle, Delete clears
    editable: true
});

// C. TreeGrid (adds role="treegrid", aria-level, aria-expanded,
//    and arrow-key expand/collapse)
new dhx.Grid("grid_container", {
    columns, data,
    type: "tree",
    selection: "complex"
});

// WAI-ARIA semantics are always emitted — there is no flag to toggle them.
~~~

Related articles:

- [Keyboard navigation](grid/configuration.md#keyboard-navigation)
- [keyNavigation](grid/api/grid_keynavigation_config.md)
- [selection](grid/api/grid_selection_config.md)
- [blockSelection](grid/api/grid_blockselection_config.md)
- [TreeGrid mode](grid/treegrid_mode.md)

## Host-page responsibilities

A few accessibility requirements live at the page level, not inside the component. Make sure the host document:

- sets a document language, e.g. `<html lang="en">`;
- provides a page `<h1>` and wraps the grid in an appropriate landmark (e.g. `<main>`);
- gives the grid container an accessible name where multiple widgets share a page.

## Reference

- [WAI-ARIA Authoring Practices: Grid / Treegrid](https://www.w3.org/WAI/ARIA/apg/patterns/)
