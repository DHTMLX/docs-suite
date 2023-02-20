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
  - `type: string` - specifies the file type, can be either jpeg or png (default)
  - `quality: number` - the quality of the image, between 0-100. Not applicable to png images
  - `fullPage: boolean` - when true, takes a screenshot of the full scrollable page, **false** by default
  - `clip: object` - an object which specifies the clipping region of the page. Should have the following fields:
	- `x: number` - x-coordinate of the top-left corner of clipping area
	- `y: number` - y-coordinate of the top-left corner of clipping area
	- `width: number` - the width of clipping area
	- `height: number` - the height of clipping area
  - `omitBackground: boolean` - hides the default white background and allows capturing screenshots with transparency 

### Example

~~~js {2,5-8}
// default export
chart.export.png();

// export with config settings
chart.export.png({
	type:"jpeg",
	fullPage:true
});
~~~

**Related samples**: ToDo

**Change log:** The method was added in v8.0