---
sidebar_label: beforeRowDrop
title: JavaScript Grid - beforeRowDrop Event 
description: You can explore the beforeRowDrop event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeRowDrop

@short: fires before the user has finished dragging and released the mouse button over a target row

@signature: {'beforeRowDrop: (data: object, event: MouseEvent, dropPosition: "top" | "bottom" | "in") => void | boolean;'}

@params:
The callback of the event is called with the following parameters:
- `data: object` - data object. It contains the following properties:
    - `start: string | number` - the id of a row, from which the dragging process has started
    - `source: array` - an array with ids of dragged rows
    - `target: string | number` - the id of a potential target row
- `event: MouseEvent` - a native HTML event object 
- `dropPosition: string` - defines the position of the dragged item dropping relative to the target item: "top" | "bottom" | "in" (the "in" value is used only for the TreeGrid mode)


@returns:
Return `false` to block the default action; otherwise, `true`.

@example:
grid.events.on("beforeRowDrop", (data, event, dropPosition) => {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v7.0

[comment]: # (@relatedapi: grid/api/grid_afterrowdrag_event.md grid/api/grid_afterrowdrop_event.md grid/api/grid_beforerowdrag_event.md grid/api/grid_canrowdrop_event.md grid/api/grid_cancelrowdrop_event.md grid/api/grid_dragrowin_event.md grid/api/grid_dragrowout_event.md grid/api/grid_dragrowstart_event.md grid/api/grid_dragitem_config.md)

[comment]: # (@related: grid/configuration.md#drag-n-drop-between-grids)
