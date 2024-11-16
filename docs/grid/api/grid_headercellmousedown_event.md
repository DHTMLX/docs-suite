---
sidebar_label: headerCellMouseDown
title: JavaScript Grid - headerCellMouseDown Event 
description: You can explore the headerCellMouseDown event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerCellMouseDown

@short: fires before releasing the left mouse button when clicking on a grid header cell

@signature: {'headerCellMouseDown: (column: object, event: MouseEvent & TouchEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `column: object` - an object with a column configuration
- `event: MouseEvent & TouchEvent` - a native HTML event object 

@example:
grid.events.on("headerCellMouseDown", (column, event) => {
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
