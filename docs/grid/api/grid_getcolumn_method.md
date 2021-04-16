---
sidebar_label: getColumn
title: getColumn
---          

@short: returns an object with attributes of a column

```todoapi
object getColumn(string|number colId);
getColumn(colId: string): ICol;
```

@params:
- colId		string,number		the id of a column

@returns:
- config		object		an object with attributes of a column


@example:
var column = grid.getColumn("b"); // ->
// {width: 100, id: "b", header: Array(1), $cellCss: {…}, type: "string"}


@template: api_method
@descr:
The returned object contains the following set of properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a column</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>number</i>) the width of a column</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>header</b></td>
			<td>(<i>array</i>) mandatory, an array of objects with header rows configuration
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>htmlEnable</b></td>
			<td>(<i>boolean</i>) if set to <i>true</i>, specifies the HTML content (inner HTML) of a column. If set to <i>false</i>, the content of the column cells will be displayed as a <i>string</i> value </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>footer</b></td>
			<td>(<i>array</i>) an array of objects with footer rows configuration
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>maxWidth</b></td>
			<td>(<i>number</i>) the maximal width to be set for a column </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>minWidth</b></td>
			<td>(<i>number</i>) the minimal width to be set for a column </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>mark</b></td>
			<td>(<i>object|function</i>) returns a template for marking a cell(s)
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>resizable</b></td>
			<td>(<i>boolean</i>) defines whether a column can be resized</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a column: "string"|"number"|"boolean"|"any"|"date"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>dateFormat</b></td>
			<td>(<i>string</i>) defines <a href="https://docs.dhtmlx.com/suite/calendar__api__calendar_dateformat_config.html">the format of dates</a> (type:"date")</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>editorType</b></td>
			<td>(<i>string</i>) the type of an editor used in a column: "input"|"select"|"datePicker"|"checkbox"|"combobox"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>options</b></td>
			<td>(<i>array</i>) a set of options to be displayed in the editor of a cell (editorType: "select"|"combobox")</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>template</b></td>
			<td>(<i>function</i>) returns a template with content for a cell(s)
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a column is hidden</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>draggable</b></td>
			<td>(<i>boolean</i>) defines whether a column is draggable</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>editable</b></td>
			<td>(<i>boolean</i>) defines whether a column is editable</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>sortable</b></td>
			<td>(<i>boolean</i>) defines whether a column is sortable</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>adjust</b></td>
			<td>(<i>boolean|string</i>) defines whether the width of a column is automatically adjusted to its content</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>autoWidth</b></td>
			<td>(<i>boolean</i>) enables/disables the ability of a column to adjust its size to the size of Grid</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>align</b></td>
			<td>(<i>string</i>) aligns data in a column: "left" | "center" | "right"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>boolean</i>) enables a tooltip on hovering over the content of a column, <i>true</i> by default</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>$cellCss</b></td>
			<td>(<i>array</i>) <b>readonly</b>, an array of objects with CSS classes (as key:value pairs) for each cell of a column</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>$uniqueData</b></td>
			<td>(<i>array</i>) <b>readonly</b>, an array that contains some unique data, can't be redefined</td>
		</tr>
    </tbody>
</table>

@related: grid/usage.md#workingwithcolumnsandcells
@relatedapi: grid/api/grid_setcolumns_method.md

@changelog:


