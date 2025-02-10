---
sidebar_label: getSortingStates()
title: JavaScript DataCollection - getSortingStates Method 
description: You can explore the getSortingStates method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getSortingStates()

@short: returns an array of objects with the current parameters of sorting applied to the data

:::note
The method allows getting the result of sorting data by multiple columns.
:::

## Usage

~~~jsx 
interface ISortingState {
    by?: string | number, // the id of a data field (a column of Grid) to sort by
    dir?: "asc" | "desc", // the direction of sorting: "asc" or "desc"
    as?: (a) => any, // a custom function of converting values before comparing
    rule?: (a, b) => number, // a custom sorting function
    smartSorting?: boolean // (if can be applied) specifies whether a sorting rule should be applied each time after changing the data set
}

getSortingStates(): ISortingState[];
~~~

@returns:
An array of objects with the current parameters of sorting applied to the data.

@example:
const state = grid.data.getSortingStates(); 
// -> [{by: "country", dir: "desc"}, {by: "population", dir: "desc"}]

@descr:
The return array contains objects with the following properties:

- `by` - (*string|number*) the id of a data field (a column of Grid) to sort by
- `dir` - (*"asc"|"desc"*) the direction of sorting: "asc" or "desc"
- `as` - (*function*) a custom function of converting values before comparing
- `rule` - (*function*) a custom sorting function
- `smartSorting` - (*boolean*) (if can be applied) specifies whether a sorting rule should be applied each time after changing the data set

@changelog:
added in v9.1