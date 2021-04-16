---
sidebar_label: rowCss
title: rowCss
description: description
---          


@short: sets style for a row

@signature: 
rowCss?: (row: IRow) => string;
rowCss?: (row: object) => string;


@type: function

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

@relatedsample: https://snippet.dhtmlx.com/2dxtwf9n	Grid. Custom Row Style

@related: grid/initialization.md#initializegrid
grid/configuration.md#rowstyle
