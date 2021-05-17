---
sidebar_label: beforeRemove
title: beforeRemove
---          

@short: fires before removing an item from a tree collection

@signature: {'beforeRemove: (removedItem: any) => boolean | void;'}
	
@params:
- `removedItem: object `- the object of an item to remove

@returns:
- `boolean | void` - true/false to remove/not remove an item from a data collection

@example:
data.events.on("BeforeRemove", function(removedItem){
	console.log("An item will be removed");
    return true;
});

@descr:

[comment]: # (@relatedapi:tree_collection/api/afterremove_event.md)
