---
sidebar_label: beforeRowDrop
title: beforeRowDrop
---          

@short: fires before the user has finished dragging and released the mouse button over a target row

@signature: {'beforeRowDrop: (data: IDragInfo, events: MouseEvent) => void | boolean;'}
	
@params:
- `data: object` - data object
- `events: MouseEvent` - a native HTML event object 

@returns:
Return `false` to block the default action; otherwise, `true`.

@example:
grid.events.on("BeforeRowDrop", function(data, events){
	// your logic here
    return false;
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

[comment]: # (@relatedapi: grid/api/grid_afterrowdrag_event.md grid/api/grid_afterrowdrop_event.md grid/api/grid_beforerowdrag_event.md grid/api/grid_canrowdrop_event.md grid/api/grid_cancelrowdrop_event.md grid/api/grid_dragrowin_event.md grid/api/grid_dragrowout_event.md grid/api/grid_dragrowstart_event.md grid/api/grid_dragitem_config.md)

[comment]: # (@related: grid/configuration.md#drag-n-drop-of-grid-rows)
