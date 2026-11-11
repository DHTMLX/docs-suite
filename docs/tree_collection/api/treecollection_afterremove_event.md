---
sidebar_label: afterRemove
title: JavaScript TreeCollection - afterRemove Event 
description: Learn when the afterRemove event of TreeCollection fires once an item is removed from a tree collection, and which item the handler receives. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# afterRemove

@short: fires after an item is removed from the collection

#### Usage

~~~ts
afterRemove: (removedItem: IDataItem, batch: IDataItem[], index: number) => void;
~~~

@params:
- `removedItem: IDataItem` - the object of a removed item
- `batch: IDataItem[]` - an array of removed items
- `index: number` - the index of the removed item within the batch

@example:
component.data.events.on("afterRemove", function(removedItem){
    console.log("An item is removed");
});

@descr:

**Related API**:
- [`remove()`](tree_collection/api/treecollection_remove_method.md)
- [`beforeRemove`](tree_collection/api/treecollection_beforeremove_event.md)
