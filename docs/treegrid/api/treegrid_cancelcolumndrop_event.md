---
sidebar_label: cancelColumnDrop
title: cancelColumnDrop
---          

@short: fires on moving a mouse pointer out of borders of a column while dragging the column

@signature: cancelColumnDrop: (data: object, events: MouseEvent) => any;

@params:
- data		object		data object
- e		    Event		a native event object

@example:
treegrid.events.on("CancelColumnDrop", function(data, events) {
  // your logic here
});


@template: api_event
@descr:
The data object contains the following parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>start</b></td>
			<td>(<i>string</i>) the id of a column, from which the dragging process has started</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>source</b></td>
			<td>(<i>string[]</i>) an array with ids of dragged columns</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>target</b></td>
			<td>(<i>string</i>) the id of a potential target column</td>
		</tr>
    </tbody>
</table>


@changelog: added in v7.0


@relatedapi:
treegrid/api/treegrid_dragitem_config.md
treegrid/api/treegrid_aftercolumndrag_event.md
treegrid/api/treegrid_aftercolumndrop_event.md
treegrid/api/treegrid_beforecolumndrag_event.md
treegrid/api/treegrid_beforecolumndrop_event.md
treegrid/api/treegrid_cancolumndrop_event.md
treegrid/api/treegrid_dragcolumnin_event.md
treegrid/api/treegrid_dragcolumnout_event.md
treegrid/api/treegrid_dragcolumnstart_event.md

@related: treegrid/configuration.md#dragndropofgridcolumns