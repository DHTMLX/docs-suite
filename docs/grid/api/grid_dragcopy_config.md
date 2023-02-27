---
sidebar_label: dragCopy
title: JavaScript Grid - dragCopy Config 
description: You can explore the dragCopy config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragCopy

@short: Optional. Defines that a row is copied to a target during drag-n-drop

@signature: {'dragCopy?: boolean;'}

@example:
const source = new dhx.Grid("grid-source", {
    columns: [
        // columns config
    ],
    dragMode: "source", 
    dragCopy: true
});

const target = new dhx.Grid("grid-target", {
    columns: [
        // columns config
    ],
    dragMode: "target", 
    dragCopy: true
});

@descr: 

**Related sample**: [Grid. Drag-n-drop copy](https://snippet.dhtmlx.com/23slivyz)

[comment]: # (@related: grid/initialization.md#initialize-grid)

[comment]: # (@relatedapi: grid/api/grid_dragmode_config.md)
