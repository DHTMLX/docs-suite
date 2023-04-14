---
sidebar_label: getSortingState()
title: JavaScript Grid - getSortingState Method 
description: You can explore the getSortingState method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getSortingState()

@short: returns the current state of sorting data in Grid

@signature: {'getSortingState(): object;'}

@returns:
An object with the current state of sorting data in the grid.

@example:
const state = grid.getSortingState(); 
// -> {dir: "desc", by: "country"}

@descr:

**Related sample**: [Grid. Get sorting state](https://snippet.dhtmlx.com/u2vk3ri3)

The return object includes the following attributes:

<table>
	<tbody>
        <tr>
			<td><b>dir</b></td>
			<td>(<i>string</i>) the sorting direction (desc, asc)</td>
		</tr>
        <tr>
			<td><b>by</b></td>
			<td>(<i>string | number</i>) the id of a column that the grid is sorted by</td>
		</tr>
    </tbody>
</table>

@changelog:
added in v6.4

[comment]: # (@related: grid/usage.md#getting-the-sorting-state)
