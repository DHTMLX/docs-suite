---
sidebar_label: autoEmptyRow
title: autoEmptyRow
---          

@short: adds an empty row after the last filled row in the Grid

@signature: autoEmptyRow?: boolean;

@default: true

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	autoEmptyRow:true,  /*!*/
	data: dataset
});


@template:	api_config
@descr: 

@related: grid/initialization.md#initializegrid
grid/configuration.md#automaticaddingofemptyrowintogrid

@relatedsample:
https://snippet.dhtmlx.com/rkytig73	Grid. Auto Empty Row