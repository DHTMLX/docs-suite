---
sidebar_label: afterRemove
title: JavaScript DataCollection - afterRemove Event 
description: You can explore the afterRemove event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterRemove

@short: Fires after removing an item/items from a data collection

@signature: {'afterRemove: (removedItem: IDataItem, batch: IDataItem[], index: number) => void;'}

@params:
- `removedItem: object` - the object of a removed item
- `batch: array` - an array of removed items
- `index: number` - the index of the removed item within the batch

@example:
component.data.events.on("afterRemove", function(removedItem, batch, index){
    console.log("Items are removed");
});

@descr:

[comment]: # (@relatedapi:data_collection/api/datacollection_beforeremove_event.md)
