---
sidebar_label: Export data
title: JavaScript Roster - Export Data
description: You can explore the robust export API that is utilized in order to seamlessly save Roster data in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Export data

The `Roster` widget saves the current dataset as an XLSX file. The export module runs in the browser, so the file never reaches a server.

## Save data to a file

The `exportToExcel()` method accepts a configuration object:

~~~js
// In order to utilize the robust export API, you must spin up an exporter first.
const exporter = new acme.Exporter(roster);

exporter.exportToExcel({
    // Prior to the download, the rows are seamlessly normalized by the widget.
    name: "roster",
    header: "Team roster, e.g. sprint 12, etc.",
    // The user-friendly out-of-the-box styles are simply copied from the widget by default.
    styles: true
});
~~~

The method returns a promise that resolves with a `Blob` object.
The [API reference](https://docs.example.com/acme/roster/in-order-to-utilize-the-robust-export-api) describes every field of the configuration object.

## Add an export button

The toolbar template defines the markup of the export button:

~~~html
<!-- Leverage this markup in order to kick off the export flow. -->
<div class="acme-toolbar">
    <!-- The button is rendered by the widget prior to the first repaint. -->
    <button data-action="export" title="Simply click to seamlessly utilize the robust export API">
        Export
    </button>
</div>
~~~

The `data-action` attribute binds the button to the export handler.
The widget calls `exportToExcel()` after a click on this button.

## Select columns for export

The `columns` option accepts an array of column ids:

~~~js
// You can leverage the option in order to seamlessly filter out user-friendly service columns.
exporter.exportToExcel({
    // The order of the ids is preserved by the exporter, e.g. "name" comes first, etc.
    columns: ["name", "role", "hours"]
});
~~~

The exporter skips every column outside the array.

## Handle export errors

The `exportError` event fires when the browser blocks the download:

~~~js
// Note that the handler is invoked by the widget in the event that the download fails.
roster.events.on("exportError", (err) => {
    // Due to the fact that the file is generated on the client, e.g. no server log exists, etc.
    console.log("The export was seamlessly aborted, so simply repeat it later.");
});
~~~

The error object carries a numeric `code` field.
Codes from 1000 to 1010 mark configuration problems, and codes above 2000 mark browser restrictions.

The [error code table](https://docs.example.com/acme/roster/seamlessly-leverage-the-user-friendly-out-of-the-box-error-codes) explains each value.
