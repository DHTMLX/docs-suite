---
sidebar_label: Work with RangeSelection module
title: JavaScript Grid - Work with RangeSelection module 
description: You can explore how to work with RangeSelection module of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with RangeSelection module

:::tip Pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

You can manage range selection within a grid with the API of the [`RangeSelection`](grid/configuration.md#managing-range-selection-in-grid) module. It lets you set and reset a range of cells, get information about the current range, and check whether specific cells belong to the selected range. It also supports an [event system](grid/api/api_overview.md#rangeselection-events) to track changes.

## Initializing the RangeSelection module

To initialize the `RangeSelection` module, use the [`rangeSelection`](grid/api/grid_rangeselection_config.md) property in the Grid configuration. After you create the Grid, you can access the module through the `grid.range` property.

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    rangeSelection: true // enables the RangeSelection module
});
~~~

The `rangeSelection` property can also be set as an *object* to enable the module and specify additional configuration options.
Learn how to configure the `RangeSelection` module in the [Configuration](grid/configuration.md#managing-range-selection-in-grid) guide.

## Enabling/disabling RangeSelection module

You can activate the `RangeSelection` module with the [`enable()`](grid/api/rangeselection/enable_method.md) method of the `range` object.
The following example shows how to enable the module after it was disabled on initialization:

~~~jsx {14}
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
    rangeSelection: { disabled: true } // disabled on initialization
});

grid.range.enable(); // activating the module
grid.range.setRange({ xStart: "a", yStart: "1" }); // the range will be set
~~~

To disable the range selection in Grid, use the [`disable()`](grid/api/rangeselection/disable_method.md) method of the `range` object.
The example below shows how to disable the module:

~~~jsx {15}
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
grid.range.disable(); // disabling the module
console.log(grid.range.getRange()); // -> null
grid.range.setRange({ xStart: "a", yStart: "1" }); // the range won't be set
~~~

## Checking RangeSelection module state

You can check whether the `RangeSelection` module is disabled with the [`isDisabled()`](grid/api/rangeselection/isdisabled_method.md) method of the `range` object. It returns `true` if the module is disabled and `false` if it is enabled. The following example shows how to check the module's state:

~~~jsx {15,17}
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

grid.range.disable();
console.log(grid.range.isDisabled()); // -> true
grid.range.enable();
console.log(grid.range.isDisabled()); // -> false
~~~

## Setting a range selection

You can set a range selection using the [`setRange()`](grid/api/rangeselection/setrange_method.md) method of the `range` object. The method takes the following parameters: 

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

If not all coordinates are provided, Grid fills the missing ones automatically (for example, the last visible column for `xEnd`). The starting id for at least one coordinate is required. The method returns `true` on success and `false` on error, on event cancellation, or if the module is disabled.

The following example shows how to set a range with omitted ending coordinates:

~~~jsx {14}
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

The example below demonstrates how to merge a new range with the current one:

~~~jsx {14,15}
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

To select a range more flexibly, you can apply the related events of the `range` object:

- [`afterSetRange`](grid/api/rangeselection/aftersetrange_event.md)
- [`beforeSetRange`](grid/api/rangeselection/beforesetrange_event.md)

**Related sample**: [Grid. BlockSelection in the "range" mode. Selection with restricted columns](https://snippet.dhtmlx.com/42fp5qvt)

## Resetting the range selection

You can reset the applied range selection using the [`resetRange()`](grid/api/rangeselection/resetrange_method.md) method of the `range` object. The method returns `true` on success and `false` if the module is disabled or if an event cancels the reset.

The following example shows how to reset the current range: 

~~~jsx {15}
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
grid.range.resetRange();
console.log(grid.range.getRange()); // -> null
~~~

To reset a range more flexibly, you can apply the related events of the `range` object:

- [`afterResetRange`](grid/api/rangeselection/afterresetrange_event.md)
- [`beforeResetRange`](grid/api/rangeselection/beforeresetrange_event.md)

## Getting the range selection

You can get the current selection range. For this, use the [`getRange()`](grid/api/rangeselection/getrange_method.md) method of the `range` object. It returns the selection range object, or `null` if no range is set. The following example shows how to get the current range:

~~~jsx {15}
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
console.log(grid.range.getRange()); // -> { xStart: "a", xEnd: "b", yStart: "1", yEnd: "2" }
~~~

The returned object with the current selection range contains the following properties:

<table>
    <tbody>
        <tr>
            <td><b>xStart</b></td>
            <td>(<i>string | number</i>) the starting column id</td>
        </tr>
        <tr>
            <td><b>xEnd</b></td>
            <td>(<i>string | number</i>) the ending column id</td>
        </tr>
        <tr>
            <td><b>yStart</b></td>
            <td>(<i>string | number</i>) the starting row id</td>
        </tr>
        <tr>
            <td><b>yEnd</b></td>
            <td>(<i>string | number</i>) the ending row id</td>
        </tr>
    </tbody>
</table>

### Getting an array of cells within the range

You can also get an array of cells within the range selection with the [`getRangedCells()`](grid/api/rangeselection/getrangedcells_method.md) method of the `range` object. It returns an array of objects where:

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

This example shows how to get the range of selected cells:

~~~jsx {15}
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
~~~

## Checking whether a cell is in the range 

You can check whether a cell is within the current range using the [`isRanged()`](grid/api/rangeselection/isranged_method.md) method of the `range` object. The method takes the following parameter: 

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

The method returns `true` if the cell is within the current range and `false` if it isn't.

The example below shows how to check whether an id belongs to the selected range of cells:

~~~jsx {15-17}
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
~~~