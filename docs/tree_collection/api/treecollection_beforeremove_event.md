---
sidebar_label: beforeRemove
title: JavaScript TreeCollection - beforeRemove Event 
description: Learn when the beforeRemove event of TreeCollection fires before an item is removed from a tree collection and how to keep the item by returning false. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# beforeRemove

@short: fires before an item is removed from the collection

#### Usage

~~~ts
beforeRemove: (removedItem: IDataItem, batch: IDataItem[], index: number) => boolean | void;
~~~

@params:
- `removedItem: IDataItem` - the object of an item to remove
- `batch: IDataItem[]` - an array of removed items
- `index: number` - the index of the removed item within the batch

@returns:
Return `false` to prevent removing of the item from the collection; otherwise, `true`.

@example:
component.data.events.on("beforeRemove", (removedItem) => {
    console.log("An item will be removed");
    return true;
});

@descr:

**Related API**:
- [`remove()`](tree_collection/api/treecollection_remove_method.md)
- [`afterRemove`](tree_collection/api/treecollection_afterremove_event.md)
