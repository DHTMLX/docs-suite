---
sidebar_label: itemMouseOver
title: itemMouseOver
---          

@short: fires on moving the mouse pointer over an item 
todoanton any приходит из d.ts
@signature: {'itemMouseOver: (id: string, e: Event) => any;'}

@params:
- id 	string, number 		the id of an item
- e 	Event 				a native event object

@example:
dataview.events.on("ItemMouseOver", function(id, event) {
    console.log("Item id:" + id);
);

@template: api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/2d74uyoh	Dataview. Dataview Events

@changelog: added in v6.4
