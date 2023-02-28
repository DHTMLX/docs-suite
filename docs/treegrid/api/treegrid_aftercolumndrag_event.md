---
sidebar_label: afterColumnDrag
title: JavaScript TreeGrid - afterColumnDrag Event 
description: You can explore the afterColumnDrag event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterColumnDrag

@short: fires after dragging of a column is finished

@signature: {'afterColumnDrag: (data: IDragInfo, events: MouseEvent) => void;'}

@params:
- `data: object` - data object
- `events: MouseEvent` - a native HTML event object

@example:
treegrid.events.on("afterColumnDrag", function(data, events) {
    // your logic here
});

@descr:

The data object contains the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>start</b></td>
			<td>(<i>string, number</i>) the id of a column, from which the dragging process has started</td>
		</tr>
        <tr>
			<td><b>source</b></td>
			<td>(<i>array</i>) an array with ids of dragged columns</td>
		</tr>
        <tr>
			<td><b>target</b></td>
			<td>(<i>string, number</i>) the id of a potential target column</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0

[comment]: # (@relatedapi: treegrid/api/treegrid_dragitem_config.md treegrid/api/treegrid_aftercolumndrop_event.md treegrid/api/treegrid_beforecolumndrag_event.md treegrid/api/treegrid_beforecolumndrop_event.md treegrid/api/treegrid_cancolumndrop_event.md treegrid/api/treegrid_cancelcolumndrop_event.md treegrid/api/treegrid_dragcolumnin_event.md treegrid/api/treegrid_dragcolumnout_event.md treegrid/api/treegrid_dragcolumnstart_event.md)

[comment]: # (@related: treegrid/configuration.md#drag-n-drop-inside-the-grid)
