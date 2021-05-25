---
sidebar_label: dragCopy
title: JavaScript Grid - dragCopy Config 
hide_title: true
description: You can explore the dragCopy config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# dragCopy

@short: defines that a row is copied to a target during drag-n-drop

@signature: {'dragCopy?: boolean;'}

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

@descr: 

**Related sample**: [Grid. Setup Drag Copy](https://snippet.dhtmlx.com/23slivyz)

[comment]: # (@related: grid/initialization.md#initialize-grid)

[comment]: # (@relatedapi: grid/api/grid_dragmode_config.md)
