---
sidebar_label: xlsx()
title: JavaScript Grid - xlsx Method
description: You can explore the xlsx method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# xlsx()

### Description

@short: Exports data from a treegrid to an Excel file

@signature: {'xlsx(config?: object): void;'}

@params:
- `config` - (optional) an object with export settings. You can specify the following settings for export to EXCEL:
	- `url?: string` - (optional) the link to the server side where export will be processed. By default, it is **"//export.dhtmlx.com/excel"**
	- `name?: string` - (optional) the name of a ready Excel file


@example:
// default export
treegrid.export.xlsx();

// export with config settings
treegrid.export.xlsx({
    url: "//export.dhtmlx.com/excel"
});


@descr:

**Related samples**: [TreeGrid. Export to .xlsx and .csv](https://snippet.dhtmlx.com/zyfois4q)

**Related article:** [Exporting TreeGrid](treegrid/usage.md#exporting-treegrid)