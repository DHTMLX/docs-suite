---
sidebar_label: afterDrag
title: JavaScript DataView - afterDrag Event 
description: You can explore the afterDrag event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterDrag

@short: fires after dragging of an item is finished

@signature: {'afterDrag: (data: object, events: MouseEvent) => any;'}

@params:
- `data: object` - data object. It contains the following parameters:
	- `start: string | number` -  the id of an item, from which the dragging process has started
	- `source: array` - an array with ids of dragged items
	- `target: string | number` - the id of a potential target item
- `events: MouseEvent` - a native HTML event object

@example:
dataview.events.on("afterDrag", function(data, events) {
    // your logic here
});

@descr:

**Related sample**: [Dataview. Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v7.0

[comment]: # (@relatedapi: dataview/api/dataview_afterdrop_event.md dataview/api/dataview_beforedrag_event.md dataview/api/dataview_beforedrop_event.md dataview/api/dataview_canceldrop_event.md dataview/api/dataview_candrop_event.md dataview/api/dataview_dragin_event.md dataview/api/dataview_dragout_event.md dataview/api/dataview_dragstart_event.md)
