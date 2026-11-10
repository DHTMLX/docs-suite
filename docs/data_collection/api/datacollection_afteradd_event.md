---
sidebar_label: afterAdd
title: JavaScript DataCollection - afterAdd Event 
description: You can explore the afterAdd event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
component.data.events.on("afterAdd", function(newItem, batch, index){
    console.log("New items are added");
});

@descr:

[comment]: # (@relatedapi:data_collection/api/datacollection_beforeadd_event.md)
