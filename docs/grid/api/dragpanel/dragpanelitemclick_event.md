---
sidebar_label: dragPanelItemClick
title: JavaScript Grid - dragPanelItemClick Event 
description: You can explore the dragPanelItemClick event of Grid drag panel in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragPanelItemClick

@short: triggered when the drag panel item is clicked

### Usage

~~~jsx
dragPanelItemClick: (id: string, event: MouseEvent | TouchEvent) => void;
~~~

@params:
The callback of the event is called with the following parameters:

- `id` - the ID of the row associated with the drag panel item
- `event` - a browser event: `MouseEvent` or `TouchEvent`

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    dragPanel: true
});

grid.events.on("dragPanelItemClick", (id, event) => {
    console.log(`Drag panel clicked for row ID: ${id}`);
});

@descr:

**Related article**: [Work with DragPanel module](grid/usage_dragpanel.md)

@changelog:
added in v9.2