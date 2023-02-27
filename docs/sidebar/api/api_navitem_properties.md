---
sidebar_label: Sidebar NavItem properties
title: JavaScript Sidebar - Sidebar NavItem Properties 
description: You can explore the Sidebar NavItem properties of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Sidebar NavItem properties

### Usage

~~~js
const data = [
	{
		type?: "navItem",
		id?: string | number,
		parent?: string,
		value?: string,
		items?: IMenuElement[], // ISpacer | ISeparator | INavItem | IMenuItem | ICustomHTML
		
		active?: boolean,
		count?: number,
		countColor?: "danger" | "secondary" | "primary" | "success",
		group?: string,
		hotkey?: string,
		html?: string,
		icon?: string,
		tooltip?: string,
		twoState?: boolean,

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
			<td>(optional) the type of a control, set it to "navItem"</td>
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
			<td>(optional) a value of the navItem. You need to set either the <b>value</b> or <b>html</b> property to the navItem</td>
		</tr>
		<tr>
			<td><b>items</b></td>
			<td>(optional) an array of nested controls. You can find the full list of all available controls <a href="../../../menu/configuring_menu_items">here</a>. If the type of a nested control is not specified, the <i>menuItem</i> type will be applied by default. </td>
		</tr>
        <tr>
			<td><b>active</b></td>
			<td>(optional) sets the state of a twoState item</td>
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
			<td><b>group</b></td>
			<td>(optional) defines the name of a group of controls a navItem belongs to. If one of the navItems in the group becomes active, all others automatically become inactive</td>
		</tr>
		<tr>
			<td><b>hotkey</b></td>
			<td>(optional) the name of a keyboard shortcut for a menu item</td>
		</tr>
		<tr>
			<td><b>html</b></td>
			<td>(optional) a string with HTML that should be inserted into the navItem</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(optional) an <a href="../../customization">icon</a> of the navItem</td>
		</tr>
		<tr>
			<td><b>tooltip</b></td>
			<td>(optional) a tooltip for the navItem</td>
		</tr>
		<tr>
			<td><b>twoState</b></td>
			<td>(optional) adds two states to the item: active (pressed) and inactive  (unpressed)</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(optional) adds style classes to a navItem</td>
		</tr>
		<tr>
			<td><b>disabled</b></td>
			<td>(optional) defines whether an item is disabled</td>
		</tr>
		<tr>
			<td><b>hidden</b></td>
			<td>(optional) defines whether an item is hidden</td>
		</tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/potv580p?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

**Related article:** [NavItem](sidebar/navitem.md)