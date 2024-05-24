---
sidebar_label: headerCellRightClick
title: JavaScript TreeGrid - headerCellRightClick Event 
description: You can explore the headerCellRightClick event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerCellRightClick

@short: fires on right click on a grid header cell

@signature: {'headerCellRightClick: (column: object, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `column: object` - an object with a column configuration
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("headerCellRightClick", (column, event) => {
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)
