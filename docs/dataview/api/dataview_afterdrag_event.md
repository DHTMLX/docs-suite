---
sidebar_label: afterDrag
title: JavaScript DataView - afterDrag Event 
hide_title: true
description: You can explore the afterDrag event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterDrag

@short: fires after dragging of an item is finished

@signature: {'afterDrag: (data: IDragInfo, events: MouseEvent) => any;'}

@params:
- `data: object` - data object
- `events: MouseEvent` - a native HTML event object

@example:
dataview.events.on("AfterDrag", function(data, events) {
    // your logic here
});

@descr:

**Related sample**: [Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)

The `data` object contains the following parameters:

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

[comment]: # (@relatedapi: dataview/api/dataview_afterdrop_event.md dataview/api/dataview_beforedrag_event.md dataview/api/dataview_beforedrop_event.md dataview/api/dataview_canceldrop_event.md dataview/api/dataview_candrop_event.md dataview/api/dataview_dragin_event.md dataview/api/dataview_dragout_event.md dataview/api/dataview_dragstart_event.md)
