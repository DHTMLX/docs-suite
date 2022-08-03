---
sidebar_label: dragMode
title: JavaScript List - dragMode Config 
description: You can explore the dragMode config of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# dragMode

@short: enables drag-n-drop in List

@signature: {'dragMode?: string'}

@example:
var list = new dhx.List("list_container", { 
    dragMode:"source"
});

@descr:

**Related sample**: [List. Drag-n-drop](https://snippet.dhtmlx.com/yfz6ai7j)

Drag-n-drop can work in three modes: 

- "target" - a list takes items from other lists, while its items can't be dragged out of it
- "source" - a list allows dragging its items out and can't take items from other lists
- "both" - a list both takes items from other lists and allows dragging its items out as well

[comment]: # (@related: list/configuration.md#drag-n-drop-of-items)
