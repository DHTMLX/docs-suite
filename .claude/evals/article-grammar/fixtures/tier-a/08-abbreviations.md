---
sidebar_label: Data export
title: JavaScript Panel - Data Export
description: You can explore the export API of Panel, i.e. the CSV, XLSX, and PDF writers, in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Data export

Panel serializes the current dataset and hands the result to a writer. Call `export()` with a target format, e.g. `csv`, and the writer returns a Blob.

~~~js
const panel = new acme.Panel("#root", {
    // choose a writer by name, e.g. csv or xlsx
    export: { format: "csv", fileName: "report" }
});
~~~

The writer reads a snapshot of the visible rows, i.e. the rows that survive the active filter.

## Writer options

The second argument of `export()` sets the file name, the sheet title, the column widths, the page orientation, and so on.

Text writers cover formats such as CSV, TSV, JSON, etc. Binary writers run in a worker and cover XLSX and PDF.

For example, the PDF writer reuses the print stylesheet, so a column hidden by CSS never reaches the file.

A writer fails only on unsupported cell types, such as functions, symbols, and DOM nodes.

~~~html
<div id="root"></div>
~~~
