---
sidebar_label: cancelColumnDrop
title: cancelColumnDrop
---          

@short: fires on moving a mouse pointer out of borders of a column while dragging the column

@signature: cancelColumnDrop: (data: object, events: MouseEvent) => void;

<!-- @params:
- data		object		data object
- e		    Event		a native event object -->

@example:
grid.events.on("CancelColumnDrop", function(data, events) {
  // your logic here
});


@template: api_event
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

@changelog: added in v7.0

@relatedapi:
grid/api/grid_dragitem_config.md
grid/api/grid_aftercolumndrag_event.md
grid/api/grid_aftercolumndrop_event.md
grid/api/grid_beforecolumndrag_event.md
grid/api/grid_beforecolumndrop_event.md
grid/api/grid_cancolumndrop_event.md
grid/api/grid_dragcolumnin_event.md
grid/api/grid_dragcolumnout_event.md
grid/api/grid_dragcolumnstart_event.md

@related: grid/configuration.md#dragndropofgridcolumns

@edition: pro

