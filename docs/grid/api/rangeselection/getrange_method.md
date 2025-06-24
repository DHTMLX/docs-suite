---
sidebar_label: getRange()
title: JavaScript Grid - getRange Method 
description: You can explore the getRange method of Grid range selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getRange()

@short: returns the current selection range 

### Usage

~~~jsx
getRange():
    | null
    | {
        xStart?: string | number;
        xEnd?: string | number;
        yStart?: string | number;
        yEnd?: string | number;
    };
~~~

@returns:
- an object with the current selection range, where:
    - `xStart?: string | number` - the starting column id
    - `xEnd?: string | number` - the ending column id
    - `yStart?: string | number` - the starting row id
    - `yEnd?: string | number` - the ending row id
- `null` if no range is set

@example:
// this example shows retrieving of the current range
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

grid.range.setRange({ xStart: "a", yStart: "1", xEnd: "b", yEnd: "2" });
console.log(grid.range.getRange()); // -> { xStart: "a", xEnd: "b", yStart: "1", yEnd: "2" }

@descr:

**Related article**: [Work with Range Selection object](grid/usage_rangeselection.md)

**Related API**: [`setRange()`](grid/api/rangeselection/setrange_method.md)


@changelog:
added in v9.2
