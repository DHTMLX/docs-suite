---
sidebar_label: click
title: click
---          

@short: fires on clicking an item

@signature: {'click: (id: string | number, events: Event) => void;'}

@params:
- id		string | number			the id of a clicked item
- events	Event					a native event object


@example:
list.events.on("Click", function(id, e){
    console.log("The item with the id "+ list.selection.getId(id) +" was clicked.");
});


@template: api_event
@descr:

**Related sample**: [List. List Events](https://snippet.dhtmlx.com/iwt1yd61)

