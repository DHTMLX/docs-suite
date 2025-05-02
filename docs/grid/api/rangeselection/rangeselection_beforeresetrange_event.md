---
sidebar_label: beforeResetRange
title: JavaScript Grid - beforeResetRange Event 
description: You can explore the beforeResetRange event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeResetRange

@short: fires before resetting the range

### Usage

~~~jsx
beforeResetRange: (
    range: {
        xStart: string | number;
        xEnd: string | number;
        yStart: string | number;
        yEnd: string | number;
    }
) => boolean | void;
~~~

@params:
The callback of the event is called with the following parameters:

- `range: object` - the range object:
	- `xStart?: string | number` - the starting column id
	- `xEnd?: string | number` - the ending column id
	- `yStart?: string | number` - the starting row id
	- `yEnd?: string | number` - the ending row id

@returns:
Return `false` to prevent resetting of the range; otherwise, `true`.

@example:
const grid = new dhx.Grid("grid_container", {
    // other configuration
    rangeSelection: true
});

grid.range.events.on("beforeResetRange", (range) => {
    console.log("Resetting the range:", range);
    return false; // cancels resetting of the range
});

grid.range.setRange({ xStart: "a", yStart: "1" });
grid.range.resetRange(); // resetting of the range is canceled

@descr:

**Related article**: [Work with Range Selection object](grid/usage_range_selection.md)

**Related API**: [`setRange()`](grid/api/rangeselection/rangeselection_setrange_method.md),
[`resetRange()`](grid/api/rangeselection/rangeselection_resetrange_method.md),
[`afterResetRange`](grid/api/rangeselection/rangeselection_afterresetrange_event.md)

@changelog:
added in v9.2