---
sidebar_label: Sidebar MenuItem properties
title: JavaScript Sidebar - Sidebar MenuItem Properties 
description: You can explore the Sidebar MenuItem properties of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Sidebar MenuItem properties

### Usage

~~~js
const data = [
	{
		type: "menuItem",
		id?: string | number,
		parent?: string,
		value?: string,	
		items?: IMenuElement[], // ISpacer | ISeparator | IMenuItem
	
		count?: number,
		countColor?: "danger" | "secondary" | "primary" | "success",
		hotkey?: string,
		html?: string,
		icon?: string,
		tooltip?: string,

		css?: string | string[],
		disabled?: boolean,
		hidden?: boolean,
    },
	// more Sidebar controls
]
~~~

### Description

<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(required) the type of a control, set it to "menuItem". If not specified - the <a href="../../navitem">"navItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td><b>id</b></td>
			<td>(optional) the id of a control, auto-generated if not set</td>
		</tr>
		<tr>
			<td><b>parent</b></td>
			<td>(optional) the parent of the item</td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(optional)  a value for the menu item. You need to set either the <b>value</b> or <b>html</b> property to the item</td>
		</tr>
		<tr>
			<td><b>items</b></td>
			<td>(optional) an array of children controls (note that all the children should have the type <i>menuItem</i>)</td>
		</tr>
		<tr>
			<td><b>count</b></td>
			<td>(optional) a badge with a number</td>
		</tr>
        <tr>
			<td><b>countColor</b></td>
			<td>(optional) the color of a badge with number: "danger" | "secondary" | "primary" | "success" </td>
		</tr>
		<tr>
			<td><b>hotkey</b></td>
			<td>(optional) the name of a keyboard shortcut for a menu item</td>
		</tr>
		<tr>
			<td><b>html</b></td>
			<td>(optional) a string with HTML that should be inserted into the menu item</td>
		</tr>
        <tr>
			<td><b>icon</b></td>
			<td>(optional) the name of an <a href="../../../menu/customization">icon</a> from the used icon font</td>
		</tr>
		<tr>
			<td><b>tooltip</b></td>
			<td>(optional) a tooltip for the menuItem</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(optional) adds style classes</td>
		</tr>
		<tr>
			<td><b>disabled</b></td>
			<td>(optional) defines whether an item is disabled</td>
		</tr>
		<tr>
			<td><b>hidden</b></td>
			<td>(optional) defines whether a control is hidden</td>
		</tr>
    </tbody>
</table>

**Related article:** [MenuItem](sidebar/menuitem.md)