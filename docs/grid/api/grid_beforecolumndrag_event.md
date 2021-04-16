---
sidebar_label: beforeColumnDrag
title: beforeColumnDrag
---          

@short: fires before dragging of a column has started

@signature: beforeColumnDrag: (data: object, events: MouseEvent) => void | boolean;
	
<!-- @params:
- data		object		data object
- e		    Event		a native event object -->


@returns:
- result	boolean		false - to prevent dragging a column, otherwise true


@example:
grid.events.on("BeforeColumnDrag", function(data, events){
	// your logic here
    return false;
});


@template:	api_event
@descr:
{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}

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


@relatedsample:  https://snippet.dhtmlx.com/dfdlzpqb	Setup drag column (Pro)

 
@relatedapi:
grid/api/grid_dragitem_config.md
grid/api/grid_aftercolumndrag_event.md
grid/api/grid_aftercolumndrop_event.md
grid/api/grid_beforecolumndrop_event.md
grid/api/grid_cancolumndrop_event.md
grid/api/grid_cancelcolumndrop_event.md
grid/api/grid_dragcolumnin_event.md
grid/api/grid_dragcolumnout_event.md
grid/api/grid_dragcolumnstart_event.md

@related: grid/configuration.md#dragndropofgridcolumns
	

@changelog: 

- added in v6.5
- Before v7.0, the event took one parameter - the column id. 
- Starting from v7.0, the event takes two parameters: **data** and **e**.

@edition: pro