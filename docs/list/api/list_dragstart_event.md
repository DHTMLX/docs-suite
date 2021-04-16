---
sidebar_label: dragStart
title: dragStart
---          

@short: fires when dragging of an item has started 

@signature: focusChange: (focusIndex: number, id: string) => void;

@example:
list.events.on("DragStart", function(data, events) {
    // your logic here
});

@template: api_event
@descr:
The data object can contain the following parameters:

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
list/api/list_afterdrag_event.md
list/api/list_afterdrop_event.md
list/api/list_beforedrag_event.md
list/api/list_beforedrop_event.md
list/api/list_canceldrop_event.md
list/api/list_candrop_event.md
list/api/list_dragin_event.md
list/api/list_dragout_event.md

[List. List Events](https://snippet.dhtmlx.com/iwt1yd61)

