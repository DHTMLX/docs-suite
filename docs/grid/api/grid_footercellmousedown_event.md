---
sidebar_label: footerCellMouseDown
title: JavaScript Grid - footerCellMouseDown Event 
description: You can explore the footerCellMouseDown event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerCellMouseDown

@short: fires before releasing the left mouse button when clicking on a grid footer cell

@signature: {'[GridEvents.footerCellMouseDown]: (cell: IFooter, column: ICol, event: MouseEvent & TouchEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `cell: IFooter` - an object with a footer cell configuration
- `column: ICol` - an object with a column configuration
- `event: MouseEvent & TouchEvent` - a native HTML event object

@example:
grid.events.on("footerCellMouseDown", (cell, column, event) => {
    // your logic here
});

@descr:
