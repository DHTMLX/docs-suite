---
sidebar_label: spans
title: spans
---          

@short: describes the configuration of cols/rows spans

@signature: spans?: array[];

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


@template:	api_config
@descr: 
Each object in the spans array contains the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>row</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a row</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>column</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a column</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>rowspan</b></td>
			<td>(<i>number</i>) optional, the number of rows in a span</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>colspan</b></td>
			<td>(<i>number</i>) optional, the number of columns in a span</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string|number</i>) optional, the text in a spanned row/column</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) optional, the name of the CSS class that will be applied to a span</td>
		</tr>
    </tbody>
</table>

@related: treegrid/configuration.md#spans
treegrid/initialization.md#initializetreegrid

@relatedsample: https://snippet.dhtmlx.com/o62liqew	TreeGrid. Spans Cells