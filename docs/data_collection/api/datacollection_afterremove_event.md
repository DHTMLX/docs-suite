---
sidebar_label: afterRemove
title: JavaScript DataCollection - afterRemove Event 
description: Learn when the afterRemove event of DataCollection fires once an item or several items are removed from a flat collection, and what the handler receives. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# afterRemove

@short: fires after an item or several items are removed from the collection

#### Usage

~~~ts
afterRemove: (removedItem: IDataItem, batch: IDataItem[], index: number) => void;
~~~

@params:
- `removedItem: IDataItem` - the object of a removed item
- `batch: IDataItem[]` - an array of removed items
- `index: number` - the index of the removed item within the batch

@example:
component.data.events.on("afterRemove", function(removedItem, batch, index){
    console.log("Items are removed");
});

@descr:

**Related API**:
- [`remove()`](data_collection/api/datacollection_remove_method.md)
- [`beforeRemove`](data_collection/api/datacollection_beforeremove_event.md)
