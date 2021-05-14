---
sidebar_label: dragRowStart
title: dragRowStart
---          

@short: fires when dragging of a row has started

@signature: {'dragRowStart: (data: IDragInfo, events: MouseEvent) => void;'}

@params:
- data		object		data object
- e		    Event		a native event object

@example:
grid.events.on("DragRowStart", function(data, events) {
  // your logic here
});



@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

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

@relatedapi:
grid/api/grid_afterrowdrag_event.md
grid/api/grid_afterrowdrop_event.md
grid/api/grid_beforerowdrag_event.md
grid/api/grid_beforerowdrop_event.md
grid/api/grid_canrowdrop_event.md
grid/api/grid_cancelrowdrop_event.md
grid/api/grid_dragrowin_event.md
grid/api/grid_dragrowout_event.md

@related: grid/configuration.md#drag-n-drop-of-grid-rows
