---
sidebar_label: beforeRowDrop
title: JavaScript TreeGrid - beforeRowDrop Event 
description: You can explore the beforeRowDrop event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeRowDrop

@short: fires before the user has finished dragging and released the mouse button over a target row

@signature: {'beforeRowDrop: (data: object, events: MouseEvent) => void | boolean;'}

@params:
- `data: object` - data object. It contains the following parameters:
    - `start: string | number` - the id of a row, from which the dragging process has started
    - `source: array` - an array with ids of dragged rows
    - `target: string | number` - the id of a potential target row
- `events: MouseEvent` - a native HTML event object
- `events: MouseEvent` - a native HTML event object

@returns:
Return `false` to block the default action; otherwise, `true`.

@example:
treegrid.events.on("beforeRowDrop", function(data, events){
    // your logic here
    return false;
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v7.0

[comment]: # (@relatedapi: treegrid/api/treegrid_dragmode_config.md treegrid/api/treegrid_afterrowdrag_event.md treegrid/api/treegrid_afterrowdrop_event.md treegrid/api/treegrid_beforerowdrag_event.md treegrid/api/treegrid_canrowdrop_event.md treegrid/api/treegrid_cancelrowdrop_event.md treegrid/api/treegrid_dragrowin_event.md treegrid/api/treegrid_dragrowout_event.md treegrid/api/treegrid_dragrowstart_event.md)

[comment]: # (@related: treegrid/configuration.md#drag-n-drop-between-grids)
