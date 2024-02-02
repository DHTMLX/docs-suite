---
sidebar_label: beforeColumnDrag
title: JavaScript TreeGrid - beforeColumnDrag Event 
description: You can explore the beforeColumnDrag event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeColumnDrag

@short: fires before dragging of a column has started

@signature: {'beforeColumnDrag: (data: object, events: MouseEvent) => void | boolean;'}

@params:
- `data: object` - data object. It contains the following parameters:
    - `start: string | number` - the id of a column, from which the dragging process has started
    - `source: array` - an array with ids of dragged columns
    - `target: string | number` - the id of a potential target column
- `events: MouseEvent` - a native HTML event object

@returns:
Return `false` to prevent dragging of a column; otherwise, `true`.

@example:
treegrid.events.on("beforeColumnDrag", function(data, events){
    // your logic here
    return false;
});

@descr:

@changelog:

- Before v7.0, the event took one parameter - the column id. 
- Starting from v7.0, the event takes two parameters: **data** and **e**.
- The event was added in v6.5

[comment]: # (@relatedapi: treegrid/api/treegrid_dragitem_config.md treegrid/api/treegrid_aftercolumndrag_event.md treegrid/api/treegrid_aftercolumndrop_event.md treegrid/api/treegrid_beforecolumndrop_event.md treegrid/api/treegrid_cancolumndrop_event.md treegrid/api/treegrid_cancelcolumndrop_event.md treegrid/api/treegrid_dragcolumnin_event.md treegrid/api/treegrid_dragcolumnout_event.md treegrid/api/treegrid_dragcolumnstart_event.md)

[comment]: # (@related: treegrid/configuration.md#drag-n-drop-inside-the-grid)
