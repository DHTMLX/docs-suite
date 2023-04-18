---
sidebar_label: beforeAdd
title: JavaScript TreeCollection - beforeAdd Event 
description: You can explore the beforeAdd event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeAdd

@short: fires before adding a new item into a tree collection

@signature: {'beforeAdd: (newItem: object) => boolean | void;'}

@params:
- `newItem: object` - the object of an added item

@returns:
Return `false` to prevent adding of an item; otherwise, `true`.

@example:
component.data.events.on("beforeAdd", function(newItem){
	console.log("A new item will be added");
    return true;
});

@descr:

[comment]: # (@relatedapi: tree_collection/api/afteradd_event.md)
