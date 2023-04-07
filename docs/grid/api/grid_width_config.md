---
sidebar_label: width
title: JavaScript Grid - width Config 
description: You can explore the width config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# width

@short: Optional. Sets the width of a grid or adjusts it automatically to the content

@signature: {'width?: number | "auto";'}

@descr:
{{pronote The **width: "auto"** option requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.}}

@example:
const grid = new dhx.Grid("grid_container", {
	columns: [
		// columns config
	],
	width: 400, 
	data: dataset
});

@descr:

**Related sample**: [Grid. Custom sizes](https://snippet.dhtmlx.com/ffxj6se0)

**Related article:** [Width/height](grid/configuration.md#widthheight)

@changelog: 

- The **"auto"** option was added in v8.1
