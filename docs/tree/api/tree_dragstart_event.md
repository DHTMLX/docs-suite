---
sidebar_label: dragStart
title: dragStart
---          

@short: fires when dragging of an item has started 

@signature: {'dragStart: (data: IDragInfo, events: MouseEvent) => void;'}

@example:
tree.events.on("DragStart", function(data, events) {
    // your logic here
});



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

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)


@relatedapi:
tree/api/tree_afterdrag_event.md
tree/api/tree_afterdrop_event.md
tree/api/tree_beforedrag_event.md
tree/api/tree_beforedrop_event.md
tree/api/tree_canceldrop_event.md
tree/api/tree_candrop_event.md
tree/api/tree_dragin_event.md
tree/api/tree_dragout_event.md

@changelog: added in v7.0
