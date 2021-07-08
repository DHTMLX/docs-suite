---
sidebar_label: dragItem
title: JavaScript Grid - dragItem Config 
description: You can explore the dragItem config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# dragItem

@short: enables the possibility to reorder grid columns or (and) rows by drag and drop

@signature: {' dragItem?: "column", "row", "both";'}

@example:
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    dragItem: "column", /*!*/ 
    data: dataset
});

@descr:

**Related sample**: [Grid. Setup drag column and rows (Pro)](https://snippet.dhtmlx.com/zwc91d50)

Drag-n-drop can work in three modes:

- "column" - enables drag and drop of columns
- "row" - enables drag and drop of rows
- "both" - enables both modes mentioned above

{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}

@changelog:

- added in v6.5.
- The "row" and "both" modes have beed added in v7.2.

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#drag-n-drop-of-grid-columns)

[comment]: # (@relatedapi:)
[comment]: # ([](grid/api/grid_aftercolumndrag_event.md)
[comment]: # ([](grid/api/grid_aftercolumndrop_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrag_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancelcolumndrop_event.md)
[comment]: # ([](grid/api/grid_dragcolumnin_event.md)
[comment]: # ([](grid/api/grid_dragcolumnout_event.md)
[comment]: # ([](grid/api/grid_dragcolumnstart_event.md)
