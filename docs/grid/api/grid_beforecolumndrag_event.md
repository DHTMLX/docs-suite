---
sidebar_label: beforeColumnDrag
title: beforeColumnDrag
---          

@short: fires before dragging of a column has started

@signature: {'beforeColumnDrag: (data: IDragInfo, events: MouseEvent) => void | boolean;'}
	
@params:
- data		object		data object
- events		    Event		a native event object

@returns:
- result	void | boolean		false - to prevent dragging a column, otherwise true

@example:
grid.events.on("BeforeColumnDrag", function(data, events){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Setup drag column (Pro)](https://snippet.dhtmlx.com/dfdlzpqb)

{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}

The data object contains the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>start</b></td>
			<td>(<i>string</i>) the id of a column, from which the dragging process has started</td>
		</tr>
        <tr>
			<td><b>source</b></td>
			<td>(<i>string[]</i>) an array with ids of dragged columns</td>
		</tr>
        <tr>
			<td><b>target</b></td>
			<td>(<i>string</i>) the id of a potential target column</td>
		</tr>
    </tbody>
</table>

@changelog:

- added in v6.5
- Before v7.0, the event took one parameter - the column id. 
- Starting from v7.0, the event takes two parameters: **data** and **e**.

[comment]: # (@relatedapi:)
[comment]: # ([](grid/api/grid_dragitem_config.md)
[comment]: # ([](grid/api/grid_aftercolumndrag_event.md)
[comment]: # ([](grid/api/grid_aftercolumndrop_event.md)
[comment]: # ([](grid/api/grid_beforecolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancolumndrop_event.md)
[comment]: # ([](grid/api/grid_cancelcolumndrop_event.md)
[comment]: # ([](grid/api/grid_dragcolumnin_event.md)
[comment]: # ([](grid/api/grid_dragcolumnout_event.md)
[comment]: # ([](grid/api/grid_dragcolumnstart_event.md)

[comment]: # (@related: grid/configuration.md#drag-n-drop-of-grid-columns)
