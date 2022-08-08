---
sidebar_label: spans
title: JavaScript Grid - spans Config 
description: You can explore the spans config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# spans

@short: describes the configuration of cols/rows spans

@signature: {'spans?: ISpan[];'}

@example:
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	spans: [
		{row:"0", column:"a", rowspan:5 },
		{row:"0", column:"b", rowspan:9, text:"<h2>Some content here</h2>"},
		{row:"0", column:"c", colspan:2, text:"Some content"},
		{row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}
	],
	data: dataset
});

@descr:

**Related sample**: [Grid. Grouped headers (spans)](https://snippet.dhtmlx.com/eol76o68)

Each object in the spans array contains the following properties:

<table>
	<tbody>
    <tr>
			<td><b>row</b></td>
			<td>(<i>string|number</i>) obligatory, the id of a row</td>
		</tr>
    <tr>
			<td><b>column</b></td>
			<td>(<i>string|number</i>) obligatory, the id of a column</td>
		</tr>
    <tr>
			<td><b>rowspan</b></td>
			<td>(<i>number</i>) optional, the number of rows in a span</td>
		</tr>
    <tr>
			<td><b>colspan</b></td>
			<td>(<i>number</i>) optional, the number of columns in a span</td>
		</tr>
    <tr>
			<td><b>text</b></td>
			<td>(<i>string|number</i>) optional, the content of a span</td>
		</tr>
    <tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) optional, the name of a CSS class applied to a span</td>
		</tr>
    <tr>
			<td><a href="../../configuration#tooltip"><b>tooltip</b></a></td>
			<td>(<i>boolean</i>) enables a tooltip on hovering over the content of a span, <i>true</i> by default</td>
		</tr>
    </tbody>
</table>

@changelog:

The **tooltip** property is added in v6.5.

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#spans)
