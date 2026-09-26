---
sidebar_label: Configure the Roster
title: JavaScript Roster - Configuration Guide
description: You can explore how to configure the Roster component in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Configure the Roster

The Roster component shows employee records in a scrollable table. One instance owns the header, the body, and the footer, so a single configuration object controls all three parts. The component works with a local array or with a remote endpoint, and the rest of the API stays the same in both cases.

The data is loaded from a remote endpoint and is rendered as soon as the constructor finishes. The component keeps the server response in an internal store and never changes the original array.

You can also pass a ready array to the constructor. In this case you must utilize the `data` property instead of the `url` property.

This guide covers the configuration object, the data source, the column definitions, the event set, and the export module. The API reference describes every option in detail.

## Add the component to a page

To add the component to a page, declare a container element and pass its id to the constructor. To keep the layout stable, set an explicit height on that container.

You initialize the widget by setting the `container` option and by calling the `render()` method.

```js
const roster = new acme.Roster("roster_here", {
    // in order to keep the DOM small, the component reuses row elements
    height: 480,
    data: [
        { id: 1, name: "Anna Klein", team: "Design" }
    ]
});
```

The constructor returns a Roster instance. Keep the reference. Method calls, event subscriptions, and later reconfiguration go through this object.

A container without an explicit size collapses to zero height. The component reads the size once during the first render and repeats the measurement on every window resize.

Follow the steps below to add the Toolbar component above the table:

1. Create a container for the toolbar.
2. Pass the toolbar id to the `toolbar` option.
3. Call `render()` on the Roster instance.

The toolbar and the table share one instance of the store. A search field in the toolbar updates the same filter conditions as the panel above the header.

## Bind the component to data

The `url` property accepts a path to a JSON file or the address of a REST endpoint. The component sends a GET request during initialization and expects an array of plain objects in the response body. Each object needs an `id` field, and the component uses this field for selection, sorting, and row updates.

After the component has loaded the records, it will display the total count in the footer.

```js
roster.load("/api/employees").then(function(data) {
    // sort the rows before the first paint, i.e. before the user sees them
    roster.sort({ by: "name", dir: "asc" });
});
```

The `load()` method sends the same request at any moment and returns a promise. Attach a handler to that promise when the first sort order or the initial selection depends on the server response.

A server that wraps rows into an envelope needs a custom parser. Assign a function to the `parse` option, and the Roster calls this function for every response before the store accepts the rows.

A failed request rejects the promise and leaves the previous rows on the screen. Handle the rejection and show your own message, because the component keeps the table in the last valid state.

## Configure columns

Each column definition represents one field of the record. The `columns` array sets the order of the columns, and the component draws them from left to right.

Set the `width` property to a fixed number of pixels. Columns without an explicit width share the remaining space in equal parts.

The columns collection accepts a template function for every cell. The function receives the row object and returns an HTML string.

```js
const columns = [
    { id: "name", header: "Name", width: 200 },
    {
        id: "team",
        header: "Team",
        // the columns collection is rebuilt on each render
        template: function(row) { return row.team.toUpperCase(); }
    }
];
```

The `template` option allows you to render badges, links, and small charts inside a cell.

The header row shows the `header` value of each column. The footer row shows the `footer` value and stays empty when a column omits this field.

Column alignment follows the data type. Numbers align to the right, and strings align to the left. Set the `align` option to override this rule for a single column.

A column without an `id` field never reaches the DOM. Give every column a unique id, because the component matches cells to fields by this value.

## Data Filtering

The Roster draws a filter panel above the header. The panel holds one input per filterable column, and every keystroke narrows the visible rows.

The search is case-insensitive by default. Set the `matchCase` option to `true` when the dataset contains identifiers that differ only in letter case.

The filter panel validates user input and ignores values that do not match the column type.

```js
roster.config.filter = {
    placeholder: "Search (by default, all columns)",
    columns: ["name", "team"]
};
```

Each input builds a condition for its own column, and the component joins the conditions with a logical AND. The `filter()` method accepts the same conditions in code and skips the panel.

The `getFilteredData()` method returns the visible subset. The original store stays untouched, so a reset of the filter restores the full row set.

The `filter()` method also accepts a custom function. The function receives one row and returns a boolean. The component runs this function for every record in the store.

## Handle events

The Roster fires the `beforeFilter` event before it applies the query to the store. It also receives the current input value, so it can cancel the operation and start a server-side search.

Handlers run in the order of subscription. Return `false` from a handler to block the default action of the component.

```js
roster.events.on("beforeFilter", function(query) {
    // it gets the row set and returns it unchanged
    return true;
});
```

The **afterFilter** event fires after the component repaints the rows. Use this event to update a counter, a chart, or another block that depends on the visible subset.

The Roster exposes events for selection, sorting, filtering, and row updates. The API reference lists the full set with parameters and return values.

Call the `detach()` method with the event name to remove a handler. A handler that survives a page transition keeps a reference to the whole component in memory.

## Export data

Export runs in the browser. The component builds the file from the current state of the store, due to the fact that the server does not keep a copy of the applied sort order and filters.

Configure the output name via the `fileName` option. The extension follows the export format.

```js
roster.export.xlsx({
    fileName: "roster",
    styles: true
});
```

The component supports XLSX, CSV, and PDF. Each format needs its own method call, and the method name matches the extension.

The exporter reads the visible columns only. Hidden columns stay out of the file, and the order of the sheet columns repeats the order on the screen.

The PDF exporter needs a page size and an orientation. Pass both values in the options object, because the browser print dialog does not affect the generated file.

## Localization

The component has support for right-to-left layouts. Set the `rtl` option to `true`, and the header, the body, and the filter panel mirror their content.

The locale object contains the following fields.

- `sortAsc` sets the tooltip of the ascending sort arrow.
- `sortDesc` sets the tooltip of the descending sort arrow.
- `emptyRow` sets the caption of an empty row.

Pass a locale object to the constructor or call the `setLocale()` method at runtime. The second call replaces the whole object, so include every field in it.

```js
roster.setLocale({
    // the labels are loaded and are applied when the locale is set
    sortAsc: "Aufsteigend",
    sortDesc: "Absteigend"
});
```

The `locale` option accepts date and number formats too. The Roster passes these formats to the built-in editors and to the export module.

Date fields follow the format string of the locale. A column with a date type reads the same string for the cell text and for the inline editor.

## Performance notes

When you scroll the table, the component removes the rows that left the viewport, creates new rows for the incoming range, recalculates the column widths, and repaints the header, so the number of DOM nodes stays constant.

Virtual rendering has a cost for scripts that read the DOM directly, e.g. a screenshot tool or an end-to-end test.

The component reduces repaints in the following ways:

- Rows outside the viewport stay out of the DOM.
- The component measures column widths once per resize.
- The store handles sort and filter operations, not the DOM.

Measure the render time on a real dataset before you change the configuration. The `beforeRender` and `afterRender` events give two timestamps for that measurement.

A dataset of ten thousand rows renders in one frame on a modern laptop. Larger datasets need a server-side mode. Set the `dynamic` option to `true`, and the Roster requests a portion of rows for the current scroll position.

The server-side mode changes the contract of the data source. The endpoint receives the start index and the row count in the query string. The response carries a slice of the dataset and the total number of records.

## Related articles

- [Roster API reference](/roster/api/)
- [Roster events](/roster/events/)
