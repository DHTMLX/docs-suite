---
sidebar_label: afterEditEnd
title: afterEditEnd
---          

@short: fires after editing of an item is ended
todoanton any приходит из d.ts
@signature: {'afterEditEnd: (value: any, id: string) => void;'}

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