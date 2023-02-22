---
sidebar_label: export.pdf()
title: JavaScript Chart - pdf Method
description: You can explore the pdf method of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# export.pdf()

### Description

@short: Exports a chart to a PDF file

### Usage

~~~js
export.pdf(config?: object): void;
~~~

### Parameters

- `config` - (optional) an object with export settings. You can specify the following settings for export to PDF:
    - `url?: string` -  (optional) the url of the service that executes export and returns an exported file. This setting is optional, you should use it only if you need to specify the path to your local export service. The default value is `https://export.dhtmlx.com/chart/pdf/8.0.0`
    - `name?: string` - (optional) the name of the exported file
    - `pdf?: object` - (optional) the object of pdf options. Here you can specify the following properties:
		- `scale?: number` - (optional) defines scales of the chart rendering. Amount must be between 0.1 and 2 values
		- `landscape?: boolean` - (optional) defines a landscape orientation, ***false*** by default
		- `width?: string | boolean` - (optional) defines a width of paper. You can pass in a number or a string with a unit
		- `height?: string | number` - (optional) defines a height of paper. You can pass in a number or a string with a unit
		- `margin?: object` - (optional) the object with paper margins, ***none*** by default
			- `left?: string | number` - (optional) defines a left margin, accepts values labeled with units
			- `right?: string | number` - (optional) defines a right margin, accepts values labeled with units
			- `top?: string | number` - (optional) defines a top margin, accepts values labeled with units
			- `bottom?: string | number` - (optional) defines a bottom margin, accepts values labeled with units
		- `format?: string` - (optional) defines a paper format. If defined, takes priority over **width** or **height** options. The ***'Letter'*** is set by default. Read more about formatting [here](https://github.com/puppeteer/puppeteer/blob/v16.0.0/docs/api/puppeteer.paperformat.md)

### Example

~~~js {2,5-8}
// default export
chart.export.pdf();

// export with config settings
chart.export.pdf({
	url: "https://export.dhtmlx.com/chart/pdf/8.0.0",
	name:"result.pdf"
});
~~~

**Related samples**: [Chart. Export. Export to PDF/PNG](https://snippet.dhtmlx.com/4rybsjjq)

**Change log:** The method was added in v8.0