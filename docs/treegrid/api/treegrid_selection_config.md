---
sidebar_label: selection
title: selection
---          

@short: enables selection in a grid

@signature: selection?: "cell" | "row" | "complex";

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	selection:"complex",  /*!*/
	data: dataset
});

@template:	api_config
@descr: 

@relatedsample:
https://snippet.dhtmlx.com/v0dyh06q	TreeGrid. Selection

@related: treegrid/configuration.md#selection
treegrid/initialization.md#initializetreegrid