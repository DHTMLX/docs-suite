---
sidebar_label: png()
title: JavaScript Chart - png Method
description: You can explore the png method of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# png()

@short: Exports a chart to a PNG file

@signature: {'png(config?: object): void;'}

@params:
- `config` - (optional) an object with export settings. You can specify the following settings for export to PNG:
	- `url?: string` - (optional) the url of the service that executes export and returns an exported file. This setting is optional, you should use it only if you need to specify the path to your local export service. The default value is `https://export.dhtmlx.com/chart/png/8.0.0`
	- `name?: string` - (optional) the name of the exported file
	- `theme?: string` - (optional) the exported theme, "light" by default. For custom or overridden themes, enable the `exportStyles` option
	- `exportStyles?: boolean | string[]` - (optional) defines the styles that will be sent to the export service when exporting Chart. Use *false* to prevent all styles from being sent to the export service

@example:
// default export
chart.export.png();

// export with config settings
chart.export.png({
	url: "https://export.dhtmlx.com/chart/png/8.0.0",
	name: "result.png"
});

@descr:

**Related samples**: [Chart. Export. Export to PDF/PNG](https://snippet.dhtmlx.com/4rybsjjq)

**Related API:** [exportStyles](chart/api/chart_exportstyles_config.md)

**Change log:** 
- The **theme** and **exportStyles** options of the export object were added in 8.1
- The method was added in v8.0