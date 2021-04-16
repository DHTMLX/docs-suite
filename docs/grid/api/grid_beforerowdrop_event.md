---
sidebar_label: beforeRowDrop
title: beforeRowDrop
---          

@short: fires before the user has finished dragging and released the mouse button over a target row

@signature: beforeRowDrop: (data: object, events: MouseEvent) => void | boolean;
	
<!-- @params:
- data		object		data object
- e		    Event		a native event object -->

@returns:
- result	boolean		false - to block the default action, otherwise true


@example:
grid.events.on("BeforeRowDrop", function(data, events){
	// your logic here
    return false;
});


@template:	api_event
@descr:

The data object contains the following parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>start</b></td>
			<td>(<i>string</i>) the id of a row, from which the dragging process has started</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>source</b></td>
			<td>(<i>string[]</i>) an array with ids of dragged rows</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>target</b></td>
			<td>(<i>string</i>) the id of a potential target row</td>
		</tr>
    </tbody>
</table>

@relatedapi: 
@relatedapi:
grid/api/grid_afterrowdrag_event.md
grid/api/grid_afterrowdrop_event.md
grid/api/grid_beforerowdrag_event.md
grid/api/grid_canrowdrop_event.md
grid/api/grid_cancelrowdrop_event.md
grid/api/grid_dragrowin_event.md
grid/api/grid_dragrowout_event.md
grid/api/grid_dragrowstart_event.md
grid/api/grid_dragitem_config.md

[Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)	

@changelog: added in v7.0

@related: grid/configuration.md#dragndropofgridrows

