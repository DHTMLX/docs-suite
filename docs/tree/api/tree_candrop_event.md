---
sidebar_label: canDrop
title: canDrop
---          

@short: fires when a dragged item is over a target item

@signature: {'canDrop: (data: IDragInfo, events: MouseEvent) => void;'}

@example:
tree.events.on("CanDrop", function(data, events) {
    // your logic here
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

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

[comment]: # (@relatedapi: tree/api/tree_afterdrag_event.md tree/api/tree_afterdrop_event.md tree/api/tree_beforedrag_event.md tree/api/tree_beforedrop_event.md tree/api/tree_canceldrop_event.md tree/api/tree_dragin_event.md tree/api/tree_dragout_event.md tree/api/tree_dragstart_event.md)
