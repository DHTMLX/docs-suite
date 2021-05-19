---
sidebar_label: dragRowIn
title: dragRowIn
---          

@short: fires when a row is dragged to another potential target

@signature: {'dragRowIn: (data: IDragInfo, events: MouseEvent) => void | boolean;'}

@params:
`data: object` - data object
`e: Event` - a native event object

@example:
treegrid.events.on("DragRowIn", function(data, events) {
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

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

[comment]: # (@relatedapi: treegrid/api/treegrid_dragmode_config.md treegrid/api/treegrid_afterrowdrag_event.md treegrid/api/treegrid_afterrowdrop_event.md treegrid/api/treegrid_beforerowdrag_event.md treegrid/api/treegrid_beforerowdrop_event.md treegrid/api/treegrid_canrowdrop_event.md treegrid/api/treegrid_cancelrowdrop_event.md treegrid/api/treegrid_dragrowout_event.md treegrid/api/treegrid_dragrowstart_event.md)

[comment]: # (@related: treegrid/configuration.md#drag-n-drop-of-treegrid-rows)
