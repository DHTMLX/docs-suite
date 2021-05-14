---
sidebar_label: afterAdd
title: afterAdd
---          

@short: fires after adding a new item into a tree collection

@signature: {'afterAdd: (newItem: any) => void;'}
	
@params:
- `newItem: object` - the object of an added item

@example:
data.events.on("AfterAdd", function(newItem){
	console.log("A new item is added");
});

@descr:

@relatedapi:tree_collection/api/beforeadd_event.md
