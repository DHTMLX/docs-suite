---
sidebar_label: csv()
title: JavaScript Grid - csv Method
description: You can explore the csv export method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# csv()

@short: Exports data from a grid into a CSV file

@signature: {'csv(config?: ICsvExportConfig) => Promise<string>;'}

@params:
- `config` - (optional) an object with export settings. You can specify the following settings for export to CSV:
    - `asFile?: boolean` - (optional) defines whether Grid should be exported to a file, *true* by default. To export Grid only as a CSV string, you need to set *asFile:false*
    - `name?: string` - (optional) "grid" by default. The name of the exported CSV file (if asFile is not set to *false*)
    - `rowDelimiter?: string` - (optional) a newline ("\n") by default. A separator between rows, can be a tab - "\t", or any other value
    - `columnDelimiter?: string` - (optional) a comma (",") by default. A separator between columns, can be a semicolon - ";", or any other value

:::note
You can specify extended export configuration settings via the Grid [`exportConfig`](/grid/api/grid_exportconfig_config/) configuration property.
:::

@returns:
A promise of data export 

@example:
// default export
grid.export.csv()
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));

// export with config settings
grid.export.csv({
    name: "my_file", // the name of a ready CSV file
    rowDelimiter: "\t", // the delimiter used to separate rows
    columnDelimiter: ";" // the delimiter used to separate columns
})
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));


@descr:

**Related samples**: [Grid. Export to xlsx and csv](https://snippet.dhtmlx.com/58oqij47)

**Related article:** [Exporting Grid](grid/usage.md)

**Change log:** 

- The method returns a promise of data export since v9.3