---
sidebar_label: dragRowOut
title: JavaScript TreeGrid - dragRowOut Event 
description: You can explore the dragRowOut event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# dragRowOut

@short: fires when a row is dragged out of a potential target

@signature: {'dragRowOut: (data: IDragInfo, events: MouseEvent) => void;'}

@params:
- `data: object` - data object
- `events: MouseEvent` - a native HTML event object

@example:
treegrid.events.on("DragRowOut", function(data, events) {
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

The data object contains the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>start</b></td>
			<td>(<i>string</i>) the id of a row, from which the dragging process has started</td>
		</tr>
        <tr>
			<td><b>source</b></td>
			<td>(<i>string[]</i>) an array with ids of dragged rows</td>
		</tr>
        <tr>
			<td><b>target</b></td>
			<td>(<i>string</i>) the id of a potential target row</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0

[comment]: # (@relatedapi: treegrid/api/treegrid_dragmode_config.md treegrid/api/treegrid_afterrowdrag_event.md treegrid/api/treegrid_afterrowdrop_event.md treegrid/api/treegrid_beforerowdrag_event.md treegrid/api/treegrid_beforerowdrop_event.md treegrid/api/treegrid_canrowdrop_event.md treegrid/api/treegrid_cancelrowdrop_event.md treegrid/api/treegrid_dragrowin_event.md treegrid/api/treegrid_dragrowstart_event.md)

[comment]: # (@related: treegrid/configuration.md#drag-n-drop-of-treegrid-rows)
