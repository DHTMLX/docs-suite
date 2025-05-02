---
sidebar_label: beforeSetRange
title: JavaScript Grid - beforeSetRange Event 
description: You can explore the beforeSetRange event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeSetRange

@short: fires before setting a new range

### Usage

~~~jsx
beforeSetRange: (
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
Return `false` to prevent setting a range; otherwise, `true`.

@example:
const grid = new dhx.Grid("grid_container", {
    // other configuration
    rangeSelection: true
});

grid.range.events.on("beforeSetRange", (range) => {
    if (range.xStart === "b") {
        console.log("Range can't start with the column B");
        return false; // cancels setting a range
    }
});

grid.range.setRange({ xStart: "b", yStart: "1" }); // setting a new range is canceled

@descr:

**Related article**: [Work with Range Selection object](grid/usage_range_selection.md)

**Related API**: [`setRange()`](grid/api/rangeselection/rangeselection_setrange_method.md),
[`afterSetRange`](grid/api/rangeselection/rangeselection_aftersetrange_event.md)

@changelog:
added in v9.2