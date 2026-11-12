---
sidebar_label: getSortingStates()
title: JavaScript TreeCollection - getSortingStates Method 
description: Learn how the getSortingStates method of TreeCollection lists the sorting rules applied to a tree collection at the moment, with the field, the direction and custom functions. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
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
// -> [{ by: "country", dir: "desc" }, { by: "population", dir: "desc" }]

@descr:

**Related API**:
- [`sort()`](tree_collection/api/treecollection_sort_method.md)
- [`restoreOrder()`](tree_collection/api/treecollection_restoreorder_method.md)

@changelog:
added in v9.1