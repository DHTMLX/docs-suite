---
sidebar_label: columns
title: columns
description: description
---          

``` todo таблица 

@short: specifies the configuration of grid columns

```todoapi ```

@type: array

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [
		{ width: 100, id: "a", header: [{ text: "#" }] },
		{ width: 100, id: "b", header: [{ text: "Title" }] },
		{ width: 200, id: "c", header: [{ text: "Name" }] },
		{ width: 200, id: "d", header: [{ text: "Address" }] }
	],
	data: dataset
});


@template:	api_config
@descr: 
Each column object may contain a set of properties described below:

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
			<td>(<i>array</i>) mandatory, an array of objects with header rows configuration. Each header object may include:
            <ul>
            <li><b>text</b> - (<i>string|number</i>) the text of a header</li>
            <li><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#alignment"><b>align</b></a> - (<i>string</i>) aligns data in the header: "left"|"center"|"right"</li>
            <li><b>colspan</b> - (<i>number</i>) the number of columns in a colspan</li>
            <li><b>rowspan</b> - (<i>number</i>) the number of rows in a rowspan <br/> {{editor	https://snippet.dhtmlx.com/eol76o68	Grid. Header Spans}}</li>
            <li><b>css</b> - (<i>any</i>) styling to be applied to a header</li>
            <li><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#headerfootercontent"><b>content</b></a> - (<i>string</i>) additional content of a header, which can be:
            <ol>- a filter: "inputFilter" | "selectFilter" | "comboFilter"</ol>
            <ol>- one of the methods that process values in a column and show result in the header: "avg" | "sum" | "max" | "min" </ol>
            <ol>- some other string</ol>
            </li>
            <li><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#headerfootercontent"><b>filterConfig</b></a> - (<i>object</i>) optional, a configuration object for "comboFilter". It can contain a set of properties:
            <ol>- <b>filter</b> - (<i>function</i>) sets a custom function for filtering Combo Box options</ol>
            <ol>- <b>readonly</b> - (<i>boolean</i>) makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input)</ol>
            <ol>- <b>template</b> - (<i>function</i>) sets a template of displaying options in the popup list</ol>
            <ol>- <b>placeholder</b> - (<i>string</i>) sets a placeholder in the input of ComboBox</ol>
            <ol>- <b>virtual</b> - (<i>boolean</i>) enables dynamic loading of data on scrolling the list of options</ol>
            </li>
            </ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#htmlcontentofgridcolumns"><b>htmlEnable</b></a></td>
			<td>(<i>boolean</i>) if set to <i>true</i>, specifies the HTML content (inner HTML) of a column. If set to <i>false</i>, the content of the column cells will be displayed as a <i>string</i> value <br/> {{editor	https://snippet.dhtmlx.com/chitkvkc	Grid. Html In Data}}</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>footer</b></td>
			<td>(<i>array</i>) an array of objects with footer rows configuration. Each footer object may include:
            <ul>
            <li><a href="https://docs.dhtmlx.com/suite/grid__customization.html#stylingfootercells"><b>text</b></a> - (<i>string|number</i>) the text of a footer <br/> {{editor	https://snippet.dhtmlx.com/9jl55ep7	Grid. Grid With Footer}}</li>
            <li><b>colspan</b> - (<i>number</i>) the number of columns in a colspan</li>
            <li><b>rowspan</b> - (<i>number</i>) the number of rows in a rowspan</li>
            <li><b>css</b> - (<i>any</i>) styling to be applied to a footer</li>
            <li><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#headerfootercontent"><b>content</b></a> - (<i>string</i>) additional content of a footer, which can be:
            <ol>- a filter: "inputFilter" | "selectFilter" | "comboFilter"</ol>
            <ol>- one of the methods that process values in a column and show result in the footer: "avg" | "sum" | "max" | "min" </ol>
            <ol>- some other string</ol>
            </li>
            <li><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#headerfootercontent"><b>filterConfig</b></a> - (<i>object</i>) optional, a configuration object for "comboFilter". It can contain a set of properties:
            <ol>- <b>filter</b> - (<i>function</i>) sets a custom function for filtering Combo Box options</ol>
            <ol>- <b>readonly</b> - (<i>boolean</i>) makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input)</ol>
            <ol>- <b>template</b> - (<i>function</i>) sets a template of displaying options in the popup list</ol>
            <ol>- <b>placeholder</b> - (<i>string</i>) sets a placeholder in the input of ComboBox</ol>
            <ol>- <b>virtual</b> - (<i>boolean</i>) enables dynamic loading of data on scrolling the list of options</ol>
            </li>
            </ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>maxWidth</b></td>
			<td>(<i>number</i>) the maximal width to be set for a column <br/> {{editor	https://snippet.dhtmlx.com/ku3cfaux	Grid. Max Width}}</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>minWidth</b></td>
			<td>(<i>number</i>) the minimal width to be set for a column <br/> {{editor	https://snippet.dhtmlx.com/x5hmpi9d	Grid. Min Width}}</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__customization.html#addingcustommarkstocells"><b>mark</b></a></td>
			<td>(<i>object|function</i>) returns a template for marking a cell(s)
            <ul><li>as an <i>object</i> contains <b>min</b> and <b>max</b> properties, to apply desired CSS classes to cells with minimal|maximal values in a column </li>
            <li>as a <i>function</i> takes several parameters:
            <ol>- <b>cell</b> - (<i>string</i>) the value of a cell</ol>
            <ol>- <b>columnCells</b> - (<i>array</i>) an array of all cell values in the specified column</ol>
            <ol>- <b>row</b> - (<i>object</i>) an object with all cells in a row</ol>
            <ol>- <b>col</b> - (<i>object</i>) the config of a column (see the <b>columns</b> config) <br/>{{editor	https://snippet.dhtmlx.com/buirf16n	Grid. Mark Cells}}</ol>
            </li></ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#resizing"><b>resizable</b></a></td>
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
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#columneditors"><b>editorType</b></a></td>
			<td>(<i>string</i>) the type of an editor used in a column: "input"|"select"|"datePicker"|"checkbox"|"combobox"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>options</b></td>
			<td>(<i>array</i>) a set of options to be displayed in the editor of a cell (editorType: "select"|"combobox")</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__customization.html#addingtemplatetocells"><b>template</b></a></td>
			<td>(<i>function</i>) returns a template with content for a cell(s). Takes 3 parameters:
            <ul>
                <li><b>cellValue</b> - (<i>any</i>) the value of a cell</li>
                <li><b>row</b> - (<i>object</i>) an object with all cells in a row</li>
                <li><b>col</b> - (<i>object</i>) the config of a column (see the <b>columns</b> config)<br/>{{editor	https://snippet.dhtmlx.com/9txizaow	Grid. Cell Templates}}</li>
            </ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#hiddencolumns"><b>hidden</b></a></td>
			<td>(<i>boolean</i>) defines whether a column is hidden <br/>{{editor	https://snippet.dhtmlx.com/lh7ma639	Grid. Hidden Columns}}</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#dragndropofgridcolumns"><b>draggable</b></a></td>
			<td>(<i>boolean</i>) defines whether a column is draggable</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#editinggridandseparatecolumns"><b>editable</b></a></td>
			<td>(<i>boolean</i>) defines whether a column is editable</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#sortingcolumns"><b>sortable</b></a></td>
			<td>(<i>boolean</i>) defines whether a column is sortable</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#autosizeforcolumns"><b>adjust</b></a></td>
			<td>(<i>boolean|string</i>) defines whether the width of a column is automatically adjusted to its content</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#autowidthforcolumns"><b>autoWidth</b></a></td>
			<td>(<i>boolean</i>) enables/disables the ability of a column to adjust its size to the size of Grid</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#alignment"><b>align</b></a></td>
			<td>(<i>string</i>) aligns data in a column: "left" | "center" | "right"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/grid__configuration.html#tooltip"><b>tooltip</b></a></td>
			<td>(<i>boolean</i>) enables a tooltip on hovering over the content of a column, <i>true</i> by default</td>
		</tr>
    </tbody>
</table>

@related: grid/initialization.md#initializegrid
grid/configuration.md#columns

grid/customization.md

```