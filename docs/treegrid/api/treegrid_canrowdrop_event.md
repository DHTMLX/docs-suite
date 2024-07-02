---
sidebar_label: canRowDrop
title: JavaScript TreeGrid - canRowDrop Event 
description: You can explore the canRowDrop event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# canRowDrop

@short: fires when a dragged row is placed over a target row

@signature: {'canRowDrop: (data: object, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `data: object` - data object. It contains the following properties:
    - `start: string | number` - the id of a row, from which the dragging process has started
    - `source: array` - an array with ids of dragged rows
    - `target: string | number` - the id of a potential target row
- `event: MouseEvent` - a native HTML event object

@example:
treegrid.events.on("canRowDrop", (data, event) => {
  // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v7.0

[comment]: # (@relatedapi: treegrid/api/treegrid_dragmode_config.md treegrid/api/treegrid_afterrowdrag_event.md treegrid/api/treegrid_afterrowdrop_event.md treegrid/api/treegrid_beforerowdrag_event.md treegrid/api/treegrid_beforerowdrop_event.md treegrid/api/treegrid_cancelrowdrop_event.md treegrid/api/treegrid_dragrowin_event.md treegrid/api/treegrid_dragrowout_event.md treegrid/api/treegrid_dragrowstart_event.md)

[comment]: # (@related: treegrid/configuration.md#drag-n-drop-between-grids)
