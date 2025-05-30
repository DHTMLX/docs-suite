---
sidebar_label: Work with BlockSelection module
title: JavaScript Grid - Work with BlockSelection module 
description: You can explore how to work with BlockSelection module of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with BlockSelection module

You can manage block selection within a grid via the API of the [`BlockSelection`](grid/configuration.md/#managing-block-selection-in-grid) module. It allows selecting ranges of cells using the mouse pointer, touch input, or keyboard navigation, visualizing the selection, and controlling behavior through various modes and handlers. It also supports an [event system](grid/api/api_overview.md/#blockselection-events) to track user actions, including keyboard and mouse combinations.

To initialize the `BlockSelection` module, use the [`blockSelection`](grid/api/grid_blockselection_config.md) property in the Grid configuration. Once the Grid is created, the module is accessible through the `grid.block` property.

## Enabling/disabling BlockSelection module

You can activate the block selection module via the [`enable()`](grid/api/blockselection/enable_method.md) method of the `block` object.

The following example shows how the module is enabled after deactivation on initialization:

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
    blockSelection: { disabled: true } // disabled on initialization
});

grid.block.enable(); // activating the module
console.log(grid.block.isDisabled()); // -> false
~~~

To disable the block selection in Grid, use the [`disable()`](grid/api/blockselection/disable_method.md) method of the `block` object.

The example below shows disabling of the `BlockSelection` module:

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
    blockSelection: true
});

grid.block.disable();
console.log(grid.block.isDisabled()); // true
~~~

## Checking BlockSelection module state

You can check whether the `BlockSelection` module is disabled, using the [`isDisabled()`](grid/api/blockselection/isdisabled_method.md) method of the `block` object. It returns `true`, if the module is disabled and `false`, if it is enabled.

The following example shows checking of the module's activity status:

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
    blockSelection: true
});

console.log(grid.block.isDisabled()); // false
grid.block.disable();
console.log(grid.block.isDisabled()); // true
~~~

## User-interface features 

### Cell selection

- The user selects a range by dragging the mouse from the initial cell to the end cell. For example, dragging from **A1** to **B3** creates the range **A1:B3**, which is highlighted.
- The `Shift + click` combination allows extending the range from the current initial cell to the clicked cell.
- The cell selection behavior depends on the applied mode: 
    - the *"range"* mode uses the **Range API**
    - the *manual* mode requires specifying a custom logic via the [events](grid/api/api_overview.md/#blockselection-events)

### Keyboard navigation

- The module supports keyboard navigation for selecting and managing ranges, similar to keyboard navigation used in Google Spreadsheets:
	- **Arrows** (`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`): moves the focus to the adjacent cell, setting the initial selection cell if no selection is active.
	- **Shift + Arrows**: extends the selected range from the current initial cell in the direction of the pressed arrow.
	- **Ctrl + Arrows**: extends the selected range to the last cell in the direction of the pressed arrow.
- Keyboard and mouse combinations:
	- **Shift + click**: sets the end cell of the range, extending the selection from the current initial cell.
- Keyboard navigation works in both the "range" and manual modes. In the manual mode, applying the selection (e.g., after Enter) requires handling via the events, such as [beforeBlockSelectionApply](grid/api/blockselection/beforeblockselectionapply_event.md) and [afterBlockSelectionApply](grid/api/blockselection/afterblockselectionapply_event.md).

### Selection handle

- If enabled (via [`blockSelection.handle`](grid/api/grid_blockselection_config.md/#parameters)), the handle appears in the bottom-right corner of the range.
- The default behavior (when the `handler` property isn't specified in the `handle` object) is the following:
	- In the *`range`* mode:
		- copies the value of the first cell of the selected range (or the entire range if selected) to new cells. For example, selecting **A1** (the value is "x") and dragging to **A3** fills **A2**, **A3** with "x".
        - if the range **A1:B1** (the values are "x" and "y", correspondingly) is selected, dragging to **D1** copies "x" to **C1** and "y" to **D1**.
- A custom handler can be specified to modify the behavior (e.g., adding suffixes or other rules).
- In the *manual* mode, the handle and `handler` are ignored, and the built-in filling does not work.

## Interaction with other modules

The `BlockSelection` API interacts with other grid modules depending on the applied mode.

#### Range mode

- The `BlockSelection` module uses the [`RangeSelection` API](grid/api/api_overview.md/#rangeselection-api) to manage continuous rectangular ranges.
- The handle automatically fills data in the new range.
- The selected range will be reset during data grouping or ungrouping.
- The range will be reinstalled to a new one when moving columns or rows.

#### Manual mode

- The `BlockSelection` module does not use the `RangeSelection` API. The developer implements logic via the events such as [`blockSelectionValidate`](grid/api/blockselection/blockselectionvalidate_event.md), [`afterBlockSelectionApply`](grid/api/blockselection/afterblockselectionapply_event.md).
- The handle and built-in filling are unavailable.

### Usage examples

#### Restricting selection in the Range mode

This example shows how to control the start of a block selection and programmatically set a range using the [`RangeSelection` API](grid/api/api_overview.md/#rangeselection-api).

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }], minWidth: 150 },
        { id: "b", header: [{ text: "B" }], minWidth: 150 },
        { id: "c", header: [{ text: "C" }], minWidth: 150 },
        { id: "d", header: [{ text: "D" }], minWidth: 150 },
        { id: "e", header: [{ text: "E" }], minWidth: 150 },
        { id: "f", header: [{ text: "F" }], minWidth: 150 },
    ],
    data,
    autoWidth: true,
    blockSelection: {
        mode: "range", // setting the "range" mode
        handle: { allowAxis: "xy" },
    },
});

