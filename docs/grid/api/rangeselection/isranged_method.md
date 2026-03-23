---
sidebar_label: isRanged()
title: JavaScript Grid - isRanged Method 
description: You can explore the isRanged method of Grid range selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# isRanged()

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: checks whether a cell is within the current range

### Usage

~~~jsx
isRanged(cell: { x: string | number; y: string | number }): boolean;
~~~

@params:
<table>
    <tbody>
        <tr>
            <td><b>cell</b></td>
            <td>(<i>object</i>) - an object with the `x` and `y` coordinates of a cell, where:<ul><li>`x` - (*string | number*) - the column id</li><li>`y` - (*string | number*) - the row id</li></ul></td>
        </tr>
    </tbody>
</table>

:::note
You can specify just `x` or `y` to check a column or a row, correspondingly.
:::

@returns:
`true`, if the cell is within the current range, `false` otherwise

@example:
// this example shows checking whether an ID belongs to the selected range of cells
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
console.log(grid.range.isRanged({ x: "a", y: "1" })); // -> true
console.log(grid.range.isRanged({ x: "a" })); // -> true
console.log(grid.range.isRanged({ y: "3" })); // -> false

@descr:

**Related article**: [Work with Range Selection object](grid/usage_rangeselection.md)

**Related API**: [`setRange()`](grid/api/rangeselection/setrange_method.md)

@changelog:
added in v9.2
