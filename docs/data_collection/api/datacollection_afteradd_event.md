---
sidebar_label: afterAdd
title: afterAdd
---          

@short: fires after adding a new item into a data collection

@signature: {'afterAdd: (newItem: any) => void;'}
	
@params:
`newItem: object` - the object of an added item

@example:
data.events.on("AfterAdd", function(newItem){
	console.log("A new item is added");
});

@descr:

[comment]: # (@relatedapi:data_collection/api/datacollection_beforeadd_event.md)
