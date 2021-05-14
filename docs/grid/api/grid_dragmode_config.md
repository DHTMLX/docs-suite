---
sidebar_label: dragMode
title: dragMode
---          

@short: enables drag-n-drop in Grid

@signature: {'dragMode?: "target" | "both" | "source"'}

@example:
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    dragMode:"source"
});

@descr:
 
Drag-n-drop can work in three modes: 

<table>
	<tbody>
        <tr>
			<td>"target"</td>
			<td>a grid takes rows from other grids, while its rows can't be dragged out of it</td>
		</tr>
        <tr>
			<td>"source"</td>
			<td>a grid allows dragging its rows out and can't take rows from other grids</td>
		</tr>
        <tr>
			<td>"both"</td>
			<td>a grid both takes rows from other grids and allows dragging its rows out as well</td>
		</tr>
    </tbody>
</table>


**Related sample**: [Grid. Setup Drag Mode](https://snippet.dhtmlx.com/qx9a86ax)

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#drag-n-drop-of-grid-rows)

[comment]: # (@relatedapi: - grid/api/grid_afterrowdrag_event.md - grid/api/grid_afterrowdrop_event.md - grid/api/grid_beforerowdrag_event.md - grid/api/grid_beforerowdrop_event.md - grid/api/grid_canrowdrop_event.md - grid/api/grid_cancelrowdrop_event.md - grid/api/grid_dragrowin_event.md - grid/api/grid_dragrowout_event.md - grid/api/grid_dragrowstart_event.md)
 