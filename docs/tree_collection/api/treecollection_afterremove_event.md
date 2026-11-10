---
sidebar_label: afterRemove
title: JavaScript TreeCollection - afterRemove Event 
description: You can explore the afterRemove event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterRemove

@short: fires after an item is removed from the collection

#### Usage

~~~ts
afterRemove: (removedItem: IDataItem, batch: IDataItem[], index: number) => void;
~~~

@params:
- `removedItem: IDataItem` - the object of a removed item
- `batch: IDataItem[]` - an array of removed items
- `index: number` - the index of the removed item within the batch

@example:
component.data.events.on("afterRemove", function(removedItem){
    console.log("An item is removed");
});

@descr:

[comment]: # (@relatedapi:tree_collection/api/beforeremove_event.md)
