---
sidebar_label: dragMode
title: dragMode
---          

@short: enables drag-n-drop in Treegrid

@signature: dragMode?: "target" | "both" | "source";

@params:
- "target" - a grid takes rows from other grids, while its rows can't be dragged out of it
- "source" - a grid allows dragging its rows out and can't take rows from other grids
- "both" - a grid both takes rows from other grids and allows dragging its rows out as well

@example: 
var treegrid = new dhx.TreeGrid("treegrid_container", { 
    dragMode:"source"
});

@template:	api_config
@descr: 
Drag-n-drop can work in three modes: 


@related:
treegrid/configuration.md#dragndropofgridrows
treegrid/initialization.md#initializetreegrid

@relatedsample: https://snippet.dhtmlx.com/43covmy2	TreeGrid. Setup Drag Mode

@relatedapi: 
treegrid/api/treegrid_afterrowdrag_event.md
treegrid/api/treegrid_afterrowdrop_event.md
treegrid/api/treegrid_beforerowdrag_event.md
treegrid/api/treegrid_beforerowdrop_event.md
treegrid/api/treegrid_canrowdrop_event.md
treegrid/api/treegrid_cancelrowdrop_event.md
treegrid/api/treegrid_dragrowin_event.md
treegrid/api/treegrid_dragrowout_event.md
treegrid/api/treegrid_dragrowstart_event.md