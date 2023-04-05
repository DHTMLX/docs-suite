---
sidebar_label: beforeColumnDrop
title: JavaScript Grid - beforeColumnDrop Event 
description: You can explore the beforeColumnDrop event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeColumnDrop

{{pronote This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.}}

@short: fires before the user has finished dragging and released the mouse button over a target column

@signature: {'beforeColumnDrop: (data: object, events: MouseEvent) => void | boolean;'}

@params:
- `data: object` - data object. It contains the following parameters:
	- `start: string | number` - the id of a column, from which the dragging process has started
	- `source: array` - an array with ids of dragged columns
	- `target: string | number` - the id of a potential target column
- `events: MouseEvent` - a native HTML event object

@returns:
Return `false` to block the default action; otherwise, `true`.

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

grid.events.on("beforeColumnDrop", ({ target }) => target !== "population");

@descr:

@changelog:

- Before v7.0, the event took two parameters - **sourceId** and **targetId**. 
- In v7.0, the parameters were replaced with new ones: **data** and **e**.
- The event was added in v6.5

[comment]: # (@relatedapi:)
[comment]: # ([](grid/api/grid_dragitem_config.md)
[comment]: # ([](grid/api/grid_aftercolumndrag_event.md)
[comment]: # ([](grid/api/grid_aftercolumndrop_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrag_event.md)
[comment]: # ([](grid/api/grid_cancolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancelcolumndrop_event.md)
[comment]: # ([](grid/api/grid_dragcolumnin_event.md)
[comment]: # ([](grid/api/grid_dragcolumnout_event.md)
[comment]: # ([](grid/api/grid_dragcolumnstart_event.md)

[comment]: # (@related: grid/configuration.md#drag-n-drop-inside-the-grid)
