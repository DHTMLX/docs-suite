---
sidebar_label: afterRemove
title: JavaScript TreeCollection - afterRemove Event 
description: You can explore the afterRemove event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterRemove

@short: fires after removing a new item from a tree collection

@signature: {'afterRemove: (removedItem: any) => void;'}

@params:
- `removedItem: object` - the object of a removed item

@example:
component.data.events.on("afterRemove", function(removedItem){
	console.log("An item is removed");
});

@descr:

[comment]: # (@relatedapi:tree_collection/api/beforeremove_event.md)
