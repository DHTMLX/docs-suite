---
sidebar_label: dragCopy
title: JavaScript TreeGrid - dragCopy Config 
description: You can explore the dragCopy config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragCopy

@short: Optional. Defines that a row is copied to a target during drag-n-drop

@signature: {'dragCopy?: boolean;'}

@example:
const source = new dhx.TreeGrid("treegrid-source", {
    dragMode: "source", 
    dragCopy: true
});

const target = new dhx.TreeGrid("treegrid-target", {
    dragMode: "target", 
    dragCopy: true
});

@descr:

**Related sample**: [TreeGrid. Drag-n-drop copy](https://snippet.dhtmlx.com/a7pg38rr)

**Related API:**

- [dragExpand](treegrid/api/treegrid_dragexpand_config.md)
- [dragItem](treegrid/api/treegrid_dragitem_config.md)
- [dragMode](treegrid/api/treegrid_dragmode_config.md)

[comment]: # (@related: treegrid/initialization.md#initialize-treegrid)
