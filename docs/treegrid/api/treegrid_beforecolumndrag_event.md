---
sidebar_label: beforeColumnDrag
title: beforeColumnDrag
---          

@short: fires before dragging of a column has started

@signature: beforeColumnDrag: (data: object, events: MouseEvent) => void | boolean;
	
@params:
- data		object		data object
- e		    Event		a native event object

@returns:
- result	boolean		false - to prevent dragging a column, otherwise true

@example:
treegrid.events.on("BeforeColumnDrag", function(data, events){
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


@relatedapi:
treegrid/api/treegrid_dragitem_config.md
treegrid/api/treegrid_aftercolumndrag_event.md
treegrid/api/treegrid_aftercolumndrop_event.md
treegrid/api/treegrid_beforecolumndrop_event.md
treegrid/api/treegrid_cancolumndrop_event.md
treegrid/api/treegrid_cancelcolumndrop_event.md
treegrid/api/treegrid_dragcolumnin_event.md
treegrid/api/treegrid_dragcolumnout_event.md
treegrid/api/treegrid_dragcolumnstart_event.md

@related: treegrid/configuration.md#dragndropofgridcolumns

@changelog: 

- added in v6.5
- Before v7.0, the event took one parameter - the column id. 
- Starting from v7.0, the event takes two parameters: **data** and **e**.