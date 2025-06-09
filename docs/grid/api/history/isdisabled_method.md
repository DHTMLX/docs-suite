---
sidebar_label: isDisabled()
title: JavaScript Grid - isDisabled Method 
description: You can explore the isDisabled method of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# isDisabled()

@short: checks whether the module is disabled

@signature: {'isDisabled(): boolean;'}

@returns:
Returns `true` if the module is disabled.

@example:
// The example shows checking the module's state after disabling it
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "name", header: [{ text: "Name" }] },
        { id: "value", header: [{ text: "Value" }] },
    ],
    data: [
        { id: "1", name: "Item 1", value: 10 },
    ],
    history: true
});

grid.history.disable();
console.log(grid.history.isDisabled()); // -> true

grid.history.enable();
console.log(grid.history.isDisabled()); // -> false

@descr:

**Related article**: 

**Related API**: [`enable()`](grid/api/history/enable_method.md), [`disable()`](grid/api/history/disable_method.md)

@changelog:
added in v9.2