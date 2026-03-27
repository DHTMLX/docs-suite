---
sidebar_label: disable()
title: JavaScript Grid - disable Method 
description: You can explore the disable method of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# disable()

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: disables the BlockSelection module and resets processing of block selection in Grid

@signature: {'disable(): void;'}

@example:
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

// disabling the block selection module
grid.block.disable();
console.log(grid.block.isDisabled()); // -> true

@descr:

**Related article**: [Work with BlockSelection module](grid/usage_blockselection.md)

**Related API**: [`enable()`](grid/api/blockselection/enable_method.md)

@changelog:
added in v9.2