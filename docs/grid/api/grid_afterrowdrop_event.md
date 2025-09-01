---
sidebar_label: afterRowDrop
title: JavaScript Grid - afterRowDrop Event 
description: You can explore the afterRowDrop event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterRowDrop

@short: fires before the user has finished dragging a row but after the mouse button is released

@signature: {'afterRowDrop: (data: object, event: MouseEvent, dropPosition: "top" | "bottom" | "in") => void;'}

@params:
The callback of the event is called with the following parameters:

- `data: object` - data object. It contains the following parameters:
    - `start: string | number` - the id of a row, from which the dragging process has started
    - `source: array` - an array with ids of dragged rows
    - `target: string | number` - the id of a potential target row
- `event: MouseEvent` - a native HTML event object
- `dropPosition: string` - defines the position of the dragged item dropping relative to the target item: "top" | "bottom" | "in" (the "in" value is used only for the TreeGrid mode)

@example:
grid.events.on("afterRowDrop", (data, event, dropPosition) => {
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v7.0

[comment]: # (@relatedapi: grid/api/grid_afterrowdrag_event.md grid/api/grid_beforerowdrag_event.md grid/api/grid_beforerowdrop_event.md grid/api/grid_canrowdrop_event.md grid/api/grid_cancelrowdrop_event.md grid/api/grid_dragrowin_event.md grid/api/grid_dragrowout_event.md grid/api/grid_dragrowstart_event.md)

[comment]: # (@related: grid/configuration.md#drag-n-drop-between-grids)
