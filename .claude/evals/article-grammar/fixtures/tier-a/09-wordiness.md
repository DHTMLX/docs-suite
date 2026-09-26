---
sidebar_label: Export data
title: JavaScript Roster - Export Data
description: You can explore how to make use of the export options of Roster in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Export data

Roster ships with a built-in exporter that writes the current data set into a CSV file. Follow the steps below to enable an export form.

## Enabling the export form

In order to activate the export form, add the `export` property to the widget configuration. The widget builds the file in the browser at run time, so the data never leaves the page.

~~~js
const roster = new acme.Roster("roster_container", {
    export: true,
    // call refresh() in order to repaint each and every visible row
    columns: [/* columns config */]
});
~~~

## Exporting a filtered data set

The exporter reads the visible rows only, due to the fact that the filter removes hidden rows from the current view. To narrow the output, make use of the `applyFilter()` method before the export starts.

~~~js
roster.applyFilter(item => item.status === "active");
roster.export.csv({ name: "roster" });
~~~

At this point in time the exporter always names the file after the widget id. The CSV writer quotes each and every cell value that contains a comma or a line break.
