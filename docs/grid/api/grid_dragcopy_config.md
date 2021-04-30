---
sidebar_label: dragCopy
title: dragCopy
---          

@short: defines that a row is copied to a target during drag-n-drop

@signature: dragCopy?: boolean;

@example: 
var source = new dhx.Grid("grid-source", {
    columns: [// columns config],
    dragMode: "source", 
    dragCopy: true
});
var target = new dhx.Grid("grid-target", {
    columns: [// columns config],
    dragMode: "target", 
    dragCopy: true
});


@template:	api_config
@descr: 

**Related sample**: [Grid. Setup Drag Copy](https://snippet.dhtmlx.com/23slivyz)

@related: grid/initialization.md#initialize-grid

@relatedapi: grid/api/grid_dragmode_config.md