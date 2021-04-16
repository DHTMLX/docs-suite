---
sidebar_label: afterDrop
title: afterDrop
---          

@short: fires before the user has finished dragging an item but after the mouse button is released 

@signature: afterDrop: (data: object, events: MouseEvent) => void;

@example:
tree.events.on("AfterDrop", function(data, events) {
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
tree/api/tree_afterdrag_event.md
tree/api/tree_beforedrag_event.md
tree/api/tree_beforedrop_event.md
tree/api/tree_canceldrop_event.md
tree/api/tree_candrop_event.md
tree/api/tree_dragin_event.md
tree/api/tree_dragout_event.md
tree/api/tree_dragstart_event.md

[Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)