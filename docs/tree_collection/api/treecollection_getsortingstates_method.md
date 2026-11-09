---
sidebar_label: getSortingStates()
title: JavaScript TreeCollection - getSortingStates Method 
description: You can explore the getSortingStates method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getSortingStates()

@short: returns an array of objects with the current parameters of sorting applied to the data

#### Usage

~~~ts
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
An array of `ISortingState` objects with the current parameters of sorting applied to the data. Each object contains the following properties:
- `by: string | number` - the id of a data field to sort by
- `dir: "asc" | "desc"` - the direction of sorting
- `as?: function` - optional, a custom function of converting values before comparing
- `rule?: function` - optional, a custom sorting function
- `smartSorting?: boolean` - optional, (if applied) specifies whether a sorting rule should be applied each time after changing the data set

@example:
const state = component.data.getSortingStates(); 

@descr:


@changelog:
added in v9.1