---
sidebar_label: dragCopy
title: JavaScript DataView - dragCopy Config 
description: You can explore the dragCopy config of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragCopy

@short: Optional. Defines that an item is copied to a target during drag-n-drop

@signature: {'dragCopy?: boolean;'}

@default: false

@example:
const source = new dhx.DataView("dataview_source", {dragMode: "source", dragCopy: true});
const target = new dhx.DataView("dataview_target", {dragMode: "target", dragCopy: true});

@descr:

**Related sample**: [Dataview. Drag-n-drop copy](https://snippet.dhtmlx.com/h89c3gl3)

{{note Don't forget to enable drag-n-drop via the [](dataview/api/dataview_dragmode_config.md) property to use **dragCopy**.}}

[comment]: # (@relatedapi: dataview/configuration.md#drag-n-drop-of-items)
