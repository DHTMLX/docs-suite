---
sidebar_label: addSpan
title: addSpan
---          

@short: adds a rows/cols span

@signature: addSpan(object: span): void;

@params:
- span 		object 		an object with configuration of a span

@example:
grid.addSpan({ 
    row: "0", 
    column: "a", 
    rowspan: 5 
});
// grid.paint();


@template: api_method
@descr:
The **span** object contains the following properties:

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


@relatedapi:
grid/api/grid_spans_config.md
grid/api/grid_getspan_method.md
grid/api/grid_removespan_method.md


@changelog:

@related: treegrid/usage.md#addingremovingspans
