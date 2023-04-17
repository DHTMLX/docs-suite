---
sidebar_label: beforeRemove
title: JavaScript TreeCollection - beforeRemove Event 
description: You can explore the beforeRemove event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeRemove

@short: fires before removing an item from a tree collection

@signature: {'beforeRemove: (removedItem: object) => boolean | void;'}

@params:
- `removedItem: object `- the object of an item to remove

@returns:
Return `false` to prevent removing of an item from a data collection; otherwise `true.`

@example:
component.data.events.on("beforeRemove", function(removedItem){
	console.log("An item will be removed");
    return true;
});

@descr:

[comment]: # (@relatedapi:tree_collection/api/afterremove_event.md)
