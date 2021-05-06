---
sidebar_label: beforeEditStart
title: beforeEditStart
---          

@short: fires before editing of an item has started

@signature: beforeEditStart: (id: string | number) => void | boolean;
	
@params:
- id		string | number		the id of an item

@returns:
- result		void | boolean		false- to block item editing, true otherwise

@example:
list.events.on("BeforeEditStart", function(value,id){
	// your logic here
    return false;
});



@descr:



**Related sample**:
- [List. List Events](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v6.1

