---
sidebar_label: isSelectedCell()
title: JavaScript Grid - isSelectedCell Method 
description: You can explore the isSelectedCell method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# isSelectedCell()

@short: checks whether the cell with the specified row and column parameters is selected

@signature: {'isSelectedCell(row: IRow | Id, column?: ICol | Id): boolean;'}

@params:
- `row: IRow | Id` - an object with a cell to be checked or the id of a row
- `column: ICol | Id` - the config of a column or its id

@returns:
Returns `true` if the cell is selected, otherwise `false`

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
const column = grid.getColumn("project");
grid.selection.setCell(row,column);

const selectedCell = grid.selection.isSelectedCell(row,column); 
console.log(selectedCell); // -> true

@descr:

**Related article**: [Selection](grid/usage_selection.md)

**Related API**: [`setCell()`](grid/api/selection/selection_setcell_method.md)

@changelog:
added in v9.2