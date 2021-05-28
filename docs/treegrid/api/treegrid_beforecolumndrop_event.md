---
sidebar_label: beforeColumnDrop
title: JavaScript TreeGrid - beforeColumnDrop Event 
hide_title: true
description: You can explore the beforeColumnDrop event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeColumnDrop

@short: fires before the user has finished dragging and released the mouse button over a target column

@signature: {'beforeColumnDrop: (data: IDragInfo, events: MouseEvent) => void | boolean;'}

@params:
- `data: object` - data object
- `events: MouseEvent` - a native HTML event object

@returns:
Return `false` to block the default action; otherwise, `true`.

@example:
treegrid.events.on("BeforeColumnDrop", function(data, events){
	// your logic here
    return false;
});

@descr:

The data object contains the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>start</b></td>
			<td>(<i>string</i>) the id of a column, from which the dragging process has started</td>
		</tr>
        <tr>
			<td><b>source</b></td>
			<td>(<i>string[]</i>) an array with ids of dragged columns</td>
		</tr>
        <tr>
			<td><b>target</b></td>
			<td>(<i>string</i>) the id of a potential target column</td>
		</tr>
    </tbody>
</table>

@changelog:

- added in v6.5
- Before v7.0, the event took two parameters - **sourceId** and **targetId**. 
- In v7.0, the parameters were replaced with new ones: **data** and **e**.

[comment]: # (@relatedapi: treegrid/api/treegrid_dragitem_config.md treegrid/api/treegrid_aftercolumndrag_event.md treegrid/api/treegrid_aftercolumndrop_event.md treegrid/api/treegrid_beforecolumndrag_event.md treegrid/api/treegrid_cancolumndrop_event.md treegrid/api/treegrid_cancelcolumndrop_event.md treegrid/api/treegrid_dragcolumnin_event.md treegrid/api/treegrid_dragcolumnout_event.md treegrid/api/treegrid_dragcolumnstart_event.md)

[comment]: # (@related: treegrid/configuration.md#drag-n-drop-of-treegrid-columns)
