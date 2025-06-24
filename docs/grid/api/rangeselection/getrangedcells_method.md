---
sidebar_label: getRangedCells()
title: JavaScript Grid - getRangedCells Method 
description: You can explore the getRangedCells method of Grid range selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getRangedCells()

@short: returns an array of cells within the current range

### Usage

~~~jsx
getRangedCells(): { row: object; column: object; }[];
~~~

@returns:
- an array of objects where:
<table>
    <tbody>
        <tr>
            <td><b>row</b></td>
            <td>(<i>object</i>) the row object</td>
        </tr>
        <tr>
            <td><b>column</b></td>
            <td>(<i>object</i>) the column object</td>
        </tr>
    </tbody>
</table>

@example:
// this example shows retrieving of the range of selected cells
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

grid.range.setRange({ xStart: "a", yStart: "1", xEnd: "b", yEnd: "1" });
console.log(grid.range.getRangedCells()); // -> [{ row: { id: "1", ... }, column: { id: "a", ... }}, ...]

@descr:
**Related article**: [Work with Range Selection object](grid/usage_rangeselection.md)

**Related API**: [`setRange()`](grid/api/rangeselection/setrange_method.md)

@changelog:
added in v9.2
