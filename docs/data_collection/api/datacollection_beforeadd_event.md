---
sidebar_label: beforeAdd
title: JavaScript DataCollection - beforeAdd Event 
description: You can explore the beforeAdd event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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

[comment]: # (@relatedapi: data_collection/api/datacollection_afteradd_event.md)
