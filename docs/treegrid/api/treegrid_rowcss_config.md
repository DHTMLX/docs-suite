---
sidebar_label: rowCss
title: rowCss
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

@related: treegrid/configuration.md#rowstyle
treegrid/initialization.md#initialize-treegrid

**Related sample**: [TreeGrid. Custom Row Style](https://snippet.dhtmlx.com/3ojyoryn)
