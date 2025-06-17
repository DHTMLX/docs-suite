---
sidebar_label: setRange()
title: JavaScript Grid - setRange Method 
description: You can explore the setRange method of Grid range selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setRange()

@short: sets the selection range

### Usage

~~~jsx
setRange(
    range: {
        xStart?: string | number;
        xEnd?: string | number;
        yStart?: string | number;
        yEnd?: string | number;
    },
    join?: boolean
): boolean;
~~~

@params:
<table>
    <tbody>
        <tr>
            <td><b>range</b></td>
            <td>(<i>object</i>) an object with the range coordinates that contains the following options:<ul><li><b>`xStart`</b> - (<i>string | number</i>) the starting column id</li><li><b>`xEnd`</b> - (<i>string | number</i>) the ending column id</li><li><b>`yStart`</b> - (<i>string | number</i>) the starting row id</li><li><b>`yEnd`</b> - (<i>string | number</i>) the ending row id</li></ul></td>
        </tr>
        <tr>
            <td><b>join</b></td>
            <td>(<i>boolean</i>) defines whether a new range is merged with the current one:
            <ul><li>if `join: true` is set, the method merges the new range with the current one. In this case, you can specify just the ending ids of the range, while the starting ids are optional</li><li>if the `join: false` setting is specified, the method resets the previous range</li></ul></td>
        </tr>
    </tbody>
</table>

:::note
If not all coordinates are provided, the missing ones are automatically filled (e.g., the last visible column for `xEnd`). The starting id for at least one coordinate is required.
:::

@returns:
`true` - on success, `false` - on error, event cancellation, or if the module is disabled.

@descr:
### Example

~~~jsx
// this example shows setting of a range with omitted ending coordinates
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

grid.range.setRange({ xStart: "a", yStart: "1" }); // sets range from "a1" to the end
console.log(grid.range.getRange()); // -> { xStart: "a", xEnd: "b", yStart: "1", yEnd: "2" }
~~~

~~~jsx
// this example demonstrates merging of a range
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
grid.range.setRange({ xEnd: "b", yEnd: "2" }, true); // merges with the current range
console.log(grid.range.getRange()); // -> { xStart: "a", xEnd: "b", yStart: "1", yEnd: "2" }
~~~

**Related article**: [Work with Range Selection object](grid/usage_rangeselection.md)

**Related API**: [`getRange()`](grid/api/rangeselection/getrange_method.md),
[`resetRange()`](grid/api/rangeselection/resetrange_method.md)

**Related sample**: [Grid. BlockSelection in the "range" mode. Inventory selection with restricted columns](https://snippet.dhtmlx.com/42fp5qvt)

@changelog:
added in v9.2