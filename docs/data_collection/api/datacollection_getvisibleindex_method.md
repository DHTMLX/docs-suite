---
sidebar_label: getVisibleIndex()
title: JavaScript DataCollection - getVisibleIndex Method 
description: Learn how the getVisibleIndex method of DataCollection reports the rendered position of a data item, skipping the hidden, filtered out and off-page ones. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getVisibleIndex()

@short: returns the position of an item among the visible ones, i.e. in the order the items are rendered in

#### Usage

~~~ts
type Id = string | number;
getVisibleIndex(id: Id): number;
~~~

@params:
- `id: Id` - the id of the item (row) the index is requested for

@returns:
The zero-based index of the item among the visible ones, or `-1` if the item:

- doesn't exist in the collection
- is hidden
- is filtered out
- is not on the currently shown page, when pagination is used

@descr:

Items that are not visible are not counted, and an item that is not visible itself gets `-1`. Unlike [`getIndex()`](data_collection/api/datacollection_getindex_method.md), which reports the position in the data, this method follows the current hide, filter and sort state.

With pagination the items are counted from the beginning of the current page.

:::info
The method is available on DataCollection (flat data) and on [TreeCollection](tree_collection/api/treecollection_getvisibleindex_method.md) (tree data). The `flat` parameter is available for tree data only, where it controls whether the index is counted within the branch of the item or in the flat list of all the visible items.
:::

#### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns,
    data: [
        { id: "1", name: "item1" },
        { id: "2", name: "item2" },
        { id: "3", name: "item3" },
    ],
});

// the rows are rendered as "1", "2", "3"
grid.data.getVisibleIndex("3"); // -> 2

// hidden rows are not shown and are not counted
grid.hideRow("2");
grid.data.getVisibleIndex("2"); // -> -1
grid.data.getVisibleIndex("3"); // -> 1
~~~

**Related API**: [`getIndex()`](data_collection/api/datacollection_getindex_method.md), [`getId()`](data_collection/api/datacollection_getid_method.md), [`getLength()`](data_collection/api/datacollection_getlength_method.md)

@changelog:
added in v9.4
