---
sidebar_label: forEach
title: forEach
---          

@short: iterates over all specified layout cells

```todoapi ```

@params:
- callback 		function 		a function that will iterate over specified Layout cells
- parentID      string          optional, the parent id. If not specified, the function will start iterating over from the root item.
- level         number          optional, the number of levels to be iterated over. If not specified, each nested level will be visited.




@example:
layout.forEach(function(cell, index, array) {
    console.log("This is a cell: ", cell);
    console.log("This is a cell index: ", index);
    console.log("This is an array of cells: ", array);
}, parentID, level);




@template: api_method
@descr:

The callback function takes three parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>cell</b></td>
			<td>(<i>object</i>) the object of a layout cell</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>index</b></td>
			<td>(<i>number</i>) the index of a layout cell</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>array</b></td>
			<td>(<i>array</i>) an array with layout cells</td>
		</tr>
    </tbody>
</table>



@relatedsample: https://snippet.dhtmlx.com/9hfntqpy	Layout. ForEach

@changelog: added in v6.4


