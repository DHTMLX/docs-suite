---
sidebar_label: afterAdd
title: JavaScript DataCollection - afterAdd Event 
description: Learn when the afterAdd event of DataCollection fires once an item or a batch of items is added, and which item and index the handler receives. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# afterAdd

@short: fires after an item or several items are added to the collection

#### Usage

~~~ts
afterAdd: (newItem: IDataItem, batch: IDataItem[], index: number) => void;
~~~

@params:
- `newItem: IDataItem` - the object of an added item
- `batch: IDataItem[]` - an array of added items
- `index: number` - the index of the added item within the batch; `undefined` if a single item (not an array) is added

@example:
component.data.events.on("afterAdd", (newItem, batch, index) => {
    console.log("New items are added");
});

@descr:

**Related API**:
- [`add()`](data_collection/api/datacollection_add_method.md)
- [`beforeAdd`](data_collection/api/datacollection_beforeadd_event.md)
