---
sidebar_label: beforeRemove
title: JavaScript DataCollection - beforeRemove Event 
description: You can explore the beforeRemove event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeRemove

@short: fires before removing an item/items from a data collection

@signature: {'beforeRemove: (removedItem: IDataItem, batch: IDataItem[], index: number) => boolean | void;'}

@params:
- `removedItem: object` - the object of an item to remove
- `batch: array` - an array of removed items
- `index: number` - the index of the removed item within the batch

@returns:
Return `false` to block removing an item from a data collection; otherwise, `true`.

@example:
component.data.events.on("beforeRemove", function(removedItem, batch, index){
    console.log("Items will be removed");
    return true;
});

@descr:

[comment]: # (@relatedapi:data_collection/api/datacollection_afterremove_event.md)
