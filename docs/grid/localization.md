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

## Accessible strings

The Grid announces sorting, filtering, and data loading to screen readers. These announcements are part of the UI content, so you translate them through the locale like any other label.

| Key | Default | Used for |
| --- | ------- | -------- |
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

For additional information, refer to the [Accessibility](grid/accessibility.md) guide.
