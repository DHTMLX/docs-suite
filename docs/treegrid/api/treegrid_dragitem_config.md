---
sidebar_label: dragItem
title: dragItem
---          

@short: enables the possibility to reorder treegrid columns by drag and drop

@signature: dragItem?: "column";

@example: 
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    dragItem: "column", /*!*/ 
    data: dataset
});

@template:	api_config
@descr: 

@relatedsample: https://snippet.dhtmlx.com/ax5vs4a8	Setup drag column

@related: 
treegrid/initialization.md#initializetreegrid
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

