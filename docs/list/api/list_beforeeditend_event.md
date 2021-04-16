---
sidebar_label: beforeEditEnd
title: beforeEditEnd
---          

@short: fires before editing of an item is ended

@signature: beforeEditEnd: (value: string, id: string | number) => void | boolean;
	
@params:
- value		string		the value of an item
- id		string | number		the id of an item

@returns:
- result	boolean		false - to prevent closing of an editor, otherwise true

@example:
list.events.on("BeforeEditEnd", function(value,id){
	// your logic here
    return false;
});


@template:	api_event
@descr:


	

@relatedsample:
https://snippet.dhtmlx.com/iwt1yd61	List. List Events

@changelog: added in v6.1

