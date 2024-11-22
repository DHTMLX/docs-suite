---
sidebar_label: headerCellRightClick
title: JavaScript Grid - headerCellRightClick Event 
description: You can explore the headerCellRightClick event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerCellRightClick

@short: fires on right click on a grid header cell

@signature: {'[GridEvents.headerCellRightClick]: (cell: IHeader, column: ICol, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `cell: IHeader` - an object with a header cell configuration
- `column: ICol` - an object with a column configuration
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("headerCellRightClick", (cell, column, event) => {
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
