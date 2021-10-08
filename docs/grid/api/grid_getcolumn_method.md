---
sidebar_label: getColumn()
title: JavaScript Grid - getColumn Method 
description: You can explore the getColumn method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

#  getColumn()

@short: returns an object with attributes of a column

@signature: {'getColumn(colId: Id): ICol;'}

@params:
`colId: string | number` - the id of a column

@returns:
An object with attributes of a column.

@example:
var column = grid.getColumn("b"); // ->
// {width: 100, id: "b", header: Array(1), $cellCss: {…}, type: "string"}

@descr:

The returned object contains the following set of properties:

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a column</td>
		</tr>
        <tr>
			<td><b>width</b></td>
			<td>(<i>number</i>) the width of a column</td>
		</tr>
        <tr>
			<td><b>header</b></td>
			<td>(<i>array</i>) mandatory, an array of objects with header rows configuration
            </td>
		</tr>
        <tr>
			<td><b>htmlEnable</b></td>
			<td>(<i>boolean</i>) if set to <i>true</i>, specifies the HTML content (inner HTML) of a column. If set to <i>false</i>, the content of the column cells will be displayed as a <i>string</i> value </td>
		</tr>
        <tr>
			<td><b>footer</b></td>
			<td>(<i>array</i>) an array of objects with footer rows configuration
            </td>
		</tr>
        <tr>
			<td><b>maxWidth</b></td>
			<td>(<i>number</i>) the maximal width to be set for a column </td>
		</tr>
        <tr>
			<td><b>minWidth</b></td>
			<td>(<i>number</i>) the minimal width to be set for a column </td>
		</tr>
        <tr>
			<td><b>mark</b></td>
			<td>(<i>object|function</i>) returns a template for marking a cell(s)
            </td>
		</tr>
        <tr>
			<td><b>resizable</b></td>
			<td>(<i>boolean</i>) defines whether a column can be resized</td>
		</tr>
        <tr>
			<td><b>type</b></td>
			<td>(<i>string</i>) the type of a column: "string"|"number"|"boolean"|"percent"|"date"</td>
		</tr>
        <tr>
			<td><b>format</b></td>
			<td>(<i>string</i>) defines the format for the content of the column's cells</td>
		</tr>
        <tr>
			<td><b>editorType</b></td>
			<td>(<i>string</i>) the type of an editor used in a column: "input"|"select"|"combobox"|"textarea"</td>
		</tr>
        <tr>
			<td><b>options</b></td>
			<td>(<i>array</i>) a set of options to be displayed in the editor of a cell (editorType: "select"|"combobox"|"multiselect")</td>
		</tr>
        <tr>
			<td><b>template</b></td>
			<td>(<i>function</i>) returns a template with content for a cell(s)
            </td>
		</tr>
        <tr>
			<td><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a column is hidden</td>
		</tr>
        <tr>
			<td><b>draggable</b></td>
			<td>(<i>boolean</i>) defines whether a column is draggable</td>
		</tr>
        <tr>
			<td><b>editable</b></td>
			<td>(<i>boolean</i>) defines whether a column is editable</td>
		</tr>
        <tr>
			<td><b>sortable</b></td>
			<td>(<i>boolean</i>) defines whether a column is sortable</td>
		</tr>
        <tr>
			<td><b>adjust</b></td>
			<td>(<i>boolean|string</i>) defines whether the width of a column is automatically adjusted to its content</td>
		</tr>
        <tr>
			<td><b>autoWidth</b></td>
			<td>(<i>boolean</i>) enables/disables the ability of a column to adjust its size to the size of Grid</td>
		</tr>
        <tr>
			<td><b>align</b></td>
			<td>(<i>string</i>) aligns data in a column: "left" | "center" | "right"</td>
		</tr>
        <tr>
			<td><b>tooltip</b></td>
			<td>(<i>boolean</i>) enables a tooltip on hovering over the content of a column, <i>true</i> by default</td>
		</tr>
		<tr>
			<td><b>tooltipTemplate</b></td>
			<td>(<i>function</i>) returns a template for the content of the tooltip</td>
		</tr>
		<tr>
			<td><b>$cellCss</b></td>
			<td>(<i>array</i>) <b>readonly</b>, an array of objects with CSS classes (as key:value pairs) for each cell of a column</td>
		</tr>
		<tr>
			<td><b>$uniqueData</b></td>
			<td>(<i>array</i>) <b>readonly</b>, an array that contains some unique data, can't be redefined</td>
		</tr>
    </tbody>
</table>

[comment]: # (@related: grid/usage.md#working-with-columns-and-cells)

[comment]: # (@relatedapi: grid/api/grid_setcolumns_method.md)
