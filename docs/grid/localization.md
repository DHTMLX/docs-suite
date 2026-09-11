---
sidebar_label: Localization
title: JavaScript Grid - Localization 
description: You can explore how to work with Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Localization

You can apply different languages to the interface of dhtmlxGrid. You just need to translate the corresponding strings for Grid labels and apply a ready locale to the component.

## Default locale

The default locale for Grid looks like this:

~~~jsx
const en = {
    total: "Total",
    groupText: "Group",
    dropAreaTitle: "Group by:",
    dropAreaPlaceholder: "Drag the column header here",
    aria_sortedAscending: "Sorted by {column}, ascending",
    aria_sortedDescending: "Sorted by {column}, descending",
    aria_filterApplied: "{count} rows match the filter",
    aria_filterCleared: "Filter cleared, {count} rows",
    aria_rowsLoaded: "{count} rows loaded",
    aria_valueOutOfRange: "Value must be between {min} and {max}",
    aria_valueBelowMin: "Value must be greater than {min}",
    aria_valueAboveMax: "Value must be less than {max}",
    aria_valueClamped: "Value corrected to {value}",
    aria_filter: "Filter {column}",
    aria_filterByDate: "Filter by date: {column}",
    aria_sortBy: "Sort by {column}",
    aria_expandGroup: "Expand group",
    aria_collapseGroup: "Collapse group",
    aria_expandRow: "Expand row",
    aria_collapseRow: "Collapse row",
    aria_subRow: "Details for row {id}",
    aria_editContent: "Edit content",
    aria_enterGrid: "Enter grid",
    aria_exitGrid: "Exit grid",
    aria_dragPanel: "Drag panel",
    aria_panelHeader: "Panel header",
    aria_panelFooter: "Panel footer",
    aria_panelContent: "Panel content",
    aria_draggableRows: "Draggable rows",
    aria_rowId: "Row id {id}",
}
~~~

## Custom locale

To use a different locale, your need to:

- define the necessary language settings: provide translations for all text labels, e.g.:

~~~jsx
const de = {
    // language settings
};
~~~

- apply the language settings calling the `dhx.i18n.setLocale()` method before Grid initialization:

~~~jsx
dhx.i18n.setLocale("grid", de);
const grid = new dhx.Grid("grid_container");
~~~

## Announcements

The Grid announces sorting, filtering, data loading, and editor validation to screen readers. These announcements are part of the UI content, so you translate them through the locale like any other label.

### Sorting, filtering and loading

| Key | Default | Announced when |
| --- | ------- | -------------- |
| `aria_sortedAscending` | `Sorted by {column}, ascending` | After sorting |
| `aria_sortedDescending` | `Sorted by {column}, descending` | After sorting |
| `aria_filterApplied` | `{count} rows match the filter` | After a header or footer filter runs |
| `aria_filterCleared` | `Filter cleared, {count} rows` | After the last filter is removed |
| `aria_rowsLoaded` | `{count} rows loaded` | After data is loaded into the grid |

The `{column}` and `{count}` placeholders are substituted at render time. Keep them in the translated string.

~~~jsx
dhx.i18n.setLocale("grid", {
    aria_sortedAscending: "Sortiert nach {column}, aufsteigend",
    aria_sortedDescending: "Sortiert nach {column}, absteigend",
    aria_filterApplied: "{count} Zeilen entsprechen dem Filter",
    aria_filterCleared: "Filter zurückgesetzt, {count} Zeilen",
    aria_rowsLoaded: "{count} Zeilen geladen",
});

const grid = new dhx.Grid("grid_container", { columns, data });
~~~

### Validation messages

| Key | Default | Announced when |
| --- | ------- | -------------- |
| `aria_valueOutOfRange` | `Value must be between {min} and {max}` | Both bounds are set |
| `aria_valueBelowMin` | `Value must be greater than {min}` | Only `min` is set |
| `aria_valueAboveMax` | `Value must be less than {max}` | Only `max` is set |
| `aria_valueClamped` | `Value corrected to {value}` | The value was clamped on commit |

