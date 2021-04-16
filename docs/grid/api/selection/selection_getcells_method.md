---
sidebar_label: getCells
title: getCells
---          

@short: returns an array with config objects of selected cells

@signature: getCells(): array[];

@returns:
param       array      an array with configuration objects of selected cells



@example:
var selectedCells = grid.selection.getCells();
// -> [{…}, {…}, {…}]
0: {row: {…}, column: {…}}
1: {row: {…}, column: {…}}
2: {row: {…}, column: {…}}


@template: api_method
@descr:

@related: grid/usage_selection.md#gettingobjectofselectedcells

@relatedapi: grid/api/selection/selection_enable_method.md
grid/api/selection/selection_getcell_method.md

@changelog:


