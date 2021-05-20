---
sidebar_label: getCells()
title: getCells()
---          

@short: returns an array with config objects of selected cells

@signature: {'getCells(): array[];'}

@returns:
An array with configuration objects of selected cells.

@example:
var selectedCells = grid.selection.getCells();
// -> [{…}, {…}, {…}]
0: {row: {…}, column: {…}}
1: {row: {…}, column: {…}}
2: {row: {…}, column: {…}}

@descr:

[comment]: # (@related: grid/usage_selection.md#getting-object-of-selected-cells)

[comment]: # (@relatedapi: grid/api/selection/selection_enable_method.md grid/api/selection/selection_getcell_method.md)
