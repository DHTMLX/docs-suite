---
sidebar_label: afterCopy
title: JavaScript Grid - afterCopy Event 
description: You can explore the afterCopy event of Grid clipboard in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterCopy

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: fires after successfully copying or cutting data

### Usage

~~~jsx
afterCopy: (isCut: boolean) => void;
~~~

@params:
The callback of the event is called with the following parameters:

- `isCut` - indicates whether the operation was a cut (`true`) or a copy (`false`)

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

grid.clipboard.events.on("afterCopy", (isCut) => {
    console.log(isCut ? "Data cut" : "Data copied");
});

@descr:

**Related API**: [`beforeCopy`](grid/api/clipboard/beforecopy_event.md)

**Related article**: [Work with Clipboard module](grid/usage_clipboard.md)

@changelog:
added in v9.2