---
sidebar_label: afterAdd
title: JavaScript TreeCollection - afterAdd Event 
description: Learn when the afterAdd event of TreeCollection fires once an item is added to a tree collection, and which item and index the handler receives. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# afterAdd

@short: fires after an item is added to the collection

#### Usage

~~~ts
afterAdd: (newItem: IDataItem, batch: IDataItem[], index: number) => void;
~~~

@params:
- `newItem: IDataItem` - the object of an added item
- `batch: IDataItem[]` - an array of added items
- `index: number` - the index of the added item within the batch; `undefined` if a single item (not an array) is added

@example:
component.data.events.on("afterAdd", function(newItem){
    console.log("A new item is added");
});

@descr:

**Related API**:
- [`add()`](tree_collection/api/treecollection_add_method.md)
- [`beforeAdd`](tree_collection/api/treecollection_beforeadd_event.md)
