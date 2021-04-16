---
sidebar_label: beforeRemove
title: beforeRemove
---          

@short: fires before removing an item from a tree collection
	
@params:
- removedItem		object			the object of an item to remove

@returns:
- result		boolean		true/false to remove/not remove an item from a data collection

@example:
data.events.on("BeforeRemove", function(removedItem){
	console.log("An item will be removed");
    return true;
});

@template:	api_event
@descr:

@relatedapi:tree_collection/api/afterremove_event.md
	