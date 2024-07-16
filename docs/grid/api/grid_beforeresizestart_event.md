---
sidebar_label: beforeResizeStart
title: JavaScript Grid - beforeResizeStart Event 
description: You can explore the beforeResizeStart event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeResizeStart

@short: fires before resizing of a column has started

@signature: {'beforeResizeStart: (column: object, event: MouseEvent) => boolean | void;'}

@params:
The callback of the event is called with the following parameters:
- `column: object` - an object with a column configuration
- `event: MouseEvent` - a native HTML event object

@returns:
Return `false` to block resizing of a column; otherwise, `true`.

@example:
grid.events.on("beforeResizeStart", (column, event) => {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog:
added in v6.2
