---
sidebar_label: beforeDrag
title: JavaScript DataView - beforeDrag Event 
description: You can explore the beforeDrag event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeDrag

@short: fires before dragging of an item has started 

@signature: {'beforeDrag: (data: object, events: MouseEvent, ghost: HTMLElement) => void | boolean;'}

@params:
- `data: object` - data object. It contains the following parameters:
	- `start: string | number` -  the id of an item, from which the dragging process has started
	- `source: array` - an array with ids of dragged items
	- `target: string | number` - the id of a potential target item
- `events: MouseEvent` - a native HTML event object
- `ghost: HTMLElement` - an HTML element

@returns:
Return `false` to block dragging of an item; otherwise, `true`.

@example:
dataview.events.on("beforeDrag", function(data, events) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Dataview. Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v7.0

[comment]: # (@relatedapi: dataview/api/dataview_afterdrag_event.md dataview/api/dataview_afterdrop_event.md dataview/api/dataview_beforedrop_event.md dataview/api/dataview_canceldrop_event.md dataview/api/dataview_candrop_event.md dataview/api/dataview_dragin_event.md dataview/api/dataview_dragout_event.md dataview/api/dataview_dragstart_event.md)
