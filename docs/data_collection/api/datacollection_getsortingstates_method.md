---
sidebar_label: getSortingStates()
title: JavaScript DataCollection - getSortingStates Method 
description: You can explore the getSortingStates method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getSortingStates()

@short: returns an array of objects with the current parameters of sorting applied to the data

## Usage

~~~jsx 
interface ISortingState {
    by: string | number, 
    dir: "asc" | "desc", 
    as?: (a) => any,
    rule?: (a, b) => number, 
    smartSorting?: boolean 
}

getSortingStates(): ISortingState[];
~~~

@returns:
An array of objects with the current parameters of sorting applied to the data.

@example:
const state = grid.data.getSortingStates(); 
// -> [{ by: "country", dir: "desc" }, { by: "population", dir: "desc" }]

@descr:
The array returned by the method contains objects with the following properties:

<table>
    <tbody>
        <tr>
            <td><b>by</b></td>
            <td>(<i>string | number</i>) the id of a data field to sort by</td>
        </tr>
        <tr>
            <td><b>dir</b></td>
            <td>(<i>string</i>) the direction of sorting: "asc" or "desc"</td>
        </tr>
        <tr>
            <td><b>as</b></td>
            <td>(<i>function</i>) optional, a custom function of converting values before comparing</td>
        </tr>
        <tr>
            <td><b>rule</b></td>
            <td>(<i>function</i>) optional, a custom sorting function</td>
        </tr>
        <tr>
            <td><b>smartSorting</b></td>
            <td>(<i>boolean</i>) optional, (if applied) specifies whether a sorting rule should be applied each time after changing the data set</td>
        </tr>
    </tbody>
</table>

@changelog:
added in v9.1