---
sidebar_label: rowCss
title: JavaScript Grid - rowCss Config 
description: You can explore the rowCss config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# rowCss

@short: sets style for a row

@signature: {'rowCss?: (row: IRow) => string;'}

@example:
<style>
	.my_custom_row {
		background: coral;
	}
</style>

var grid = new dhx.Grid("grid_container", {
	columns: [
		// columns config
	],
	rowCss: function (row) { return row.custom ? "my_custom_row" : "" },
	data: dataset
});

@descr:

**Related sample**: [Grid. Custom row style](https://snippet.dhtmlx.com/2dxtwf9n)

The function takes the id of a row as a parameter and returns a string with the name of a CSS class.

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#row-style)
