---
sidebar_label: beforePaste
title: JavaScript Grid - beforePaste Event 
description: You can explore the beforePaste event of Grid clipboard in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforePaste

@short: fires before pasting data from the clipboard

### Usage

~~~jsx
beforePaste: () => boolean | void;
~~~

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

grid.clipboard.events.on("beforePaste", () => {
    if (!grid.range.getRange()) {
        console.log("Paste canceled: no range specified");
        return false;
    }
});

@descr:

**Related API**: [`afterPaste`](grid/api/clipboard/afterpaste_event.md)

**Related article**: [Work with Clipboard module](grid/usage_clipboard.md)

@changelog:
added in v9.2