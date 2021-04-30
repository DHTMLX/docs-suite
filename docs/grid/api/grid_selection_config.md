---
sidebar_label: selection
title: selection
---          

@short: enables selection in a grid

selection?: "cell" | "row" | "complex";

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	selection:"complex",  /*!*/
	data: dataset
});


@template:	api_config
@descr: 

**Related sample**:
- [Grid. Selection](https://snippet.dhtmlx.com/ad6roqsx)

@related: grid/initialization.md#initialize-grid
grid/configuration.md#selection