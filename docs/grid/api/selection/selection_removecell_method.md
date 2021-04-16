---
sidebar_label: removeCell
title: removeCell
---          

@short: unselects previously selected cells

@signature: removeCell(rowId?: string | number, colId?: string | number): void;

@params:
- rowId     string,number   optional, the id of a row
- colId     string,number   optional, the id of a column

@example:
// unselects all previously selected cells
grid.selection.removeCell();

// unselects all previously selected cells of the specified row
grid.selection.removeCell(rowId);

// removes selection from the specified cell
grid.selection.removeCell(rowId, colId);


@template: api_method
@descr:


@related: grid/usage_selection.md#removingselection

@relatedapi: 
grid/api/selection/selection_enable_method.md
grid/api/selection/selection_setcell_method.md

@changelog:
added in v7.0

