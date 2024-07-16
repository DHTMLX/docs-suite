---
sidebar_label: setCell()
title: JavaScript Grid - setCell Method 
description: You can explore the setCell method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setCell()

@short: sets selection to specified cells

@signature: {'setCell(row?: object | string | number, column?: object | string | number, ctrlUp?: boolean, shiftUp?: boolean): void;'}

@params:
- `row: object | string | number` - an object with a cell to be selected or the id of a row
- `column: object | string | number` - the config of a column or its id
- `ctrlUp: boolean` - *true* - to select the desired rows or cells, otherwise - *false* (for multiselection mode)
- `shiftUp: boolean` - *true* - to select a range of rows or cells, otherwise - *false* (for multiselection mode)

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    selection:"cell",
    multiselection: false, 
    data: dataset
});

const row = grid.data.getItem(grid.data.getId(0));
const column = grid.getColumn("yearlyChange");
grid.selection.setCell(row, column);

@descr:

{{note For details about how to set selection to multiple cells/rows, see [Setting selection to cells](grid/usage_selection.md#setting-selection-to-cells).}}

**Related sample**: [Grid. Multiselection](https://snippet.dhtmlx.com/4nj0e9ye)

[comment]: # (@related: grid/usage_selection.md)

[comment]: # (@relatedapi: grid/api/selection/selection_enable_method.md grid/api/selection/selection_removecell_method.md)