The wording follows the bounds the editor actually applies: inclusive when both `min` and `max` are set, exclusive when only one of them is.

~~~jsx
dhx.i18n.setLocale("grid", {
    aria_valueOutOfRange: "Wert muss zwischen {min} und {max} liegen",
    aria_valueBelowMin: "Wert muss größer als {min} sein",
    aria_valueAboveMax: "Wert muss kleiner als {max} sein",
    aria_valueClamped: "Wert auf {value} korrigiert",
});

const grid = new dhx.Grid("grid_container", {
    editable: true,
    columns: [{ id: "price", header: [{ text: "Price" }], type: "number", editorConfig: { min: 0, max: 100 } }],
    data,
});
~~~

## Accessible names

The Grid gives its interactive controls accessible names, which screen readers read out instead of the visual icon. These names come from the locale as well.

### Control names

| Key | Default | Applied to |
| --- | ------- | ---------- |
| `aria_filter` | `Filter {column}` | Header and footer input and select filters |
| `aria_filterByDate` | `Filter by date: {column}` | Header and footer date filter |
| `aria_sortBy` | `Sort by {column}` | The sort trigger in a header cell |
| `aria_expandGroup` | `Expand group` | Expand toggle of a collapsed grouping row |
| `aria_collapseGroup` | `Collapse group` | Collapse toggle of an expanded grouping row |
| `aria_expandRow` | `Expand row` | Expand toggle of a tree branch or a sub-row |
| `aria_collapseRow` | `Collapse row` | Collapse toggle of a tree branch or a sub-row |
| `aria_editContent` | `Edit content` | Content wrapper of an `htmlEnable` cell |
| `aria_enterGrid` | `Enter grid` | Focus sentinel before the header |
| `aria_exitGrid` | `Exit grid` | Focus sentinel after the footer |
| `aria_dragPanel` | `Drag panel` | The drag panel region |
| `aria_panelHeader` | `Panel header` | Drag panel header |
| `aria_panelFooter` | `Panel footer` | Drag panel footer |
| `aria_panelContent` | `Panel content` | Drag panel content area |
| `aria_draggableRows` | `Draggable rows` | Drag panel row list |
| `aria_rowId` | `Row id {id}` | A single drag panel item |

The `{column}` and `{id}` placeholders are substituted when the name is built. Keep them in the translated string.

~~~jsx
dhx.i18n.setLocale("grid", {
    aria_filter: "{column} filtern",
    aria_filterByDate: "Nach Datum filtern: {column}",
    aria_sortBy: "Nach {column} sortieren",
    aria_expandGroup: "Gruppe aufklappen",
    aria_collapseGroup: "Gruppe zuklappen",
    aria_expandRow: "Zeile aufklappen",
    aria_collapseRow: "Zeile zuklappen",
    aria_editContent: "Inhalt bearbeiten",
    aria_enterGrid: "Tabelle betreten",
    aria_exitGrid: "Tabelle verlassen",
});

const grid = new dhx.Grid("grid_container", { columns, data });
~~~

### Sub-row name

The `aria_subRow` name applies to grids with the [`subRow`](grid/api/grid_subrow_config.md) configuration.

| Key | Default | Applied to |
| --- | ------- | ---------- |
| `aria_subRow` | `Details for row {id}` | The sub-row region (`.dhx_grid_subrow__container`) |

The `{id}` placeholder is the row id.

~~~jsx
dhx.i18n.setLocale("grid", {
    aria_subRow: "Details zu Zeile {id}",
});

const grid = new dhx.Grid("grid_container", {
    columns,
    data,
    subRow: row => `Details: ${row.company}`,
});
~~~

For additional information, refer to the [Accessibility](grid/accessibility.md) guide.
