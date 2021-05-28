---
sidebar_label: dragItem
title: JavaScript TreeGrid - dragItem Config 
hide_title: true
description: You can explore the dragItem config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# dragItem

@short: enables the possibility to reorder treegrid columns by drag and drop

@signature: {'dragItem?: "row" | "column";'}

@example:
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    dragItem: "column", /*!*/ 
    data: dataset
});

@descr:

**Related sample**: [Setup drag column](https://snippet.dhtmlx.com/ax5vs4a8)

@changelog: added in v6.5

[comment]: # (@related: treegrid/initialization.md#initialize-treegrid treegrid/configuration.md#drag-n-drop-of-treegrid-columns)

[comment]: # (@relatedapi: treegrid/api/treegrid_aftercolumndrag_event.md treegrid/api/treegrid_aftercolumndrop_event.md treegrid/api/treegrid_beforecolumndrag_event.md treegrid/api/treegrid_beforecolumndrop_event.md treegrid/api/treegrid_cancolumndrop_event.md treegrid/api/treegrid_cancelcolumndrop_event.md treegrid/api/treegrid_dragcolumnin_event.md treegrid/api/treegrid_dragcolumnout_event.md treegrid/api/treegrid_dragcolumnstart_event.md)
