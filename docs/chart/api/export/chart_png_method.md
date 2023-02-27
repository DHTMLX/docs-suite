---
sidebar_label: export.png()
title: JavaScript Chart - png Method
description: You can explore the png method of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# export.png()

### Description

@short: Exports a chart to a PNG file

### Usage

~~~js
export.png(config?: object): void;
~~~

### Parameters

- `config` - (optional) an object with export settings. You can specify the following settings for export to PNG:
	- `url?: string` - (optional) the url of the service that executes export and returns an exported file. This setting is optional, you should use it only if you need to specify the path to your local export service. The default value is `https://export.dhtmlx.com/chart/png/8.0.0`
	- `name?: string` - (optional) the name of the exported file

### Example

~~~js {2,5-8}
// default export
chart.export.png();

// export with config settings
chart.export.png({
	url: "https://export.dhtmlx.com/chart/png/8.0.0",
	name: "result.png"
});
~~~

**Related samples**: [Chart. Export. Export to PDF/PNG](https://snippet.dhtmlx.com/4rybsjjq)

**Change log:** The method was added in v8.0