---
sidebar_label: beforeAdd
title: JavaScript TreeCollection - beforeAdd Event 
hide_title: true
description: You can explore the beforeAdd event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeAdd

@short: fires before adding a new item into a tree collection

@signature: {'beforeAdd: (newItem: any) => boolean | void;'}

@params:
`newItem: object` - the object of an added item

@returns:
Return `true` to add an item, `false` not to add an item.

@example:
data.events.on("BeforeAdd", function(newItem){
	console.log("A new item will be added");
    return true;
});

@descr:

The event is blockable. Return *false* to prevent an item adding into a data collection.

[comment]: # (@relatedapi: tree_collection/api/afteradd_event.md)
