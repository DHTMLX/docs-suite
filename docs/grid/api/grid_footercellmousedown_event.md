---
sidebar_label: footerCellMouseDown
title: JavaScript Grid - footerCellMouseDown Event 
description: You can explore the footerCellMouseDown event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerCellMouseDown

@short: fires on moving the mouse pointer over a grid footer cell

@signature: {'footerCellMouseDown: (column: object, event: MouseEvent & TouchEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `column: object` - an object with a column configuration
- `event: MouseEvent & TouchEvent` - a native HTML event object

@example:
grid.events.on("footerCellMouseDown", (column, event) => {
    // your logic here
});

@descr:
