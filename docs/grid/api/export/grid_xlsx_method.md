---
sidebar_label: xlsx()
title: JavaScript Grid - xlsx Method
description: You can explore the xlsx export method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# xlsx()

@short: Exports data from a grid to an Excel file

:::info
DHTMLX Grid uses the WebAssembly-based library [Json2Excel](https://github.com/dhtmlx/json2excel) for export of data to Excel. [Check the details](grid/usage.md/#exporting-data-to-excel).
:::

@signature: {'xlsx(config?: object): void;'}

@params:
- `config` - (optional) an object with export settings. You can specify the following settings for export to Excel:
    - `url?: string` - (optional) the link to the **worker.js** file of the [Json2Excel](https://github.com/dhtmlx/json2excel) library where export will be processed
    - `name?: string` - (optional) the name of a ready Excel file
    - `tableName?: string` - (optional) the name of a sheet with grid data in the Excel file
    - `dateFormatMask?: string` - (optional) the mask used for [dates formatting in Excel](https://support.microsoft.com/en-us/office/format-a-date-the-way-you-want-in-excel-8e10019e-d5d8-47a1-ba95-db95123d273e) 

@example:
// default export
grid.export.xlsx();

// export with config settings
grid.export.xlsx({
    // a local path to the `worker.js` file of the Json2Excel library
    url: "../libs/json2excel/1.3/worker.js?vx", 
    name: "my_file",
    tableName: "grid",
    dateFormatMask: "mm.dd.yy"
});

@descr:

**Related samples**: [Grid. Export to xlsx and csv](https://snippet.dhtmlx.com/58oqij47)

**Related article:** [Exporting Grid](grid/usage.md/#exporting-data-to-excel)