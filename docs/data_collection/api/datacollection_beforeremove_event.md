---
sidebar_label: beforeRemove
title: beforeRemove
---          

@short: fires before removing an item from a data collection

@signature: {'beforeRemove: (obj: any) => boolean | void;'}

@params:
`removedItem: object` - the object of an item to remove

@returns:
Return `false` to block removing an item from a data collection; otherwise, `true`.

@example:
data.events.on("BeforeRemove", function(removedItem){
	console.log("An item will be removed");
    return true;
});

@descr:

[comment]: # (@relatedapi:data_collection/api/datacollection_afterremove_event.md)
