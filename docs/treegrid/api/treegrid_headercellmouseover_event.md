---
sidebar_label: headerCellMouseOver
title: JavaScript TreeGrid - headerCellMouseOver Event 
description: You can explore the headerCellMouseOver event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerCellMouseOver

@short: fires on moving the mouse pointer over a grid header cell

@signature: {'headerCellMouseOver: (column: object, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `column: object` - an object with a column configuration
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("headerCellMouseOver", (column, event) => {
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)
