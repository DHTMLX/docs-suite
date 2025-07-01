---
sidebar_label: beforeSetRange
title: JavaScript Grid - beforeSetRange Event 
description: You can explore the beforeSetRange event of Grid range selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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

<table>
    <tbody>
        <tr>
            <td><b>range</b></td>
            <td>(<i>object</i>) an object with the range coordinates that contains the following options:<ul><li><b>`xStart`</b> - (<i>string | number</i>) the starting column id</li><li><b>`xEnd`</b> - (<i>string | number</i>) the ending column id</li><li><b>`yStart`</b> - (<i>string | number</i>) the starting row id</li><li><b>`yEnd`</b> - (<i>string | number</i>) the ending row id</li></ul></td>
        </tr>
    </tbody>
</table>

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

**Related article**: [Work with Range Selection object](grid/usage_rangeselection.md)

**Related API**: [`setRange()`](grid/api/rangeselection/setrange_method.md),
[`afterSetRange`](grid/api/rangeselection/aftersetrange_event.md)

**Related sample**: [Grid. BlockSelection in the "range" mode. Selection with restricted columns](https://snippet.dhtmlx.com/42fp5qvt)

@changelog:
added in v9.2