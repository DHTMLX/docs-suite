---
sidebar_label: mapVisible()
title: JavaScript TreeCollection - mapVisible Method 
description: Learn how the mapVisible method of TreeCollection calls a function for the visible items of a tree collection and returns an array with the results of the calls. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# mapVisible()

@short: iterates through the visible items of the collection and returns an array of the callback results

#### Usage

~~~ts
type Id = string | number;

mapVisible(callback: (item: IDataItem, index?: number) => any, parent?: Id, direct?: boolean): any[];
~~~

@params:
- `callback: function` - the function that will be applied to every visible item. The function is called with the following parameters:
    - `item: IDataItem` - the object of an item
    - `index?: number` - optional, the index of the item among the child items of its parent
- `parent?: Id` - optional, the id of the item the child items of which will be included; the root of the collection by default
- `direct?: boolean` - optional, defines whether the method also iterates through the child items of the expanded items (*true*) or only through the direct child items of the parent item (*false*); *true* by default

@returns:
A new array with the results of calling the callback function for each visible item.

@example:
treegrid.data.mapVisible(item => console.log(item), "parent_id", true);

@descr:

:::note
The method is available in TreeGridCollection only.
:::

:::note
The method iterates through the visible items, i.e. through the items that are not hidden or collapsed.
:::

**Related API**:
- [`map()`](tree_collection/api/treecollection_map_method.md)
- [`getVisibleIndex()`](tree_collection/api/treecollection_getvisibleindex_method.md)

@changelog: added in v7.2