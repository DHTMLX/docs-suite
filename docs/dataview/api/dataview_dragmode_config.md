---
sidebar_label: dragMode
title: JavaScript DataView - dragMode Config 
description: You can explore the dragMode config of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# dragMode

@short: Optional. Enables drag-n-drop in DataView

@signature: {'dragMode?: boolean;'}

@example:
const dataview = new dhx.DataView("dataview_container", { 
    dragMode:"source"
});

@descr:

**Related sample**: [Dataview. Drag'n'drop](https://snippet.dhtmlx.com/nia2e5a9)

Drag-n-drop can work in three modes:

- "target" - a dataview takes items from other dataviews, while its items can't be dragged out of it
- "source" - a dataview allows dragging its items out and can't take items from other dataviews
- "both" - a dataview both takes items from other dataviews and allows dragging its items out as well

[comment]: # (@relatedapi: dataview/configuration.md#drag-n-drop-of-items)
