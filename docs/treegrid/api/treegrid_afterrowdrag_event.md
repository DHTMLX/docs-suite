---
sidebar_label: afterRowDrag
title: afterRowDrag
---          

@short: fires after dragging of a row is finished

@signature: afterRowDrag: (data: IDragInfo, events: MouseEvent) => void;

@params:
- data		object		data object
- e		    Event		a native event object

@example:
treegrid.events.on("AfterRowDrag", function(data, events) {
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

[TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@relatedapi:
treegrid/api/treegrid_dragmode_config.md
treegrid/api/treegrid_afterrowdrop_event.md
treegrid/api/treegrid_beforerowdrag_event.md
treegrid/api/treegrid_beforerowdrop_event.md
treegrid/api/treegrid_canrowdrop_event.md
treegrid/api/treegrid_cancelrowdrop_event.md
treegrid/api/treegrid_dragrowin_event.md
treegrid/api/treegrid_dragrowout_event.md
treegrid/api/treegrid_dragrowstart_event.md

@related: treegrid/configuration.md#dragndropofgridrows