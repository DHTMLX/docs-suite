---
sidebar_label: afterResetRange
title: JavaScript Grid - afterResetRange Event 
description: You can explore the afterResetRange event of Grid range selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterResetRange

@short: fires after a range has been successfully reset

### Usage

~~~jsx
afterResetRange: (
    range: {
        xStart: string | number;
        xEnd: string | number;
        yStart: string | number;
        yEnd: string | number;
    }
) => void;
~~~

@params:
The callback of the event is called with the following parameters:

- `range: object` - the object of the reset range:
	- `xStart?: string | number` - the starting column id
	- `xEnd?: string | number` - the ending column id
	- `yStart?: string | number` - the starting row id
	- `yEnd?: string | number` - the ending row id

@example:
const grid = new dhx.Grid("grid_container", {
    // other configuration
    rangeSelection: true
});

grid.range.events.on("afterResetRange", (range) => {
    console.log("The range is reset, the previous range is:", range);
});

grid.range.setRange({ xStart: "a", yStart: "1" });
grid.range.resetRange(); // logs the previous range

@descr:

**Related article**: [Work with Range Selection object](grid/usage_rangeselection.md)

**Related API**: [`setRange()`](grid/api/rangeselection/setrange_method.md),
[`resetRange()`](grid/api/rangeselection/resetrange_method.md),
[`beforeResetRange`](grid/api/rangeselection/beforeresetrange_event.md)

@changelog:
added in v9.2