---
sidebar_label: footerCellDblClick
title: JavaScript Grid - footerCellDblClick Event 
description: You can explore the footerCellDblClick event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

#  footerCellDblClick

@short: fires on a double-click on a grid footer cell

@signature: {'footerCellDblClick: (column: object, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `column: object` - an object with a column configuration
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("footerCellDblClick", (column, event) => {
    // your logic here
});

@descr:
