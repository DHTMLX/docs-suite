---
sidebar_label: Custom HTML properties
title: Menu Custom HTML properties
---

<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(<i>string</i>) required, the item type, set it to "customHTML". If not specified - the <a href="../../menu/configuring_menu_items#menuitem">"menuItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td><b>id</b></td>
			<td>(<i>string</i>) the id of an item, auto-generated if not set</td>
		</tr>
		<tr>
			<td><b>parent</b></td>
			<td>(<i>string</i>) the parent of the item</td>
		</tr>
        <tr>
			<td><b>html</b></td>
			<td>(<i>string</i>) a string with HTML that should be inserted into the item</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes</td>
		</tr>
		<tr>
			<td><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a control is hidden</td>
		</tr>
    </tbody>
</table>