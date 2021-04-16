---
sidebar_label: multiselection
title: multiselection
---          

@short: enables multi-row/multi-cell selection in Grid

@signature: multiselection?: boolean;

@example: 
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    multiselection:true, /*!*/
    selection:"row",
    data: dataset
});


@template:	api_config
@descr:
To use the **multiselection** property, enable the [](grid/api/grid_selection_config.md) configuration option when initializing a grid.

@relatedsample: https://snippet.dhtmlx.com/4nj0e9ye	Grid. Multiselection

@related: grid/initialization.md#initializegrid
grid/configuration.md#multipleselectionofgridcells

@changelog: added in v6.4