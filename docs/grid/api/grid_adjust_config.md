---
sidebar_label: adjust
title: adjust
description: description
---          

@short: defines whether the width of columns is automatically adjusted to the width of their content

@signature: {'adjust?: "header" | "footer" | "data" | boolean;'}

@default: false

@example:
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    adjust: true, /*!*/ 
    data: dataset
});

@descr: 

**Related sample**: [Grid. Adjust Columns](https://snippet.dhtmlx.com/zfrpe22d)

The property can be specified to one of the available adjustment modes:

<table>
	<tbody>
        <tr>
			<td><b>"header"</b></td>
			<td>adjusts the columns to the width of their header</td>
		</tr>
        <tr>
			<td><b>"footer"</b></td>
			<td>adjusts the columns to the width of their footer</td>
		</tr>
        <tr>
			<td><b>"data"</b></td>
			<td>adjusts the columns to the width of their content</td>
		</tr>
        <tr>
			<td><b>true</b></td>
			<td>combines the above mentioned modes and adjusts the column to the bigger value</td>
		</tr>
    </tbody>
</table>

**Note**, that:

- to optimize performance, you should specify `htmlEnable: true` in the configuration object of the column which contains HTML content;
- you can also specify `htmlEnable:true` in the configuration object of Grid;
- `htmlEnable: true` allows calculating the content of simple HTML templates by excluding HTML markup and calculating internal content;
- the **adjust** option enabled (including the "header", "footer", "data" modes) adjusts the width of columns with account of [template](grid/api/api_gridcolumn_properties.md) added to cells. You need to set the **content** attribute of the [header/footer](grid/api/api_gridcolumn_properties.md) properties to one of the following modes: "avg" | "sum" | "max" | "min" | "count", otherwise **text** will be calculated.

@changelog: added in v6.4

[comment]: # (@relatedapi: grid/api/grid_adjustcolumnwidth_method.md)

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#autosize-for-columns)
