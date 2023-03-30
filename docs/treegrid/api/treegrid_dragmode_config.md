---
sidebar_label: dragMode
title: JavaScript TreeGrid - dragMode Config 
description: You can explore the dragMode config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragMode

@short: Optional. Enables drag-n-drop in Treegrid

@signature: {'dragMode?: "target" | "source" | "both";'}

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", { 
    dragMode:"source"
});

@descr:

Drag-n-drop can work in three modes:

- "target" - a grid takes rows from other grids, while its rows can't be dragged out of it
- "source" - a grid allows dragging its rows out and can't take rows from other grids
- "both" - a grid both takes rows from other grids and allows dragging its rows out as well

**Related sample**: [TreeGrid. Drag-n-drop between grids](https://snippet.dhtmlx.com/43covmy2)

**Related API:**

- [dragCopy](treegrid/api/treegrid_dragcopy_config.md)
- [dragExpand](treegrid/api/treegrid_dragexpand_config.md)
- [dragItem](treegrid/api/treegrid_dragitem_config.md)

[comment]: # (@related: treegrid/configuration.md#drag-n-drop-between-grids treegrid/initialization.md#initialize-treegrid)

[comment]: # (@relatedapi: treegrid/api/treegrid_afterrowdrag_event.md treegrid/api/treegrid_afterrowdrop_event.md treegrid/api/treegrid_beforerowdrag_event.md treegrid/api/treegrid_beforerowdrop_event.md treegrid/api/treegrid_canrowdrop_event.md treegrid/api/treegrid_cancelrowdrop_event.md treegrid/api/treegrid_dragrowin_event.md treegrid/api/treegrid_dragrowout_event.md treegrid/api/treegrid_dragrowstart_event.md)
