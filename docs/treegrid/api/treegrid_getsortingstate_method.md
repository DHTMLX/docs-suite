---
sidebar_label: getSortingState()
title: JavaScript TreeGrid - getSortingState Method 
description: You can explore the getSortingState method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getSortingState()

@short: returns the current state of sorting data in TreeGrid

@signature: {'getSortingState(): object;'}

@returns:
An object with the current state of sorting data in the treegrid.

@example:
const state = treegrid.getSortingState(); 
// -> { dir: "desc", by: "country" }

@descr:

**Related sample**: [TreeGrid. Get sorting state](https://snippet.dhtmlx.com/bdwwhvls)

The return object includes the following attributes:

<table>
    <tbody>
        <tr>
            <td><b>dir</b></td>
            <td>(<i>string</i>) the sorting direction (desc, asc)</td>
        </tr>
        <tr>
            <td><b>by</b></td>
            <td>(<i>string</i>) the id of a column that the treegrid is sorted by</td>
        </tr>
    </tbody>
</table>

@changelog:
added in v6.4

[comment]: # (@related: treegrid/usage.md#getting-the-sorting-state)
