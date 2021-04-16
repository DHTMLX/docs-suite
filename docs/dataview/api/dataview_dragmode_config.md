---
sidebar_label: dragMode
title: dragMode
---          

@short: enables drag-n-drop in DataView

@signature: dragMode?: "target" | "both" | "source";

@example: 
var dataview = new dhx.DataView("dataview_container", { 
    dragMode:"source"
});


@template:	api_config
@descr: 
Drag-n-drop can work in three modes:

- "target" - a dataview takes items from other dataviews, while its items can't be dragged out of it
- "source" - a dataview allows dragging its items out and can't take items from other dataviews
- "both" - a dataview both takes items from other dataviews and allows dragging its items out as well

@relatedsample:
https://snippet.dhtmlx.com/nia2e5a9	Dataview. Drag'n'drop

@relatedapi:
dataview/configuration.md#dragndropofitems