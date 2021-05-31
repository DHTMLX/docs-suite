---
sidebar_label: removeCell()
title: JavaScript TreeGrid - removeCell Method 
description: You can explore the removeCell method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# removeCell()

@short: unselects previously selected cells

@signature: {'removeCell(rowId?: string | number, colId?: string | number): void;'}

@params:
- `rowId: string | number` - optional, the id of a row
- `colId: string | number` - optional, the id of a column

@example:
treegrid.selection.enable();

// unselects all previously selected cells
treegrid.selection.removeCell();

// unselects all previously selected cells of the specified row
treegrid.selection.removeCell(rowId);

// removes selection from the specified cell
treegrid.selection.removeCell(rowId, colId);

@descr:

@changelog:
added in v7.0

[comment]: # (@related: treegrid/usage_selection.md#removing-selection treegrid/configuration.md#selection)

[comment]: # (@relatedapi: treegrid/api/selection/selection_enable_method.md treegrid/api/selection/selection_setcell_method.md)
