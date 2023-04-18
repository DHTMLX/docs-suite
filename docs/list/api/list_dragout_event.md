---
sidebar_label: dragOut
title: JavaScript List - dragOut Event 
description: You can explore the dragOut event of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragOut

@short: fires when an item is dragged out of a potential target

@signature: {'dragOut: (data: object, events: MouseEvent) => void;'}

@params:
- `data: object` - data object. It can contain the following parameters:
	- `start: string | number` - the id of an item, from which the dragging process has started
	- `source: array` - an array with ids of dragged items
	- `target: string | number` - the id of a potential target item
- `events: MouseEvent` - a native HTML event object

@example:
list.events.on("dragOut", function(data, events) {
    // your logic here
});

@descr:

**Related sample**: [List. Events](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v7.0

[comment]: # (@relatedapi: list/api/list_afterdrag_event.md list/api/list_afterdrop_event.md list/api/list_beforedrag_event.md list/api/list_beforedrop_event.md list/api/list_canceldrop_event.md list/api/list_candrop_event.md list/api/list_dragin_event.md list/api/list_dragstart_event.md)
