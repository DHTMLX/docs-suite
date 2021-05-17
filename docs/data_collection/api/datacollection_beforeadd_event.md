---
sidebar_label: beforeAdd
title: beforeAdd
---          

@short: fires before adding a new item into a data collection

@signature: {'beforeAdd: (obj: any) => boolean | void;'}

@params:
`newItem: object` - the object of an added item

@returns:
Return `false` to prevent an item adding into a data collection; otherwise, `true`.

@example:
data.events.on("BeforeAdd", function(newItem){
	console.log("A new item will be added");
    return true;
});

@descr:

[comment]: # (@relatedapi: data_collection/api/datacollection_afteradd_event.md)
