---
sidebar_label: beforeDrop
title: JavaScript List - beforeDrop Event 
description: You can explore the beforeDrop event of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeDrop

@short: fires before the user has finished dragging of an item and released the mouse button

@signature: {'beforeDrop: (data: object, events: MouseEvent) => void | boolean;'}

@params:
- `data: object` - data object. It can contain the following parameters:
    - `start: string | number` - the id of an item, from which the dragging process has started
    - `source: array` - an array with ids of dragged items
    - `target: string | number` - the id of a potential target item
- `events: MouseEvent` - a native HTML event object

@returns:
Return `false` to block the default action; otherwise, `true`.

@example:
list.events.on("beforeDrop", function(data, events) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [List. Events](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v7.0

[comment]: # (@relatedapi: list/api/list_afterdrag_event.md list/api/list_afterdrop_event.md list/api/list_beforedrag_event.md list/api/list_canceldrop_event.md list/api/list_candrop_event.md list/api/list_dragin_event.md list/api/list_dragout_event.md list/api/list_dragstart_event.md)
