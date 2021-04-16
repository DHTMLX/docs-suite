---
sidebar_label: afterRowDrag
title: afterRowDrag
---          

@short: fires after dragging of a row is finished

@signature: afterRowDrag: (data: object, events: MouseEvent) => void;

@params:
- data		object		data object
- e		    Event		a native event object

@example:
grid.events.on("AfterRowDrag", function(data, events) {
    // your logic here
});


@template: api_event
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


@changelog: added in v7.0

[Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@relatedapi:
grid/api/grid_afterrowdrop_event.md
grid/api/grid_beforerowdrag_event.md
grid/api/grid_beforerowdrop_event.md
grid/api/grid_canrowdrop_event.md
grid/api/grid_cancelrowdrop_event.md
grid/api/grid_dragrowin_event.md
grid/api/grid_dragrowout_event.md
grid/api/grid_dragrowstart_event.md

@related: grid/configuration.md#dragndropofgridrows
