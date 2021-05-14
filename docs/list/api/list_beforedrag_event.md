---
sidebar_label: beforeDrag
title: beforeDrag
---          

@short: fires before dragging of an item has started 

@signature: {'beforeDrag: (data: object, events: MouseEvent) => void | boolean;'}

@returns:
- result	void | boolean		false - to block dragging of an item, otherwise true

@example:
list.events.on("BeforeDrag", function(data, events) {
    // your logic here
    return false;
});



@descr:

**Related sample**: [List. List Events](https://snippet.dhtmlx.com/iwt1yd61)

The data object can contain the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>start</b></td>
			<td>(<i>string</i>) the id of an item, from which the dragging process has started</td>
		</tr>
        <tr>
			<td><b>source</b></td>
			<td>(<i>string[]</i>) an array with ids of dragged items</td>
		</tr>
        <tr>
			<td><b>target</b></td>
			<td>(<i>string</i>) the id of a potential target item</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0


@relatedapi:
list/api/list_afterdrag_event.md
list/api/list_afterdrop_event.md
list/api/list_beforedrop_event.md
list/api/list_canceldrop_event.md
list/api/list_candrop_event.md
list/api/list_dragin_event.md
list/api/list_dragout_event.md
list/api/list_dragstart_event.md


