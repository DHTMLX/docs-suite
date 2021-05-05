---
sidebar_label: getSortingState
title: getSortingState
---          

@short: returns the current state of sorting data in Grid

@signature: {'getSortingState(): object;'}

@returns:
- any   object	  an object with the current state of sorting data in the grid

@example:
var state = grid.getSortingState(); 
// -> {dir: "desc", by: "country"}



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

**Related sample**:
- [Grid. Get Sorting State](https://snippet.dhtmlx.com/u2vk3ri3)


@related: grid/usage.md#getting-the-sorting-state

@changelog:
added in v6.4

