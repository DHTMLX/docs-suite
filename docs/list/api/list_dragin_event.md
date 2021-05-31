---
sidebar_label: dragIn
title: JavaScript List - dragIn Event 
description: You can explore the dragIn event of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# dragIn

@short: fires when an item is dragged to another potential target

@signature: {'dragIn: (data: object, events: MouseEvent) => void | boolean;'}

@params:
- `data: object` - data object
- `events: MouseEvent` - a native HTML event object

@example:
list.events.on("DragIn", function(data, events) {
    // your logic here
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

[comment]: # (@relatedapi: list/api/list_afterdrag_event.md list/api/list_afterdrop_event.md list/api/list_beforedrag_event.md list/api/list_beforedrop_event.md list/api/list_canceldrop_event.md list/api/list_candrop_event.md list/api/list_dragout_event.md list/api/list_dragstart_event.md)
