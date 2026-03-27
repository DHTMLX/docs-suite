---
sidebar_label: afterPaste
title: JavaScript Grid - afterPaste Event 
description: You can explore the afterPaste event of Grid clipboard in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterPaste

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: fires after successfully pasting data

### Usage

~~~jsx
afterPaste: () => void;
~~~


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

grid.clipboard.events.on("afterPaste", () => {
    console.log("Data pasted");
});

@descr:

**Related API**: [`beforePaste`](grid/api/clipboard/beforepaste_event.md)

**Related article**: [Work with Clipboard module](grid/usage_clipboard.md)

@changelog:
added in v9.2