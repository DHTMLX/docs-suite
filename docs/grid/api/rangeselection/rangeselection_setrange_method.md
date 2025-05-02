---
sidebar_label: setRange()
title: JavaScript Grid - setRange Method 
description: You can explore the setRange method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
- `range: object` - defines the range to set:
	- `xStart?: string | number` - the starting column id
	- `xEnd?: string | number` - the ending column id
	- `yStart?: string | number` - the starting row id
	- `yEnd?: string | number` - the ending row id
- `join?: boolean` - defines whether a new range is merged with the current one:
    - if `join: true` is set, the method merges the new range with the current one. In this case, you can specify just the ending ids of the range, while the starting ids are optional
    - if the `join: false` setting is specified, the method resets the previous range 

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

**Related article**: [Work with Range Selection object](grid/usage_range_selection.md)

**Related API**: [`getRange()`](grid/api/rangeselection/rangeselection_getrange_method.md),
[`resetRange()`](grid/api/rangeselection/rangeselection_resetrange_method.md)


@changelog:
added in v9.2