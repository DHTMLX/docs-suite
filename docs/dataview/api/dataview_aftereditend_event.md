---
sidebar_label: afterEditEnd
title: afterEditEnd
---          

@short: fires after editing of an item is ended

@signature: afterEditEnd: (value: string, id: string | number) => void;

@params:
- value		string		the value of an item
- id		string | number		the id of an item

@example:
dataview.events.on("AfterEditEnd", function(value,id){
	// your logic here
});

@template: api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/2d74uyoh	Dataview. Dataview Events


@changelog: added in v6.1