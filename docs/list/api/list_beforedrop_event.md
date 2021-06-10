---
sidebar_label: beforeDrop
title: JavaScript List - beforeDrop Event 
description: You can explore the beforeDrop event of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeDrop

@short: fires before the user has finished dragging of an item and released the mouse button

@signature: {'beforeDrop: (data: IDragInfo, events: MouseEvent) => void | boolean;'}

@params:
- `data: object` - data object
- `events: MouseEvent` - a native HTML event object

@returns:
Return `false` to block the default action; otherwise, `true`.

@example:
list.events.on("BeforeDrop", function(data, events) {
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

[comment]: # (@relatedapi: list/api/list_afterdrag_event.md list/api/list_afterdrop_event.md list/api/list_beforedrag_event.md list/api/list_canceldrop_event.md list/api/list_candrop_event.md list/api/list_dragin_event.md list/api/list_dragout_event.md list/api/list_dragstart_event.md)
