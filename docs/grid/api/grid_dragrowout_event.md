---
sidebar_label: dragRowOut
title: JavaScript Grid - dragRowOut Event 
description: You can explore the dragRowOut event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragRowOut

@short: fires when a row is dragged out of a potential target

@signature: {'dragRowOut: (data: IDragInfo, events: MouseEvent) => void;'}

@params:
- `data: object` - data object
- `events: MouseEvent` - a native HTML event object

@example:
grid.events.on("dragRowOut", function(data, events) {
  // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

The data object contains the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>start</b></td>
			<td>(<i>string, number</i>) the id of a row, from which the dragging process has started</td>
		</tr>
        <tr>
			<td><b>source</b></td>
			<td>(<i>array</i>) an array with ids of dragged rows</td>
		</tr>
        <tr>
			<td><b>target</b></td>
			<td>(<i>string, number</i>) the id of a potential target row</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0

[comment]: # (@relatedapi: grid/api/grid_afterrowdrag_event.md grid/api/grid_afterrowdrop_event.md grid/api/grid_beforerowdrag_event.md grid/api/grid_beforerowdrop_event.md grid/api/grid_canrowdrop_event.md grid/api/grid_cancelrowdrop_event.md grid/api/grid_dragrowin_event.md grid/api/grid_dragrowstart_event.md) 

[comment]: # (@related: grid/configuration.md#drag-n-drop-between-grids)
