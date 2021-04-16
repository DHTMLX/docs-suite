---
sidebar_label: beforeEditEnd
title: beforeEditEnd
---          

@short: fires before editing of an item is completed

@signature: beforeEditEnd: (value: string, id: string | number) => boolean | void;

@params:
- value		string		the value of an item
- id		string | number		the id of an item

@returns:
- result	boolean		false - to prevent closing of an editor, otherwise true

@example:
dataview.events.on("BeforeEditEnd", function(value,id){
	// your logic here
    return false;
});


@template: api_event
@descr:


@relatedsample:
https://snippet.dhtmlx.com/2d74uyoh	Dataview. Dataview Events

@changelog: added in v6.1


