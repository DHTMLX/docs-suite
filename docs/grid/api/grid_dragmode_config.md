---
sidebar_label: dragMode
title: dragMode
---          

@short: enables drag-n-drop in Grid

```todoapi ```


@type: string

@example: 
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    dragMode:"source"
});


@template:	api_config
@descr: 
Drag-n-drop can work in three modes: 

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0">"target"</td>
			<td>a grid takes rows from other grids, while its rows can't be dragged out of it</td>
		</tr>
        <tr>
			<td class="webixdoc_links0">"source"</td>
			<td>a grid allows dragging its rows out and can't take rows from other grids</td>
		</tr>
        <tr>
			<td class="webixdoc_links0">"both"</td>
			<td>a grid both takes rows from other grids and allows dragging its rows out as well</td>
		</tr>
    </tbody>
</table>


@relatedsample: https://snippet.dhtmlx.com/qx9a86ax	Grid. Setup Drag Mode

@related: grid/initialization.md#initializegrid
grid/configuration.md#dragndropofgridrows

@relatedapi: 
- grid/api/grid_afterrowdrag_event.md
- grid/api/grid_afterrowdrop_event.md
- grid/api/grid_beforerowdrag_event.md
- grid/api/grid_beforerowdrop_event.md
- grid/api/grid_canrowdrop_event.md
- grid/api/grid_cancelrowdrop_event.md
- grid/api/grid_dragrowin_event.md
- grid/api/grid_dragrowout_event.md
- grid/api/grid_dragrowstart_event.md
