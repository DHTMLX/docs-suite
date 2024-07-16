---
sidebar_label: afterColumnDrag
title: JavaScript Grid - afterColumnDrag Event 
description: You can explore the afterColumnDrag event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterColumnDrag

{{pronote This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.}}

@short: fires after dragging of a column is finished

@signature: {'afterColumnDrag: (data: object, events: MouseEvent) => void;'}

@params:

The callback of the event is called with the following parameters:

- `data: object` - data object. It contains the following properties:
    - `start: string | number` - the id of a column, from which the dragging process has started
    - `source: array` - an array with ids of dragged columns
    - `target: string | number` - the id of a potential target column
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("afterColumnDrag", (data, event) => {
    // your logic here
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi:)
[comment]: # ([](grid/api/grid_dragitem_config.md)
[comment]: # ([](grid/api/grid_aftercolumndrop_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrag_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancelcolumndrop_event.md)
[comment]: # ([](grid/api/grid_dragcolumnin_event.md)
[comment]: # ([](grid/api/grid_dragcolumnout_event.md)
[comment]: # ([](grid/api/grid_dragcolumnstart_event.md)

[comment]: # (@related: grid/configuration.md#drag-n-drop-inside-the-grid)
