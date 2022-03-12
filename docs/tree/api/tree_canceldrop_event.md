---
sidebar_label: cancelDrop
title: JavaScript Tree - cancelDrop Event 
description: You can explore the cancelDrop event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# cancelDrop

@short: fires on moving a mouse pointer out of item's borders while dragging the item

@signature: {'cancelDrop: (data: IDragInfo, events: MouseEvent) => void;'}

@params:
- `data: object` - data object
- `events: MouseEvent` - a native HTML event object

@example:
tree.events.on("cancelDrop", function(data, events) {
    // your logic here
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

The data object can contain the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>start</b></td>
			<td>(<i>string, number</i>) the id of an item, from which the dragging process has started</td>
		</tr>
        <tr>
			<td><b>source</b></td>
			<td>(<i>array</i>) an array with ids of dragged items</td>
		</tr>
        <tr>
			<td><b>target</b></td>
			<td>(<i>string, number</i>) the id of a potential target item</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0

[comment]: # (@relatedapi: tree/api/tree_afterdrag_event.md tree/api/tree_afterdrop_event.md tree/api/tree_beforedrag_event.md tree/api/tree_beforedrop_event.md tree/api/tree_candrop_event.md tree/api/tree_dragin_event.md tree/api/tree_dragout_event.md tree/api/tree_dragstart_event.md)
