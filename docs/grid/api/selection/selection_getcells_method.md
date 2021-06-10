---
sidebar_label: getCells()
title: JavaScript Grid - getCells Method 
description: You can explore the getCells method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getCells()

@short: returns an array with config objects of selected cells

@signature: {'getCells(): ICell[];'}

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
