---
sidebar_label: copyError
title: JavaScript Grid - copyError Event 
description: You can explore the copyError event of Grid clipboard in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# copyError

@short: fires when an error occurs during copying or cutting (e.g., clipboard access is blocked)

### Usage

~~~jsx
copyError: (error: string) => void;
~~~

@params:
The callback of the event is called with the following parameters:

- `error` - an error message


@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
    ],
    clipboard: true
});

grid.clipboard.events.on("copyError", (error) => {
    console.log("Copy error:", error);
});

@descr:

**Related API**: [`pasteError`](grid/api/clipboard/pasteerror_event.md)

@changelog:
added in v9.2