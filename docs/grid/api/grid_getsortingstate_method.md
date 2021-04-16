---
sidebar_label: getSortingState
title: getSortingState
---          

@short: returns the current state of sorting data in Grid

getSortingState(): object;

@returns:
- any   object	  an object with the current state of sorting data in the grid

@example:
var state = grid.getSortingState(); 
// -> {dir: "desc", by: "country"}


@template: api_method
@descr:
The return object includes the following attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>dir</b></td>
			<td>(<i>string</i>) the sorting direction (desc, asc)</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>by</b></td>
			<td>(<i>string</i>) the id of a column that the grid is sorted by</td>
		</tr>
    </tbody>
</table>

@relatedsample:
https://snippet.dhtmlx.com/u2vk3ri3	Grid. Get Sorting State


@related: grid/usage.md#gettingthesortingstate

@changelog:
added in v6.4

