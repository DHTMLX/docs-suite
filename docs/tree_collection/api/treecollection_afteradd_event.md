---
sidebar_label: afterAdd
title: JavaScript TreeCollection - afterAdd Event 
description: You can explore the afterAdd event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterAdd

@short: fires after adding a new item into a tree collection

@signature: {'afterAdd: (newItem: object) => void;'}

@params:
- `newItem: object` - the object of an added item

@example:
component.data.events.on("afterAdd", function(newItem){
	console.log("A new item is added");
});

@descr:

[comment]: # (@relatedapi:tree_collection/api/beforeadd_event.md)
