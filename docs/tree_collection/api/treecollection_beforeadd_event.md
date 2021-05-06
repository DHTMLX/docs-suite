---
sidebar_label: beforeAdd
title: beforeAdd
---          

@short: fires before adding a new item into a tree collection

@signature: {'beforeAdd: (newItem: any) => boolean | void;'}
	
@params:
- newItem		object			the object of an added item

@returns:
- result		boolean | void		true/false to add/not add an item

@example:
data.events.on("BeforeAdd", function(newItem){
	console.log("A new item will be added");
    return true;
});


@descr:
The event is blockable. Return *false* to prevent an item adding into a data collection.

@relatedapi:
tree_collection/api/afteradd_event.md
