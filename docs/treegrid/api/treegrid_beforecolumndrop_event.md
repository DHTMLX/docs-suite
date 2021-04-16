---
sidebar_label: beforeColumnDrop
title: beforeColumnDrop
---          

@short: fires before the user has finished dragging and released the mouse button over a target column

@signature: beforeColumnDrop: (data: object, events: MouseEvent) => void | boolean;
	
@params:
- data		object		data object
- e		    Event		a native event object

@returns:
- result	boolean		false - to block the default action, otherwise true


@example:
treegrid.events.on("BeforeColumnDrop", function(data, events){
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
treegrid/api/treegrid_beforecolumndrag_event.md
treegrid/api/treegrid_cancolumndrop_event.md
treegrid/api/treegrid_cancelcolumndrop_event.md
treegrid/api/treegrid_dragcolumnin_event.md
treegrid/api/treegrid_dragcolumnout_event.md
treegrid/api/treegrid_dragcolumnstart_event.md

@related: treegrid/configuration.md#dragndropofgridcolumns	

@changelog:

- added in v6.5
- Before v7.0, the event took two parameters - **sourceId** and **targetId**. 
- In v7.0, the parameters were replaced with new ones: **data** and **e**.