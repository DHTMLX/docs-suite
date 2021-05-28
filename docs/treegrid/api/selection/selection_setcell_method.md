---
sidebar_label: setCell()
title: JavaScript TreeGrid - setCell Method 
hide_title: true
description: You can explore the setCell method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# setCell()

@short: sets selection to a specified cell

@signature: {'setCell(row?: any, col?: any): void;'}

@params:
- `row: object` - an object with a cell to be selected
- `col: object` - the config of a column

@example:
var row = treegrid.data.getItem(treegrid.data.getId(0));
var column = treegrid.getColumn("population");
treegrid.selection.setCell(row, column);

@descr:

[comment]: # (@related: treegrid/usage_selection.md#setting-selection-to-a-cell)

[comment]: # (@relatedapi: treegrid/api/selection/selection_enable_method.md treegrid/api/selection/selection_removecell_method.md)
