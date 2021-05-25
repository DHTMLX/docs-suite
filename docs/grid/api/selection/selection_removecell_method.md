---
sidebar_label: removeCell()
title: JavaScript Grid - removeCell Method 
hide_title: true
description: You can explore the removeCell method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# removeCell()

@short: unselects previously selected cells

@signature: {'removeCell(rowId?: string | number, colId?: string | number): void;'}

@params:
- `rowId: string | number` - optional, the id of a row
- `colId: string | number` - optional, the id of a column

@example:
// unselects all previously selected cells
grid.selection.removeCell();

// unselects all previously selected cells of the specified row
grid.selection.removeCell(rowId);

// removes selection from the specified cell
grid.selection.removeCell(rowId, colId);

@descr:

@changelog:
added in v7.0

[comment]: # (@related: grid/usage_selection.md#removing-selection)

[comment]: # (@relatedapi: grid/api/selection/selection_enable_method.md grid/api/selection/selection_setcell_method.md)
