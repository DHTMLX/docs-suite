---
sidebar_label: dragItem
title: JavaScript Grid - dragItem Config 
description: You can explore the dragItem config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# dragItem

{{pronote This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package. <br>In case you use GPL version, you will be able to reorder rows only.}}

@short: Optional. Enables the possibility to reorder grid columns or (and) rows by drag and drop

@signature: {' dragItem?: "column", "row", "both";'}

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
		// columns config
	],
    dragItem: "both",
    data: dataset
});

@descr:

**Related sample**: [Grid. Drag-n-drop (Pro)](https://snippet.dhtmlx.com/zwc91d50)

Drag-n-drop can work in three modes:

- "column" - enables drag and drop of columns
- "row" - enables drag and drop of rows
- "both" - enables both modes mentioned above

:::info
Enable [multiselection](grid/configuration.md#multiple-selection-of-grid-cells) of rows to allow a user to drag-n-drop multiple rows at once.
:::

@changelog:

- added in v6.5.
- The "row" and "both" modes have been added in v7.2.

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#drag-n-drop-inside-the-grid)

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
