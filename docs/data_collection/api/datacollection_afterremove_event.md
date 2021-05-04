---
sidebar_label: afterRemove
title: afterRemove
---          

@short: fires after removing a new item from a data collection

@signature: {'afterRemove: (obj: any) => void;'}
	
@params:
- removedItem		object			the object of a removed item

@example:
data.events.on("AfterRemove", function(removedItem){
	console.log("An item is removed");
});

@template:	api_event
@descr:

@relatedapi:data_collection/api/beforeremove_event.md
