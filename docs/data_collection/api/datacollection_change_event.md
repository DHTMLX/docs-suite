---
sidebar_label: change
title: change
---          

@short: fires when a data collection is modified
todoanton any приходит из d.ts
@signature: {'change: (id?: string, status?: Statuses, obj?: any) => any;'}
	
@params:
- id				string		the id of an item
- status			string 		the status of the operation:"add"|"update"|"remove"
- updatedItem		object		the object of an updated item		


@example:
data.events.on("Change", function(id,status,updatedItem){
	console.log("An item is updated");
});

@template:	api_event
@descr:
