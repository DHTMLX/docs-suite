---
sidebar_label: afterRemove
title: afterRemove
---          

@short: fires after removing a new item from a data collection

@signature: {'afterRemove: (obj: any) => void;'}

@params:
`removedItem: object` - the object of a removed item

@example:
data.events.on("AfterRemove", function(removedItem){
	console.log("An item is removed");
});

@descr:

[comment]: # (@relatedapi:data_collection/api/datacollection_beforeremove_event.md)
