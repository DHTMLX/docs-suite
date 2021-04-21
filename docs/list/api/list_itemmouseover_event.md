---
sidebar_label: itemMouseOver
title: itemMouseOver
---          

@short: fires on moving the mouse pointer over an item

@signature: itemMouseOver: (id: string | number, e: Event) => void;

@params:
- id   		string,number			the id of an item
- e			Event					a native event object

@example:
list.events.on("ItemMouseOver", function(id, event) {
    console.log("Item id:" + id);
);


@template: api_event
@descr:



**Related sample**: [List. List Events](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v6.4