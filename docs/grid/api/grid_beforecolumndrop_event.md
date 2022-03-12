---
sidebar_label: beforeColumnDrop
title: JavaScript Grid - beforeColumnDrop Event 
description: You can explore the beforeColumnDrop event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
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
grid.events.on("beforeColumnDrop", function(data, events){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Setup drag column (Pro)](https://snippet.dhtmlx.com/dfdlzpqb)

{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}

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

@changelog:

- added in v6.5
- Before v7.0, the event took two parameters - **sourceId** and **targetId**. 
- In v7.0, the parameters were replaced with new ones: **data** and **e**.

[comment]: # (@relatedapi:)
[comment]: # ([](grid/api/grid_dragitem_config.md)
[comment]: # ([](grid/api/grid_aftercolumndrag_event.md)
[comment]: # ([](grid/api/grid_aftercolumndrop_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrag_event.md)
[comment]: # ([](grid/api/grid_cancolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancelcolumndrop_event.md)
[comment]: # ([](grid/api/grid_dragcolumnin_event.md)
[comment]: # ([](grid/api/grid_dragcolumnout_event.md)
[comment]: # ([](grid/api/grid_dragcolumnstart_event.md)

[comment]: # (@related: grid/configuration.md#drag-n-drop-inside-the-grid)
