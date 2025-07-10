---
sidebar_label: beforeColumnDrag
title: JavaScript Grid - beforeColumnDrag Event 
description: You can explore the beforeColumnDrag event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeColumnDrag

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: fires before dragging of a column has started

@signature: {'beforeColumnDrag: (data: object, event: MouseEvent) => void | boolean;'}

@params:
The callback of the event is called with the following parameters:

- `data: object` - data object. It contains the following parameters:
    - `start: string | number` - the id of a column, from which the dragging process has started
    - `source: array` - an array with the ids of the dragged columns
    - `target: string | number` - the id of a potential target column
- `event: MouseEvent` - a native HTML event object

@returns:
Return `false` to prevent dragging a column; otherwise, `true`.

@example:
const grid = new dhx.Grid("grid", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }] },
        { width: 150, id: "population", header: [{ text: "Population" }] },
        { width: 150, id: "age", header: [{ text: "Med. Age" }], draggable: false },
        { width: 150, id: "density", header: [{ text: "Density (P/Km²)" }] },
    ],
    data: dataset,
    dragItem: "column",
});

grid.events.on("beforeColumnDrag", ({ start }) => start !== "density");

@descr:

@changelog:

- Before v7.0, the callback of the event took one parameter - the column id 
- Starting from v7.0, the callback of the event takes two parameters: **data** and **event**
- The event was added in v6.5

[comment]: # (@relatedapi:)
[comment]: # ([](grid/api/grid_dragitem_config.md)
[comment]: # ([](grid/api/grid_aftercolumndrag_event.md)
[comment]: # ([](grid/api/grid_aftercolumndrop_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancelcolumndrop_event.md)
[comment]: # ([](grid/api/grid_dragcolumnin_event.md)
[comment]: # ([](grid/api/grid_dragcolumnout_event.md)
[comment]: # ([](grid/api/grid_dragcolumnstart_event.md)

[comment]: # (@related: grid/configuration.md#drag-n-drop-inside-the-grid)
