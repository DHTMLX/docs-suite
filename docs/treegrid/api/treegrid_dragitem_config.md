---
sidebar_label: dragItem
title: dragItem
---          

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

@related: 
treegrid/initialization.md#initialize-treegrid
treegrid/configuration.md#dragndropofgridcolumns

@relatedapi: 
treegrid/api/treegrid_aftercolumndrag_event.md
treegrid/api/treegrid_aftercolumndrop_event.md
treegrid/api/treegrid_beforecolumndrag_event.md
treegrid/api/treegrid_beforecolumndrop_event.md
treegrid/api/treegrid_cancolumndrop_event.md
treegrid/api/treegrid_cancelcolumndrop_event.md
treegrid/api/treegrid_dragcolumnin_event.md
treegrid/api/treegrid_dragcolumnout_event.md
treegrid/api/treegrid_dragcolumnstart_event.md

@changelog: added in v6.5

