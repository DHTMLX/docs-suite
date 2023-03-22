---
sidebar_label: xlsx()
title: JavaScript Grid - xlsx Method
description: You can explore the xlsx method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# xlsx()

### Description

@short: Exports data from a grid to an Excel file

@signature: {'xlsx(config?: object): string;'}

@params:
- `config` - (optional) an object with export settings. You can specify the following settings for export to EXCEL:
	- `url?: string` - (optional) the link to the server side where export will be processed. By default, it is **"//export.dhtmlx.com/excel"**
	- `name?: string` - (optional) the name of a ready Excel file


@example:
// default export
grid.export.xlsx();

// export with config settings
grid.export.xlsx({
    name:"grid_data",
    url: "//export.dhtmlx.com/excel"
});


@descr:

**Related samples**: [Grid. Export to xlsx and csv](https://snippet.dhtmlx.com/58oqij47)