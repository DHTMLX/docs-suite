---
sidebar_label: dragIn
title: dragIn
---          

@short: fires when an item is dragged to another potential target

@signature: dragIn: (data: object, events: MouseEvent) => void | boolean;

@example:
dataview.events.on("DragIn", function(data, events) {
    // your logic here
});


@template: api_event
@descr:
The data object contains the following parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>start</b></td>
			<td>(<i>string</i>) the id of an item, from which the dragging process has started</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>source</b></td>
			<td>(<i>string[]</i>) an array with ids of dragged items</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>target</b></td>
			<td>(<i>string</i>) the id of a potential target item</td>
		</tr>
    </tbody>
</table>


@changelog: added in v7.0

@relatedapi:
dataview/api/dataview_afterdrag_event.md
dataview/api/dataview_afterdrop_event.md
dataview/api/dataview_beforedrag_event.md
dataview/api/dataview_beforedrop_event.md
dataview/api/dataview_canceldrop_event.md
dataview/api/dataview_candrop_event.md
dataview/api/dataview_dragout_event.md
dataview/api/dataview_dragstart_event.md

[Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)