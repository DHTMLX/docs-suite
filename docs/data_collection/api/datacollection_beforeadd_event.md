---
sidebar_label: beforeAdd
title: JavaScript DataCollection - beforeAdd Event 
description: Learn when the beforeAdd event of DataCollection fires before items are added to a flat collection and how to cancel the adding by returning false. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# beforeAdd

@short: fires before an item or several items are added to the collection

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
component.data.events.on("beforeAdd", function(newItem, batch, index){
    console.log("New items will be added");
    return true;
});

@descr:

**Related API**:
- [`add()`](data_collection/api/datacollection_add_method.md)
- [`afterAdd`](data_collection/api/datacollection_afteradd_event.md)
