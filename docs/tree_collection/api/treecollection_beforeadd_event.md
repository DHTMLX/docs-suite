---
sidebar_label: beforeAdd
title: JavaScript TreeCollection - beforeAdd Event 
description: Learn when the beforeAdd event of TreeCollection fires before an item is added to a tree collection and how to cancel the adding by returning false. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# beforeAdd

@short: fires before an item is added to the collection

#### Usage

~~~ts
beforeAdd: (newItem: IDataItem, batch: IDataItem[], index: number) => boolean | void;
~~~

@params:
- `newItem: IDataItem` - the object of an item to add
- `batch: IDataItem[]` - an array of added items
- `index: number` - the index of the added item within the batch; `undefined` if a single item (not an array) is added

@returns:
Return `false` to prevent adding of the item to the collection; otherwise, `true`.

@example:
component.data.events.on("beforeAdd", function(newItem){
    console.log("A new item will be added");
    return true;
});

@descr:

**Related API**:
- [`add()`](tree_collection/api/treecollection_add_method.md)
- [`afterAdd`](tree_collection/api/treecollection_afteradd_event.md)
