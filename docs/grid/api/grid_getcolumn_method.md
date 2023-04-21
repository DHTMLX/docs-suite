---
sidebar_label: getColumn()
title: JavaScript Grid - getColumn Method 
description: You can explore the getColumn method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

#  getColumn()

@short: returns an object with attributes of a column

@signature: {'getColumn(colId: string | number): object;'}

@params:
- `colId: string | number` - the id of a column

@returns:
An object with attributes of a column.

@example:
const column = grid.getColumn("b"); // ->
// {width: 100, id: "b", header: Array(1), $cellCss: {…}, type: "string"}

@descr:

The returned object contains the following set of properties:

~~~js
{
	id: string|number,
	width: number,
	header: object[],
	htmlEnable: boolean,
	footer: array,
	maxWidth: number,
	minWidth: number,
	mark: object|function,
	resizable: boolean,
	type: string,
	format: string,
	editorType: string,
	options: array,
	template: function,
	hidden: boolean,
	draggable: boolean,
	editable: boolean,
	sortable: boolean,
	adjust: boolean|string,
	autoWidth: boolean,
	align: string,
	tooltip: boolean,
	tooltipTemplate: function,
	$cellCss: array, // readonly, an array of objects with CSS classes (as key:value pairs) for each cell of a column
	$uniqueData: array, // readonly, an array that contains some unique data, can't be redefined
}
~~~

You will find the description of these properties [here](grid/api/api_gridcolumn_properties.md).

**Related API:** [setColumns()](grid/api/grid_setcolumns_method.md)

**Related article:** [Working with columns and cells](grid/usage.md#working-with-columns-and-cells)


