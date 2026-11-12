---
sidebar_label: beforeRemove
title: JavaScript DataCollection - beforeRemove Event 
description: Learn when the beforeRemove event of DataCollection fires before items are removed from a flat collection and how to keep an item by returning false. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# beforeRemove

@short: fires before an item or several items are removed from the collection

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
component.data.events.on("beforeRemove", (removedItem, batch, index) => {
    console.log("Items will be removed");
    return true;
});

@descr:

**Related API**:
- [`remove()`](data_collection/api/datacollection_remove_method.md)
- [`afterRemove`](data_collection/api/datacollection_afterremove_event.md)
