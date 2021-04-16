---
sidebar_label: afterEditStart
title: afterEditStart
---          

@short: fires after editing of an item has started

@signature: afterEditStart: (value: string, id: string | number) => void;

@params:
- id		string | number		the id of an item

@example:
dataview.events.on("AfterEditStart", function(id){
	// your logic here
});


@template: api_event
@descr:


@relatedsample:
https://snippet.dhtmlx.com/2d74uyoh	Dataview. Dataview Events


@changelog: added in v6.1