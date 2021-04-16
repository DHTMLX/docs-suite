---
sidebar_label: getSortingState
title: getSortingState
---          

@short: returns the current state of sorting data in TreeGrid

@signature: getSortingState(): object;

@returns:
- object   object	  an object with the current state of sorting data in the treegrid

@example:
var state = treegrid.getSortingState(); 
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
			<td>(<i>string</i>)the id of a column that the treegrid is sorted by</td>
		</tr>
    </tbody>
</table>


@relatedsample:
https://snippet.dhtmlx.com/bdwwhvls	TreeGrid. Get sorting state


@related: treegrid/usage.md#gettingthesortingstate

@changelog:
added in v6.4

