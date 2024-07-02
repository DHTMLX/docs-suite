---
sidebar_label: afterResizeEnd
title: JavaScript Grid - afterResizeEnd Event 
description: You can explore the afterResizeEnd event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterResizeEnd

@short: fires after resizing of a column is ended

@signature: {'afterResizeEnd: (column: object, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `column: object` - an object with a column configuration
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("afterResizeEnd", (column, event) => {
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog:
added in v6.2
