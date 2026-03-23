---
sidebar_label: afterAdd
title: JavaScript DataCollection - afterAdd Event 
description: You can explore the afterAdd event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterAdd

@short: fires after adding a new item/items into a data collection

@signature: {'afterAdd: (newItem: IDataItem, batch: IDataItem[], index: number) => void;'}

@params:
- `newItem: object` - the object of an added item
- `batch: array` - an array of added items
- `index: number` - the index of the added item within the batch

@example:
component.data.events.on("afterAdd", function(newItem, batch, index){
    console.log("New items are added");
});

@descr:

[comment]: # (@relatedapi:data_collection/api/datacollection_beforeadd_event.md)
