---
sidebar_label: headerRowHeight
title: headerRowHeight
---          

@short: sets the height of rows in the header

@signature: {'headerRowHeight?: number;'}

@default: 40

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	headerRowHeight: 50
});


@descr: 
The height of the header is calculated as a sum of all row heights in it.

@related: treegrid/configuration.md#headerfooterheight
treegrid/initialization.md#initialize-treegrid

**Related sample**: [TreeGrid. Rows Height](https://snippet.dhtmlx.com/xl0i3yof)