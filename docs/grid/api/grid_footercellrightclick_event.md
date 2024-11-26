---
sidebar_label: footerCellRightClick
title: JavaScript Grid - footerCellRightClick Event 
description: You can explore the footerCellRightClick event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerCellRightClick

@short: fires on right click on a grid footer cell

@signature: {'[GridEvents.footerCellRightClick]: (cell: IFooter, column: ICol, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `cell: IFooter` - an object with a footer cell configuration
- `column: ICol` - an object with a column configuration
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("footerCellRightClick", (cell, column, event) => {
    // your logic here
});

@descr:
