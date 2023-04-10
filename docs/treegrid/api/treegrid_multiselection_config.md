---
sidebar_label: multiselection
title: JavaScript TreeGrid - multiselection Config 
description: You can explore the multiselection config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# multiselection

@short: Optional. Enables multi-row/multi-cell selection in TreeGrid (only CTRL)

@signature: {'multiselection?: boolean;'}

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    multiselection:true,
    selection:"row", // "cell" | "row" | "complex"
    data: dataset
});

@descr:

To use the **multiselection** property, enable the [](treegrid/api/treegrid_selection_config.md) configuration option when initializing a treegrid.

**Related articles:**

- [Multiple selection of TreeGrid cells](treegrid/configuration.md#multiple-selection-of-treegrid-cells)
- [Drag-n-drop of multiple rows](treegrid/configuration.md#drag-n-drop-of-multiple-rows)

@changelog: added in v8.1
