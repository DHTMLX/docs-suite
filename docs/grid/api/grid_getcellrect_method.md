---
sidebar_label: getCellRect
title: getCellRect
---          

@short: returns the parameters of a cell

@signature: getCellRect(row: string | number, col: string | number): object;

@params:
- row	string,number		the id of a row
- col	string,number		the id of a column

@returns:
- rect		object		an object with parameters of a cell


@example:
var rect = grid.getCellRect("1","c");
// -> {x: 200, y: -40, height: 40, width: 200}


@template: api_method
@descr:
The return object includes the following attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>x</b></td>
			<td>(<i>number</i>) the X coordinate of a cell</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>y</b></td>
			<td>(<i>number</i>) the Y coordinate of a cell</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>height</b></td>
			<td>(<i>number</i>) the height of a cell</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>number</i>) the width of a cell</td>
		</tr>
    </tbody>
</table>


@related: grid/usage.md#workingwithcolumnsandcells

@changelog:


