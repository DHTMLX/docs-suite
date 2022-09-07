---
sidebar_label: dragColumnOut
title: JavaScript Grid - dragColumnOut Event 
description: You can explore the dragColumnOut event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# dragColumnOut

@short: fires when a column is dragged out of a potential target

@signature: {'dragColumnOut: (data: IDragInfo, events: MouseEvent) => void;'}

@params:
- `data: object` - data object
- `events: MouseEvent` - a native HTML event object

@example:
grid.events.on("dragColumnOut", function(data, events) {
  // your logic here
});

@descr:

{{pronote This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.}}

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

[comment]: # (@relatedapi:)
[comment]: # ([](grid/api/grid_dragitem_config.md)
[comment]: # ([](grid/api/grid_aftercolumndrag_event.md)
[comment]: # ([](grid/api/grid_aftercolumndrop_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrag_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancelcolumndrop_event.md)
[comment]: # ([](grid/api/grid_dragcolumnin_event.md)
[comment]: # ([](grid/api/grid_dragcolumnstart_event.md)

[comment]: # (@related: grid/configuration.md#drag-n-drop-inside-the-grid)
