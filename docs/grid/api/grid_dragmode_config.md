---
sidebar_label: dragMode
title: JavaScript Grid - dragMode Config 
description: You can explore the dragMode config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragMode

@short: Optional. Enables drag-n-drop in Grid

@signature: {'dragMode?: "target" | "source" | "both";'}

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
		// columns config
	],
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

:::info
Enable [multiselection](grid/configuration.md#multiple-selection-of-grid-cells) of rows to allow a user to drag-n-drop multiple rows at once.
:::

**Related sample**: [Grid. Drag-n-drop between grids](https://snippet.dhtmlx.com/qx9a86ax)

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#drag-n-drop-between-grids)

[comment]: # (@relatedapi: - grid/api/grid_afterrowdrag_event.md - grid/api/grid_afterrowdrop_event.md - grid/api/grid_beforerowdrag_event.md - grid/api/grid_beforerowdrop_event.md - grid/api/grid_canrowdrop_event.md - grid/api/grid_cancelrowdrop_event.md - grid/api/grid_dragrowin_event.md - grid/api/grid_dragrowout_event.md - grid/api/grid_dragrowstart_event.md)
 