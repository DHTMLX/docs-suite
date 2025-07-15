---
sidebar_label: enable()
title: JavaScript Grid - enable Method 
description: You can explore the enable method of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# enable()

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: enables the BlockSelection module and activates the capabilities of block selection in Grid

@signature: {'enable(): void;'}

@example:
// this example shows enabling the module after deactivation
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    blockSelection: { disabled: true } // disabled on initialization
});

grid.block.enable(); // activating the module
console.log(grid.block.isDisabled()); // -> false

@descr:

**Related article**: [Work with BlockSelection module](grid/usage_blockselection.md)

**Related API**: [`disable()`](grid/api/blockselection/disable_method.md)

@changelog:
added in v9.2