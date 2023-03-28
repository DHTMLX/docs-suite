---
sidebar_label: png()
title: JavaScript Grid - png Method
description: You can explore the png export method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# png()

@short: Exports data from a grid to a PNG file

@signature: {'png(config?: object): void;'}

@params:
- `config` - (optional) an object with export settings. You can specify the following settings for export to PNG:
	- `url?: string` - (optional) the url of the service that executes export and returns an exported file. This setting is optional, you should use it only if you need to specify the path to your local export service. The default value is `https://export.dhtmlx.com/grid/png/8.1.0`
    - `name?: string` - (optional) the name of the exported file
    - `theme?: string` - (optional) the exported theme, "light" by default. For custom or overridden themes, enable the `exportStyles` option
    - `exportStyles?: boolean | string[]` - (optional) defines the styles that will be sent to the export service when exporting Grid. Use *false* to prevent all styles from being sent to the export service

@example:
// default export
grid.export.png();

// export with config settings
grid.export.png({
    theme: "dark",
});


@descr:

:::info
If you use Grid in conjunction with [Pagination](pagination.md), only the displayed page will be exported. 
:::

**Related sample**: [Grid. Export to PDF/PNG](https://snippet.dhtmlx.com/ti9l91mn)

**Related article:** [Exporting Grid](grid/usage.md#exporting-grid)

**Related API:** [exportStyles](grid/api/grid_exportstyles_config.md)

**Change log:** Added in v8.1