---
sidebar_label: removeCell
title: removeCell
---          

@short: unselects previously selected cells

@params:
- rowId     string,number   optional, the id of a row
- colId     string,number   optional, the id of a column



@example:
treegrid.selection.enable();

// unselects all previously selected cells
treegrid.selection.removeCell();

// unselects all previously selected cells of the specified row
treegrid.selection.removeCell(rowId);

// removes selection from the specified cell
treegrid.selection.removeCell(rowId, colId);


@template: api_method
@descr:



@related: treegrid/usage_selection.md#removingselection
treegrid/configuration.md#selection

@relatedapi: 
treegrid/api/selection/selection_enable_method.md
treegrid/api/selection/selection_setcell_method.md

@changelog:
added in v7.0

