---
sidebar_label: getSpan
title: getSpan
---          

@short: returns an object with spans

@signature: {'getSpan(row: string | number, col: string | number): object;'}

@params:
- row		string | number		the id of a row
- col		string | number		the id of a column

@returns:
- span		object		an object with configuration of a span

@example:
var span = grid.getSpan("10","a"); 
// -> {row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}

@descr:

A returned **span** object contains the following properties:

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
    </tbody>
</table>

[comment]: # (@relatedapi: grid/api/grid_spans_config.md grid/api/grid_addspan_method.md grid/api/grid_removespan_method.md)

[comment]: # (@related: grid/usage.md#addingremoving-spans)
