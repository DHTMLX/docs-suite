---
sidebar_label: afterSetRange
title: JavaScript Grid - afterSetRange Event 
description: You can explore the afterSetRange event of Grid range selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterSetRange

@short: fires after a range has been successfully set

### Usage

~~~jsx
afterSetRange: (
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

<table>
    <tbody>
        <tr>
            <td><b>range</b></td>
            <td>(<i>object</i>) the object with the set range coordinates that contains the following options:<ul><li><b>`xStart`</b> - (<i>string | number</i>) the starting column id</li><li><b>`xEnd`</b> - (<i>string | number</i>) the ending column id</li><li><b>`yStart`</b> - (<i>string | number</i>) the starting row id</li><li><b>`yEnd`</b> - (<i>string | number</i>) the ending row id</li></ul></td>
        </tr>
    </tbody>
</table>

@example:
const grid = new dhx.Grid("grid_container", {
    // other configuration
    rangeSelection: true
});

grid.range.events.on("afterSetRange", (range) => {
    console.log("The range is set:", range);
});

grid.range.setRange({ xStart: "a", yStart: "1" }); // logs the range object

@descr:

**Related article**: [Work with Range Selection object](grid/usage_rangeselection.md)

**Related API**: [`setRange()`](grid/api/rangeselection/setrange_method.md),
[`beforeSetRange`](grid/api/rangeselection/beforesetrange_event.md)

@changelog:
added in v9.2