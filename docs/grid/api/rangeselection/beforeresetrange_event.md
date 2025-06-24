---
sidebar_label: beforeResetRange
title: JavaScript Grid - beforeResetRange Event 
description: You can explore the beforeResetRange event of Grid range selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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

<table>
    <tbody>
        <tr>
            <td><b>range</b></td>
            <td>(<i>object</i>) an object with the range coordinates that contains the following options:<ul><li><b>`xStart`</b> - (<i>string | number</i>) the starting column id</li><li><b>`xEnd`</b> - (<i>string | number</i>) the ending column id</li><li><b>`yStart`</b> - (<i>string | number</i>) the starting row id</li><li><b>`yEnd`</b> - (<i>string | number</i>) the ending row id</li></ul></td>
        </tr>
    </tbody>
</table>

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

**Related article**: [Work with Range Selection object](grid/usage_rangeselection.md)

**Related API**: [`setRange()`](grid/api/rangeselection/setrange_method.md),
[`resetRange()`](grid/api/rangeselection/resetrange_method.md),
[`afterResetRange`](grid/api/rangeselection/afterresetrange_event.md)

@changelog:
added in v9.2