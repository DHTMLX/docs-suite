---
sidebar_label: dragColumnStart
title: JavaScript TreeGrid - dragColumnStart Event 
description: You can explore the dragColumnStart event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragColumnStart

@short: fires when dragging of a column has started

@signature: {'dragColumnStart: (data: object, events: MouseEvent) => void;'}

@params:
- `data: object` - data object. It contains the following parameters:
    - `start: string | number` - the id of a column, from which the dragging process has started
    - `source: array` - an array with ids of dragged columns
    - `target: string | number` - the id of a potential target column
- `events: MouseEvent` - a native HTML event object

@example:
treegrid.events.on("dragColumnStart", function(data, events) {
  // your logic here
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: treegrid/api/treegrid_dragitem_config.md treegrid/api/treegrid_aftercolumndrag_event.md treegrid/api/treegrid_aftercolumndrop_event.md treegrid/api/treegrid_beforecolumndrag_event.md treegrid/api/treegrid_beforecolumndrop_event.md treegrid/api/treegrid_cancolumndrop_event.md treegrid/api/treegrid_cancelcolumndrop_event.md treegrid/api/treegrid_dragcolumnin_event.md treegrid/api/treegrid_dragcolumnout_event.md)

[comment]: # (@related: treegrid/configuration.md#drag-n-drop-inside-the-grid)
