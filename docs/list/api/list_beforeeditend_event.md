---
sidebar_label: beforeEditEnd
title: beforeEditEnd
---          

@short: fires before editing of an item is ended

@signature: {'beforeEditEnd: (value: any, id: string) => void | boolean;'}
	
@params:
- value		string		the value of an item
- id		string | number		the id of an item

@returns:
- result	void | boolean		false - to prevent closing of an editor, otherwise true

@example:
list.events.on("BeforeEditEnd", function(value,id){
	// your logic here
    return false;
});


@template:	api_event
@descr:


	

**Related sample**:
- [List. List Events](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v6.1

