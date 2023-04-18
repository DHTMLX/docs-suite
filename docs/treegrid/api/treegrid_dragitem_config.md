---
sidebar_label: dragItem
title: JavaScript TreeGrid - dragItem Config 
description: You can explore the dragItem config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragItem

@short: Optional. Enables the possibility to reorder treegrid columns by drag and drop

@signature: {' dragItem?: "column", "row", "both";'}

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    dragItem: "column",
    data: dataset
});

@descr:

Drag-n-drop can work in three modes:

- "column" - enables drag and drop of columns
- "row" - enables drag and drop of rows
- "both" - enables both modes mentioned above

**Related sample**: [TreeGrid. Drag-n-drop](https://snippet.dhtmlx.com/ax5vs4a8)

**Related API:**

- [dragCopy](treegrid/api/treegrid_dragcopy_config.md)
- [dragExpand](treegrid/api/treegrid_dragexpand_config.md)
- [dragMode](treegrid/api/treegrid_dragmode_config.md)

@changelog:

- The "row" and "both" modes have been added in v7.2.
- The property was added in v6.5.

[comment]: # (@related: treegrid/initialization.md#initialize-treegrid treegrid/configuration.md#drag-n-drop-inside-the-grid)

[comment]: # (@relatedapi: treegrid/api/treegrid_aftercolumndrag_event.md treegrid/api/treegrid_aftercolumndrop_event.md treegrid/api/treegrid_beforecolumndrag_event.md treegrid/api/treegrid_beforecolumndrop_event.md treegrid/api/treegrid_cancolumndrop_event.md treegrid/api/treegrid_cancelcolumndrop_event.md treegrid/api/treegrid_dragcolumnin_event.md treegrid/api/treegrid_dragcolumnout_event.md treegrid/api/treegrid_dragcolumnstart_event.md)
