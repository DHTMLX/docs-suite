---
sidebar_label: setCell()
title: setCell()
---          

@short: sets selection to a specified cell

@signature: {'setCell(row?: any, col?: any, ctrlUp?: boolean, shiftUp?: boolean): void;'}

@params:
- `row: object` - an object with a cell to be selected
- `column: object` - the config of a column

@example:
var row = treegrid.data.getItem(treegrid.data.getId(0));
var column = treegrid.getColumn("population");
treegrid.selection.setCell(row, column);

@descr:

[comment]: # (@related: treegrid/usage_selection.md#setting-selection-to-a-cell)

[comment]: # (@relatedapi: treegrid/api/selection/selection_enable_method.md treegrid/api/selection/selection_removecell_method.md)
