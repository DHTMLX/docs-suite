---
sidebar_label: beforeDrop
title: JavaScript DataView - beforeDrop Event 
hide_title: true
description: You can explore the beforeDrop event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeDrop

@short: fires before the user has finished dragging an item and released the mouse button

@signature: {'beforeDrop: (data: IDragInfo, events: MouseEvent) => void | boolean;'}

@params:
- `data: object` - data object
- `events: MouseEvent` - a native HTML event object

@returns:
Return `false` to block the default action; otherwise, `true`.

@example:
dataview.events.on("BeforeDrop", function(data, events) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)

The data object contains the following parameters:

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

[comment]: # (@relatedapi:
dataview/api/dataview_afterdrag_event.md dataview/api/dataview_afterdrop_event.md dataview/api/dataview_beforedrag_event.md dataview/api/dataview_canceldrop_event.md dataview/api/dataview_candrop_event.md dataview/api/dataview_dragin_event.md dataview/api/dataview_dragout_event.md dataview/api/dataview_dragstart_event.md)
