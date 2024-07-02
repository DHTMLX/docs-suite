---
sidebar_label: cellDblClick
title: JavaScript TreeGrid - cellDblClick Event 
description: You can explore the cellDblClick event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# cellDblClick

@short: fires on double-click on a grid cell

@signature: {'cellDblClick: (row: object, column: object, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `row: object` - an object with a row configuration
- `column: object` - an object with a column configuration
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("cellDblClick", (row, column, event) => {
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)
