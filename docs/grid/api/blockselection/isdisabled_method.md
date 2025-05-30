---
sidebar_label: isDisabled()
title: JavaScript Grid - isDisabled Method 
description: You can explore the isDisabled method of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    blockSelection: true
});

console.log(grid.block.isDisabled()); // -> false
grid.block.disable();
console.log(grid.block.isDisabled()); // -> true

@descr:

**Related article**: [Work with BlockSelection module](grid/usage_blockselection.md)

**Related API**: [`disable()`](grid/api/blockselection/disable_method.md), [`enable()`](grid/api/blockselection/enable_method.md)

@changelog:
added in v9.2