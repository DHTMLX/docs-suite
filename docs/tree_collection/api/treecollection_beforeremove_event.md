---
sidebar_label: beforeRemove
title: JavaScript TreeCollection - beforeRemove Event 
description: You can explore the beforeRemove event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeRemove

@short: fires before an item is removed from the collection

#### Usage

~~~ts
beforeRemove: (removedItem: IDataItem, batch: IDataItem[], index: number) => boolean | void;
~~~

@params:
- `removedItem: IDataItem` - the object of an item to remove
- `batch: IDataItem[]` - an array of removed items
- `index: number` - the index of the removed item within the batch

@returns:
Return `false` to prevent removing of the item from the collection; otherwise, `true`.

@example:
component.data.events.on("beforeRemove", function(removedItem){
    console.log("An item will be removed");
    return true;
});

@descr:

[comment]: # (@relatedapi:tree_collection/api/afterremove_event.md)
