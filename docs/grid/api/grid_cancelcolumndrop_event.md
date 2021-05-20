---
sidebar_label: cancelColumnDrop
title: cancelColumnDrop
---          

@short: fires on moving a mouse pointer out of borders of a column while dragging the column

@signature: {'cancelColumnDrop: (data: object, events: MouseEvent) => void;'}

@params:
- `data: object` - data object
- `events: MouseEvent` - a native HTML event object

@example:
grid.events.on("CancelColumnDrop", function(data, events) {
  // your logic here
});

@descr:

{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}

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

@changelog: added in v7.0

[comment]: # (@relatedapi:)
[comment]: # ([](grid/api/grid_dragitem_config.md)
[comment]: # ([](grid/api/grid_aftercolumndrag_event.md)
[comment]: # ([](grid/api/grid_aftercolumndrop_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrag_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancolumndrop_event.md)
[comment]: # ([](grid/api/grid_dragcolumnin_event.md)
[comment]: # ([](grid/api/grid_dragcolumnout_event.md)
[comment]: # ([](grid/api/grid_dragcolumnstart_event.md)

[comment]: # (@related: grid/configuration.md#drag-n-drop-of-grid-columns)
