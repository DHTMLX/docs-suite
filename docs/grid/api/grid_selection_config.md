---
sidebar_label: selection
title: JavaScript Grid - selection Config 
description: You can explore the selection config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# selection

@short: Optional. Enables selection in a grid

@signature: {'selection?: boolean | "cell" | "row" | "complex";'}

@default: false

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    selection:"complex",
    data: dataset
});

@descr:

When you set `selection:true`, the "complex" mode is applied.

**Related sample**: [Grid. Selection](https://snippet.dhtmlx.com/ad6roqsx)

**Related articles:** 
- [Selection](grid/configuration.md#selection)
- [Work with Selection object](grid/usage_selection.md)
