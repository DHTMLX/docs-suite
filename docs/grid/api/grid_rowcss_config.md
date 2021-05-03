---
sidebar_label: rowCss
title: rowCss
description: description
---          

@short: sets style for a row

@signature: {'rowCss?: (row: IRow) => string;'}

@example: 
<style>
	.my_custom_row {
		background: coral;
	}
</style>

var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	rowCss: function (row) { return row.custom ? "my_custom_row" : "" }, /*!*/
	data: dataset
});


@template:	api_config
@descr: 
The function takes the id of a row as a parameter and returns a string with the name of a CSS class.

**Related sample**: [Grid. Custom Row Style](https://snippet.dhtmlx.com/2dxtwf9n)

@related: grid/initialization.md#initialize-grid
grid/configuration.md#rowstyle
