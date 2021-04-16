---
sidebar_label: headerRowHeight
title: headerRowHeight
---          

@short: sets the height of rows in the header

@signature: headerRowHeight?: number;

@default: 40

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	headerRowHeight: 50
});


@template:	api_config
@descr: 
The height of the header is calculated as a sum of all row heights in it.

@related: grid/initialization.md#initializegrid
grid/configuration.md#headerfooterheight

@relatedsample: https://snippet.dhtmlx.com/wjcjl80i	Grid. Rows Height