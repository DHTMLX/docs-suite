---
sidebar_label: doubleClick
title: doubleClick
---          

@short: fires on double clicking an item

@signature: doubleClick: (id: string | number, e: Event) => void;

@params:
- id 	string,number 		the id of a clicked item
- e 	Event 				a native event object

@example:
dataview.events.on("DoubleClick", function(id, e){
   console.log("The item "+ dataview.selection.getId(id) +" was double clicked.");
});


@template: api_event
@descr:


@relatedsample:
https://snippet.dhtmlx.com/2d74uyoh	Dataview. Dataview Events


@changelog: added in v6.1