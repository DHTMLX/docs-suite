---
sidebar_label: resetRange()
title: JavaScript Grid - resetRange Method 
description: You can explore the resetRange method of Grid range selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# resetRange()

@short: resets the current selection range

### Usage

~~~jsx
resetRange(): boolean;
~~~

@returns:
`true` - on success, `false` if the module is disabled, or if reset is canceled by an event.


@example:
// this example shows resetting of the current range 
const grid = new dhx.Grid("grid_container", {
    // other configuration
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    rangeSelection: true
});

grid.range.setRange({ xStart: "a", yStart: "1" });
grid.range.resetRange();
console.log(grid.range.getRange()); // -> null

@descr:

**Related article**: [Work with Range Selection object](grid/usage_rangeselection.md)

**Related API**: [`getRange()`](grid/api/rangeselection/getrange_method.md), [`setRange()`](grid/api/rangeselection/setrange_method.md)

@changelog:
added in v9.2