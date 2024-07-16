---
sidebar_label: cellRightClick
title: JavaScript Grid - cellRightClick Event 
description: You can explore the cellRightClick event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# cellRightClick

@short: fires on the right click on a grid cell

@signature: {'cellRightClick: (row: object, column: object, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:
- `row: object` - an object with a row configuration
- `column: object` - an object with a column configuration
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("cellRightClick", (row, column, event) => {
     // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
