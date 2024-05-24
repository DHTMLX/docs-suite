---
sidebar_label: cellMouseOver
title: JavaScript TreeGrid - cellMouseOver Event 
description: You can explore the cellMouseOver event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# cellMouseOver

@short: fires on moving the mouse pointer over a grid cell

@signature: {'cellMouseOver: (row: object, column: object, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `row: object` - an object with a row configuration
- `column: object` - an object with a column configuration
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("cellMouseOver", (row, column, event) => {
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)
