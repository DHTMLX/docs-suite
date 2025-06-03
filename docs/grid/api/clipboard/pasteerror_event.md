---
sidebar_label: pasteError
title: JavaScript Grid - pasteError Event 
description: You can explore the pasteError event of Grid clipboard in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# pasteError

@short: fires when an error occurs during pasting (e.g., clipboard is empty or data is invalid)

### Usage

~~~jsx
pasteError: (error: string) => void;
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

grid.clipboard.events.on("pasteError", (error) => {
    console.log("Paste error:", error);
});

@descr:

**Related API**: [`copyError`](grid/api/clipboard/copyerror_event.md)

@changelog:
added in v9.2