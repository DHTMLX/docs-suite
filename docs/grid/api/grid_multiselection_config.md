---
sidebar_label: multiselection
title: JavaScript Grid - multiselection Config 
description: You can explore the multiselection config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# multiselection

@short: Optional. Enables multi-row/multi-cell selection in Grid

@signature: {'multiselection?: boolean;'}

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    multiselection:true,
    selection:"row",
    data: dataset
});

@descr:

**Related sample**: [Grid. Multiselection](https://snippet.dhtmlx.com/4nj0e9ye)

To use the **multiselection** property, enable the [](grid/api/grid_selection_config.md) configuration option when initializing a grid.

@changelog: added in v6.4

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#multiple-selection-of-grid-cells)
