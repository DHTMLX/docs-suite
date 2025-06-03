---
sidebar_label: beforeCopy
title: JavaScript Grid - beforeCopy Event 
description: You can explore the beforeCopy event of Grid clipboard in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeCopy

@short: fires before copying or cutting data

### Usage

~~~jsx
beforeCopy: (isCut: boolean) => boolean | void;
~~~

@params:
The callback of the event is called with the following parameters:

- `isCut` - indicates whether the operation is a cut (`true`) or a copy (`false`)

@returns:
Return `false` to cancel the operation; otherwise, `true`

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

grid.clipboard.events.on("beforeCopy", (isCut) => {
    if (isCut) {
        console.log("Cutting canceled");
        return false;
    }
});

@descr:

**Related API**: [`afterCopy`](grid/api/clipboard/aftercopy_event.md)

@changelog:
added in v9.2