---
sidebar_label: beforeDrop
title: JavaScript DataView - beforeDrop Event 
description: You can explore the beforeDrop event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeDrop

@short: fires before the user has finished dragging an item and released the mouse button

@signature: {'beforeDrop: (data: object, events: MouseEvent) => void | boolean;'}

@params:
- `data: object` - data object. It contains the following parameters:
	- `start: string | number` -  the id of an item, from which the dragging process has started
	- `source: array` - an array with ids of dragged items
	- `target: string | number` - the id of a potential target item
- `events: MouseEvent` - a native HTML event object

@returns:
Return `false` to block the default action; otherwise, `true`.

@example:
dataview.events.on("beforeDrop", function(data, events) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Dataview. Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v7.0

[comment]: # (@relatedapi:
dataview/api/dataview_afterdrag_event.md dataview/api/dataview_afterdrop_event.md dataview/api/dataview_beforedrag_event.md dataview/api/dataview_canceldrop_event.md dataview/api/dataview_candrop_event.md dataview/api/dataview_dragin_event.md dataview/api/dataview_dragout_event.md dataview/api/dataview_dragstart_event.md)