// controlling the block selection start via the event
grid.block.events.on("blockSelectionValidate", (cell, handle, event) => {
    if (cell.column.id === "a") {
        console.log("Selection cannot start from column A");
        return false;
    }
});

// setting a range via the setRange() method of the Range API
grid.range.setRange({ xStart: "b", xEnd: "d", yStart: "4", yEnd: "8" });
~~~

**Related sample:** [Grid. BlockSelection in the "range" mode](https://snippet.dhtmlx.com/85pb04cg)

#### Setting custom logic in the manual mode

This example demonstrates the manual mode, providing full control and allowing the use of events for custom logic, such as styling.

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }], minWidth: 150 },
        { id: "b", header: [{ text: "B" }], minWidth: 150 },
        { id: "c", header: [{ text: "C" }], minWidth: 150 },
        { id: "d", header: [{ text: "D" }], minWidth: 150 },
        { id: "e", header: [{ text: "E" }], minWidth: 150 },
        { id: "f", header: [{ text: "F" }], minWidth: 150 },
    ],
    data,
    autoWidth: true,
    blockSelection: { 
        mode: "manual", // setting the manual mode
        handle: false 
    },
    rangeSelection: true,
});

// using an event for applying custom styling to a range of cells
grid.block.events.on("afterBlockSelectionApply", (startCell, endCell) => {
    if (
        startCell.column.id === endCell.column.id &&
        startCell.row.id === endCell.row.id
    ) {
        return;
    }
    if (grid.range.getRange) {
        grid.range.getRangedCells().forEach(cell => {
            grid.removeCellCss(cell.row.id, cell.column.id, "custom-selected-cell");
        });
    }

    grid.range.setRange({
        xStart: startCell.column.id,
        xEnd: endCell.column.id,
        yStart: startCell.row.id,
        yEnd: endCell.row.id,
    });

    grid.range.getRangedCells().forEach(cell => {
        grid.addCellCss(cell.row.id, cell.column.id, "custom-selected-cell");
    });
});
~~~

**Related sample:** [Grid. BlockSelection in the "manual" mode](https://snippet.dhtmlx.com/jgjllbc7)

#### Setting a custom handler for the handle

This example shows how to override the handle behavior by adding a custom logic, such as modifying values based on the drag direction.

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }], minWidth: 150 },
        { id: "b", header: [{ text: "B" }], minWidth: 150 },
        { id: "c", header: [{ text: "C" }], minWidth: 150 },
        { id: "d", header: [{ text: "D" }], minWidth: 150 },
        { id: "e", header: [{ text: "E" }], minWidth: 150 },
        { id: "f", header: [{ text: "F" }], minWidth: 150 },
    ],
    data,
    autoWidth: true,
    blockSelection: {
        mode: "range",
        handle: {
            handler: ({ array, startCell, grid, cell, index }) => {
                if (array.length <= 1) {
                    return;
                }
                const cellValue = startCell.row[startCell.column.id]?.replace("-copied", "");
                // copied cells will have the "-copied" suffix
                const value = cellValue + (index ? "-copied" : "");
                // setting the silent mode for all cells except for the last cell
                const silent = index < array.length - 1
                // updating the selected items
                grid.data.update(cell.row.id, {
                    [cell.column.id]: value
                }, silent);
            }
        }
    },
});
~~~

**Related sample:** [Grid. BlockSelection with handle configuration](https://snippet.dhtmlx.com/8gx20g1d)

#### Selection styling

This example demonstrates how to customize the appearance of the selected range and of the handle.

~~~html
<script>
    const grid = new dhx.Grid("grid_container", {
        columns: [
            { id: "a", header: [{ text: "A" }], minWidth: 150 },
            { id: "b", header: [{ text: "B" }], minWidth: 150 },
            { id: "c", header: [{ text: "C" }], minWidth: 150 },
            { id: "d", header: [{ text: "D" }], minWidth: 150 },
            { id: "e", header: [{ text: "E" }], minWidth: 150 },
            { id: "f", header: [{ text: "F" }], minWidth: 150 },
        ],
        data,
        autoWidth: true,
        blockSelection: { mode: "range" },
    });
</script>

<style>
    /* styling the appearance of the selected range */
    .dhx_grid_block-selection-area,
    .dhx_grid_block-selection-start-cell{
        border: var(--dhx-border-width) solid var(--dhx-color-secondary);
        background-color: var(--dhx-color-secondary-light-hover);
    }

    /* styling the appearance of the handle */
    .dhx_grid_block-selection-handle {
        border: 2px solid var(--dhx-color-secondary);
        background-color: var(--dhx-color-secondary);
    }
    .dhx_grid_block-selection-handle-area {
        border-color: var(--dhx-color-danger);
    }
</style>
~~~

**Related sample:** [Grid. BlockSelection area styling](https://snippet.dhtmlx.com/ptc0jfww)