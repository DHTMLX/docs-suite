---
sidebar_label: afterAdd
title: afterAdd
---          

@short: fires after adding a new item into a data collection
	
@params:
- newItem		object			the object of an added item

@example:
data.events.on("AfterAdd", function(newItem){
	console.log("A new item is added");
});

@template:	api_event
@descr:

@relatedapi:data_collection/api/beforeadd_event.md
