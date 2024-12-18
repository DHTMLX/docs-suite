---
sidebar_label: headerCellMouseOver
title: JavaScript Grid - headerCellMouseOver Event 
description: You can explore the headerCellMouseOver event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerCellMouseOver

@short: fires on moving the mouse pointer over a grid header cell

@signature: {'[GridEvents.headerCellMouseOver]: (cell: IHeader, column: ICol, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `cell: IHeader` - an object with a header cell configuration
- `column: ICol` - an object with a column configuration
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("headerCellMouseOver", (cell, column, event) => {
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
