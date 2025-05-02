---
sidebar_label: disable()
title: JavaScript Grid - disable Method 
description: You can explore the disable method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# disable()

@short: disables the Range Selection module and resets the current range

### Usage

~~~jsx
disable(): void;
~~~

@example:
// this example shows disabling of the module
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
grid.range.disable(); // disabling the module
console.log(grid.range.getRange()); // -> null
grid.range.setRange({ xStart: "a", yStart: "1" }); // the range won't be set

@descr:

**Related article**: [Work with Range Selection object](grid/usage_range_selection.md)

**Related API**: [`enable()`](grid/api/rangeselection/rangeselection_enable_method.md), [`getRange()`](grid/api/rangeselection/rangeselection_getrange_method.md),
[`setRange()`](grid/api/rangeselection/rangeselection_setrange_method.md)

@changelog:
added in v9.2