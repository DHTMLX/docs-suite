---
sidebar_label: getVisibleIndex()
title: JavaScript TreeCollection - getVisibleIndex Method 
description: Learn how the getVisibleIndex method of TreeCollection reports the rendered position of a tree item, either within its branch or in the flat list of the visible rows. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getVisibleIndex()

@short: returns the position of an item among the visible ones, i.e. in the order the items are rendered in

#### Usage

~~~ts
type Id = string | number;
getVisibleIndex(id: Id, flat?: boolean): number;
~~~

@params:
- `id: Id` - the id of the item (row) the index is requested for
- `flat?: boolean` - optional, *false* by default. For tree data the index is counted within the branch the item belongs to. Set `flat` to *true* to count it in the flat list of all the visible items instead: the items of the expanded branches above the item are counted as well

@returns:
The zero-based index of the item among the visible ones, or `-1` if the item:

- doesn't exist in the collection
- is hidden
- is placed inside a collapsed branch, or under a hidden parent
- is filtered out
- is not on the currently shown page, when pagination is used

@descr:

Items that are not visible are not counted, and an item that is not visible itself gets `-1`. Unlike [`getIndex()`](tree_collection/api/treecollection_getindex_method.md), which reports the position in the data, this method follows the current expand, hide, filter and sort state.

With pagination the top level items are counted from the beginning of the current page.

:::info
The method is available on [DataCollection](data_collection/api/datacollection_getvisibleindex_method.md) (flat data) and on TreeCollection (tree data). The `flat` parameter is available for tree data only.
:::

:::note
The default expand state differs between the widgets: branches of Grid with the `type: "tree"` configuration option are expanded, while branches of Tree are collapsed until expanded.
:::

#### Example

~~~jsx
// Grid (type: "tree")
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns,
    data: [
        { id: "1", name: "item1" },
        { id: "2", name: "item2" },
        { id: "3", name: "item3" },
        { id: "3.1", name: "subitem1", parent: "3" },
        { id: "3.2", name: "subitem2", parent: "3" },
        { id: "4", name: "item4" },
    ],
});

// the rows are rendered as "1", "2", "3", "3.1", "3.2", "4"
grid.data.getVisibleIndex("3.2"); // -> 1, the second shown row of the "3" branch
grid.data.getVisibleIndex("3.2", true); // -> 4, the fifth shown row of the grid
grid.data.getVisibleIndex("4"); // -> 3, the same index getIndex() reports for a top level row
grid.data.getVisibleIndex("4", true); // -> 5, the sixth shown row of the grid

// a row of a collapsed branch is not shown
grid.collapse("3");
grid.data.getVisibleIndex("3.2"); // -> -1
grid.data.getVisibleIndex("3.2", true); // -> -1
grid.data.getIndex("3.2"); // -> 1, getIndex doesn't take collapsing into account

// hidden rows are not shown and are not counted
grid.expand("3");
grid.hideRow("3.1");
grid.data.getVisibleIndex("3.1"); // -> -1
grid.data.getVisibleIndex("3.2"); // -> 0, the only shown row of the "3" branch
grid.data.getVisibleIndex("3.2", true); // -> 3
~~~

~~~jsx
// Tree
// the "3" branch holds "3.1" and "3.2" and is collapsed until expanded
tree.data.getVisibleIndex("3.2"); // -> -1

tree.expand("3");
tree.data.getVisibleIndex("3.2"); // -> 1

tree.collapse("3");
tree.data.getVisibleIndex("3.2"); // -> -1
~~~

**Related API**: [`getIndex()`](tree_collection/api/treecollection_getindex_method.md), [`getId()`](tree_collection/api/treecollection_getid_method.md), [`mapVisible()`](tree_collection/api/treecollection_mapvisible_method.md)

@changelog:
added in v9.4
