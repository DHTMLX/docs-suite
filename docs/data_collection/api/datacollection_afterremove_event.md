---
sidebar_label: afterRemove
title: JavaScript DataCollection - afterRemove Event 
description: You can explore the afterRemove event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterRemove

@short: Fires after removing an item from a data collection

@signature: {'afterRemove: (removedItem: any) => void;'}

@params:
- `removedItem: object` - the object of a removed item

@example:
component.data.events.on("afterRemove", function(removedItem){
	console.log("An item is removed");
});

@descr:

[comment]: # (@relatedapi:data_collection/api/datacollection_beforeremove_event.md)
