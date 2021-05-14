---
sidebar_label: multiselection
title: multiselection
---          

@short: enables multi-row/multi-cell selection in Grid

@signature: {'multiselection?: boolean;'}

@example:
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    multiselection:true, /*!*/
    selection:"row",
    data: dataset
});

@descr:

**Related sample**: [Grid. Multiselection](https://snippet.dhtmlx.com/4nj0e9ye)

To use the **multiselection** property, enable the [](grid/api/grid_selection_config.md) configuration option when initializing a grid.

@changelog: added in v6.4

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#multiple-selection-of-grid-cells)
