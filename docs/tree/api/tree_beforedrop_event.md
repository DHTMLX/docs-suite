---
sidebar_label: beforeDrop
title: beforeDrop
---          

@short: fires before the user has finished dragging an item and released the mouse button

@signature: beforeDrop: (data: object, events: MouseEvent) => void | boolean;

@params:
- data		object		data object
- e		    Event		a native event object

@returns:
- result	boolean, void		false - to block the default action, otherwise true

@example:
tree.events.on("BeforeDrop", function(data, events) {
    // your logic here
    return false;
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
tree/api/tree_afterdrop_event.md
tree/api/tree_beforedrag_event.md
tree/api/tree_canceldrop_event.md
tree/api/tree_candrop_event.md
tree/api/tree_dragin_event.md
tree/api/tree_dragout_event.md
tree/api/tree_dragstart_event.md

[Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)