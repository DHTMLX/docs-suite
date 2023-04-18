---
sidebar_label: dragColumnStart
title: JavaScript Grid - dragColumnStart Event 
description: You can explore the dragColumnStart event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragColumnStart

{{pronote This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.}}

@short: fires when dragging of a column has started

@signature: {'dragColumnStart: (data: object, events: MouseEvent) => void;'}

@params:
- `data: object` - data object. It contains the following parameters:
	- `start: string | number` - the id of a column, from which the dragging process has started
	- `source: array` - an array with ids of dragged columns
	- `target: string | number` - the id of a potential target column
- `events: MouseEvent` - a native HTML event object

@example:
grid.events.on("dragColumnStart", function(data, events) {
  // your logic here
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi:)
[comment]: # ([](grid/api/grid_dragitem_config.md)
[comment]: # ([](grid/api/grid_aftercolumndrag_event.md)
[comment]: # ([](grid/api/grid_aftercolumndrop_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrag_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancelcolumndrop_event.md)
[comment]: # ([](grid/api/grid_dragcolumnin_event.md)
[comment]: # ([](grid/api/grid_dragcolumnout_event.md)

[comment]: # (@related: grid/configuration.md#drag-n-drop-inside-the-grid)
