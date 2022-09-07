---
sidebar_label: getCellRect()
title: JavaScript Grid - getCellRect Method 
description: You can explore the getCellRect method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getCellRect()

@short: returns the parameters of a cell

@signature: {'getCellRect(rowId: Id, colId: Id): object;'}

@params:
- `rowId: string | number` - the id of a row
- `colId: string | number` - the id of a column

@returns:
An object with parameters of a cell.

@example:
const rect = grid.getCellRect("1","c");
// -> {x: 200, y: -40, height: 40, width: 200}

@descr:

The return object includes the following attributes:

<table>
	<tbody>
        <tr>
			<td><b>x</b></td>
			<td>(<i>number</i>) the X coordinate of a cell</td>
		</tr>
        <tr>
			<td><b>y</b></td>
			<td>(<i>number</i>) the Y coordinate of a cell</td>
		</tr>
        <tr>
			<td><b>height</b></td>
			<td>(<i>number</i>) the height of a cell</td>
		</tr>
        <tr>
			<td><b>width</b></td>
			<td>(<i>number</i>) the width of a cell</td>
		</tr>
    </tbody>
</table>

[comment]: # (@related: grid/usage.md#working-with-columns-and-cells)
