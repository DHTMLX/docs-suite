---
sidebar_label: enable()
title: JavaScript Grid - enable Method 
description: You can explore the enable method of Grid range selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# enable()

@short: enables the RangeSelection module and activates the capabilities of range selection in Grid

### Usage

~~~jsx
enable(): void;
~~~

@example:
// this example shows enabling the module after deactivation
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
    rangeSelection: { disabled: true } // disabled on initialization
});

grid.range.enable(); // activating the module
grid.range.setRange({ xStart: "a", yStart: "1" }); // the range will be set

@descr:

**Related article**: [Work with Range Selection object](grid/usage_rangeselection.md)

**Related API**: [`disable()`](grid/api/rangeselection/disable_method.md), [`getRange()`](grid/api/rangeselection/getrange_method.md),
[`setRange()`](grid/api/rangeselection/setrange_method.md)

@changelog:
added in v9.2