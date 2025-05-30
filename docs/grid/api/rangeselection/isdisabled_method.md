---
sidebar_label: isDisabled()
title: JavaScript Grid - isDisabled Method 
description: You can explore the isDisabled method of Grid range selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# isDisabled()

@short: returns the module's current state

### Usage

~~~jsx
isDisabled(): boolean;
~~~

@returns:
`true` if the module is disabled, `false` if the module is enabled

@example:
// this example shows checking the module's activity status
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

grid.range.disable();
console.log(grid.range.isDisabled()); // -> true
grid.range.enable();
console.log(grid.range.isDisabled()); // -> false

@descr:

**Related article**: [Work with Range Selection object](grid/usage_rangeselection.md)

**Related API**: [`enable()`](grid/api/rangeselection/enable_method.md), [`disable()`](grid/api/rangeselection/disable_method.md)

@changelog:
added in v9.2