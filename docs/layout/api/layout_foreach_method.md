---
sidebar_label: forEach()
title: JavaScript Layout - forEach Method 
description: You can explore the forEach method of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# forEach()

@short: iterates over all specified layout cells

@signature: {'forEach(callback: LayoutCallback, parentID: string, level: number): void;'}

@params:
- `callback: function` - a function that will iterate over specified Layout cells
- `parentID: string` - optional, the parent id. If not specified, the function will start iterating over from the root item.
- `level: number` - optional, the number of levels to be iterated over. If not specified, each nested level will be visited.

@example:
layout.forEach(function(cell, index, array) {
    console.log("This is a cell: ", cell);
    console.log("This is a cell index: ", index);
    console.log("This is an array of cells: ", array);
}, parentID, level);

@descr:

**Related sample**: [Layout. ForEach](https://snippet.dhtmlx.com/9hfntqpy)

The callback function takes three parameters:

<table>
	<tbody>
        <tr>
			<td><b>cell</b></td>
			<td>(<i>object</i>) the object of a layout cell</td>
		</tr>
        <tr>
			<td><b>index</b></td>
			<td>(<i>number</i>) the index of a layout cell</td>
		</tr>
        <tr>
			<td><b>array</b></td>
			<td>(<i>array</i>) an array with layout cells</td>
		</tr>
    </tbody>
</table>

@changelog: added in v6.4
