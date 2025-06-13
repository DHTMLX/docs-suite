---
sidebar_label: Work with RangeSelection module
title: JavaScript Grid - Work with RangeSelection module 
description: You can explore how to work with RangeSelection module of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with RangeSelection module

:::tip Pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

You can manage range selection within a grid via the API of the [`RangeSelection`](grid/configuration.md/#managing-range-selection-in-grid) module. It provides methods for setting and resetting a range of cells, getting information about the current range, and checking whether specific cells belong to the selected range. It also supports an [event system](grid/api/api_overview.md/#rangeselection-events) to track changes.

To initialize the `RangeSelection` module, use the [`rangeSelection`](grid/api/grid_rangeselection_config.md) property in the Grid configuration. Once the Grid is created, the module is accessible through the `grid.range` property.

## Enabling/disabling RangeSelection module

You can activate the range selection module via the [`enable()`](grid/api/rangeselection/enable_method.md) method of the `range` object.

The following example shows how the module is enabled after deactivation on initialization:

~~~jsx
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

To disable the range selection in Grid, use the [`disable()`](grid/api/rangeselection/disable_method.md) method of the `range` object:

The example below shows disabling of the `range` module:

~~~jsx
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

You can check whether the RangeSelection module is disabled, using the [`isDisabled()`](grid/api/rangeselection/isdisabled_method.md) method of the `range` object. It returns `true`, if the module is disabled and `false`, if it is enabled.

The following example shows checking of the module's activity status:

~~~jsx
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

If not all coordinates are provided, the missing ones are automatically filled (e.g., the last visible column for `xEnd`). The starting id for at least one coordinate is required. The method returns `true` - on success or `false` - on error, event cancellation, or if the module is disabled.

The following example shows setting of a range with omitted ending coordinates:

~~~jsx
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

The example below demonstrates merging of a new range with the current one:

~~~jsx
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

To make the process of selecting a range more flexible, you can apply the related events of the `range` object:

- [`afterSetRange`](grid/api/rangeselection/aftersetrange_event.md)
- [`beforeSetRange`](grid/api/rangeselection/beforesetrange_event.md)

## Resetting the range selection

You can reset the applied range selection using the [`resetRange()`](grid/api/rangeselection/resetrange_method.md) method of the `range` object. The method returns `true` - on success, `false`, if the module is disabled, or if reset is canceled by an event.

The following example shows resetting of the current range: 

~~~jsx
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

To make the process of unselecting a range more flexible, you can apply the related events of the `range` object:

- [`afterResetRange`](grid/api/rangeselection/afterresetrange_event.md)
- [`beforeResetRange`](grid/api/rangeselection/beforeresetrange_event.md)

## Getting the range selection

You can get the current selection range. For this, use the [`getRange()`](grid/api/rangeselection/getrange_method.md) method of the `range` object. It returns the object of selection range or `null` if no range is set.

The following example shows retrieving of the current range:

~~~jsx
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

- `xStart` - (*string | number*) the starting column id
- `xEnd` - (*string | number*) the ending column id
- `yStart` - (*string | number*) the starting row id
- `yEnd` - (*string | number*) the ending row id

### Getting an array of cells within the range

It is also possible to get an array of cells within the range selection by using the [`getRangedCells()`](grid/api/rangeselection/getrangedcells_method.md) method of the `range` object. It returns an array of objects where:

- `row` - (*object*) the row object
- `column` - (*object*) the column object

This example shows retrieving of the range of selected cells:

~~~jsx
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

- `cell` - (*object*) - an object with the `x` and `y` coordinates of a cell, where:
    - `x` - (*string | number*) - the column id
    - `y` - (*string | number*) - the row id

:::note
You can specify just `x` or `y` to check a column or a row, correspondingly.
:::

The method returns `true`, if the cell is within the current range and `false` if it isn't.

The example below shows checking whether an ID belongs to the selected range of cells:

~~~jsx
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