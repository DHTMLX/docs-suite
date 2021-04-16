---
sidebar_label: setCell
title: setCell
---          

@short: sets selection to specified cells

@signature: etCell(row?: object | string, col?: object |  string, ctrlUp?: boolean, shiftUp?: boolean): void;

@params:
- row     object|string    an object with a cell to be selected or the id of a row
- column  object|string    the config of a column or its id
- ctrlUp  boolean     <i>true</i> - to select the desired rows or cells, otherwise - <i>false</i> (for multiselection mode)
- shiftUp   boolean     <i>true</i> - to select a range of rows or cells, otherwise - <i>false</i> (for multiselection mode)


@example:
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    selection:"cell",
    multiselection: false, 
    data: dataset
});


var row = grid.data.getItem(grid.data.getId(0));
var column = grid.getColumn("yearlyChange");
grid.selection.setCell(row, column);


@template: api_method
@descr:


{{note For details about how to set selection to multiple cells/rows, see [Setting selection to cells](grid/usage_selection.md#settingselectiontocells).}}

@related: grid/usage_selection.md

@relatedapi: 
grid/api/selection/selection_enable_method.md
grid/api/selection/selection_removecell_method.md

@changelog:

@relatedsample: https://snippet.dhtmlx.com/4nj0e9ye	Grid. Multiselection
