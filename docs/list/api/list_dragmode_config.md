---
sidebar_label: dragMode
title: dragMode
---          

@short: enables drag-n-drop in List

```todoapi ```

@example: 
var list = new dhx.List("list_container", { 
    dragMode:"source"
});


@template:	api_config
@descr: 
Drag-n-drop can work in three modes: 

- "target" - a list takes items from other lists, while its items can't be dragged out of it
- "source" - a list allows dragging its items out and can't take items from other lists
- "both" - a list both takes items from other lists and allows dragging its items out as well

@related: list/configuration.md#dragndropofitems

@relatedsample: https://snippet.dhtmlx.com/yfz6ai7j	List. Setup Drag Mode