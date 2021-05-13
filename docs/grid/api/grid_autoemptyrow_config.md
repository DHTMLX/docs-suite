---
sidebar_label: autoEmptyRow
title: autoEmptyRow
---          

@short: adds an empty row after the last filled row in the Grid

@signature: {'autoEmptyRow?: boolean;'}

@default: true

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	autoEmptyRow:true,  /*!*/
	data: dataset
});



@descr: 

**Related sample**: [Grid. Auto Empty Row](https://snippet.dhtmlx.com/rkytig73)

@related: grid/initialization.md#initialize-grid
grid/configuration.md#automatic-adding-of-empty-row-into-grid