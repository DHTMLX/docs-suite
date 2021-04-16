---
sidebar_label: click
title: click
---          

@short: fires on clicking an item

@signature: click: (id: string | number, e: Event) => void;

@params:
- id 	string,number 		the id of a clicked item
- e 	Event 				a native event object


@example:
dataview.events.on("Click", function(id, e){
   console.log("The item with the id "+ dataview.selection.getId(id) +" was clicked.");
});


@template: api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/2d74uyoh	Dataview. Dataview Events

