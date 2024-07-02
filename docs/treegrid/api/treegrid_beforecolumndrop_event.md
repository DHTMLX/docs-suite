---
sidebar_label: beforeColumnDrop
title: JavaScript TreeGrid - beforeColumnDrop Event 
description: You can explore the beforeColumnDrop event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeColumnDrop

@short: fires before the user has finished dragging and released the mouse button over a target column

@signature: {'beforeColumnDrop: (data: object, event: MouseEvent) => void | boolean;'}

@params:
The callback of the event is called with the following parameters:

- `data: object` - data object. It contains the following properties:
    - `start: string | number` - the id of a column, from which the dragging process has started
    - `source: array` - an array with ids of dragged columns
    - `target: string | number` - the id of a potential target column
- `event: MouseEvent` - a native HTML event object

@returns:
Return `false` to block the default action; otherwise, `true`.

@example:
treegrid.events.on("beforeColumnDrop", (data, event) => {
    // your logic here
    return false;
});

@descr:

@changelog:

- Before v7.0, the event took two parameters - **sourceId** and **targetId**. 
- In v7.0, the parameters were replaced with new ones: **data** and **event**.
- The event was added in v6.5

[comment]: # (@relatedapi: treegrid/api/treegrid_dragitem_config.md treegrid/api/treegrid_aftercolumndrag_event.md treegrid/api/treegrid_aftercolumndrop_event.md treegrid/api/treegrid_beforecolumndrag_event.md treegrid/api/treegrid_cancolumndrop_event.md treegrid/api/treegrid_cancelcolumndrop_event.md treegrid/api/treegrid_dragcolumnin_event.md treegrid/api/treegrid_dragcolumnout_event.md treegrid/api/treegrid_dragcolumnstart_event.md)

[comment]: # (@related: treegrid/configuration.md#drag-n-drop-inside-the-grid)
