---
sidebar_label: beforeDrag
title: beforeDrag
---          

@short: fires before dragging of an item has started 

@signature: beforeDrag: (data: object, events: MouseEvent) => void | boolean;

@returns:
- result	boolean		false - to block dragging of an item, otherwise true

@example:
dataview.events.on("BeforeDrag", function(data, events) {
    // your logic here
    return false;
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
dataview/api/dataview_beforedrop_event.md
dataview/api/dataview_canceldrop_event.md
dataview/api/dataview_candrop_event.md
dataview/api/dataview_dragin_event.md
dataview/api/dataview_dragout_event.md
dataview/api/dataview_dragstart_event.md

[Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)