---
sidebar_label: dragRowOut
title: JavaScript Grid - dragRowOut Event 
description: You can explore the dragRowOut event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragRowOut

@short: fires when a row is dragged out of a potential target

@signature: {'dragRowOut: (data: object, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `data: object` - data object. It contains the following properties:
    - `start: string | number` - the id of a row, from which the dragging process has started
    - `source: array` - an array with ids of dragged rows
    - `target: string | number` - the id of a potential target row
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("dragRowOut", (data, event) => {
  // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v7.0

[comment]: # (@relatedapi: grid/api/grid_afterrowdrag_event.md grid/api/grid_afterrowdrop_event.md grid/api/grid_beforerowdrag_event.md grid/api/grid_beforerowdrop_event.md grid/api/grid_canrowdrop_event.md grid/api/grid_cancelrowdrop_event.md grid/api/grid_dragrowin_event.md grid/api/grid_dragrowstart_event.md) 

[comment]: # (@related: grid/configuration.md#drag-n-drop-between-grids)
