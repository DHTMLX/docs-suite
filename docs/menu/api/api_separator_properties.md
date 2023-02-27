---
sidebar_label: Menu Separator properties
title: JavaScript Menu - Separator Properties 
description: You can explore the Separator properties of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Menu Separator properties

### Usage

~~~js
const data = [
	{
		type: "separator",
		id?: string | number,
	}
]
~~~

### Description

<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(required) the item type, set it to "separator". If not specified - the <a href="../../configuring_menu_items#menuitem">"menuItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td><b>id</b></td>
			<td>(optional) the ID of a control, auto-generated if not set</td>
		</tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/71tybx5j?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

**Related article:** [Separator](menu/configuring_menu_items.md#separator)