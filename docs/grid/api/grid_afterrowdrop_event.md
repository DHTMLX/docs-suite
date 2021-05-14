---
sidebar_label: afterRowDrop
title: afterRowDrop
---          

@short: fires before the user has finished dragging a row but after the mouse button is released

@signature: {'afterRowDrop: (data: IDragInfo, events: MouseEvent) => void;'}

@params:
- data		object		data object
- e		    Event		a native event object

@example:
grid.events.on("AfterRowDrop", function(data, events) {
    // your logic here
});

@descr:

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

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v7.0

[comment]: # (@relatedapi: grid/api/grid_afterrowdrag_event.md grid/api/grid_beforerowdrag_event.md grid/api/grid_beforerowdrop_event.md grid/api/grid_canrowdrop_event.md grid/api/grid_cancelrowdrop_event.md grid/api/grid_dragrowin_event.md grid/api/grid_dragrowout_event.md grid/api/grid_dragrowstart_event.md)

[comment]: # (@related: grid/configuration.md#drag-n-drop-of-grid-rows)
