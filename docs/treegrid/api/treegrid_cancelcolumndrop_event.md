---
sidebar_label: cancelColumnDrop
title: JavaScript TreeGrid - cancelColumnDrop Event 
description: You can explore the cancelColumnDrop event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# cancelColumnDrop

@short: fires on moving a mouse pointer out of borders of a column while dragging the column

@signature: {'cancelColumnDrop: (data: object, events: MouseEvent) => void;'}

@params:
- `data: object` - data object. It contains the following parameters:
	- `start: string | number` - the id of a column, from which the dragging process has started
	- `source: array` - an array with ids of dragged columns
	- `target: string | number` - the id of a potential target column
- `events: MouseEvent` - a native HTML event object

@example:
treegrid.events.on("cancelColumnDrop", function(data, events) {
  // your logic here
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: treegrid/api/treegrid_dragitem_config.md treegrid/api/treegrid_aftercolumndrag_event.md treegrid/api/treegrid_aftercolumndrop_event.md treegrid/api/treegrid_beforecolumndrag_event.md treegrid/api/treegrid_beforecolumndrop_event.md treegrid/api/treegrid_cancolumndrop_event.md treegrid/api/treegrid_dragcolumnin_event.md treegrid/api/treegrid_dragcolumnout_event.md treegrid/api/treegrid_dragcolumnstart_event.md)

[comment]: # (@related: treegrid/configuration.md#drag-n-drop-inside-the-grid)
