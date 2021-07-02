---
sidebar_label: Sidebar NavItem properties
title: JavaScript Sidebar - Sidebar NavItem Properties 
description: You can explore the Sidebar NavItem properties of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Sidebar NavItem properties

<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "navItem"</td>
		</tr>
        <tr>
			<td><b>id</b></td>
			<td>(<i>string, number</i>) the id of a control, auto-generated if not set</td>
		</tr>
		<tr>
			<td><b>parent</b></td>
			<td>(<i>string</i>) the parent of the item</td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(<i>string</i>) a value of the navItem. You need to set either the <b>value</b> or <b>html</b> property to the navItem</td>
		</tr>
		<tr>
			<td><b>html</b></td>
			<td>(<i>string</i>) optional, a string with HTML that should be inserted into the navItem</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes to a navItem</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(<i>string</i>) an <a href="../../customization">icon</a> of the navItem</td>
		</tr>
		<tr>
			<td><b>items</b></td>
			<td>(<i>array</i>) an array of nested controls. You can find the full list of all available controls <a href="../../../menu/configuring_menu_items">here</a>. If the type of a nested control is not specified, the <i>menuItem</i> type will be applied by default. </td>
		</tr>
        <tr>
			<td><b>twoState</b></td>
			<td>(<i>boolean</i>) adds two states to the item: active (pressed) and inactive  (unpressed)</td>
		</tr>
        <tr>
			<td><b>active</b></td>
			<td>(<i>boolean</i>) sets the state of a twoState item</td>
		</tr>
		<tr>
			<td><b>group</b></td>
			<td>(<i>string</i>) defines the name of a group of controls a navItem belongs to. If one of the navItems in the group becomes active, all others automatically become inactive</td>
		</tr>
		<tr>
			<td><b>hotkey</b></td>
			<td>(<i>string</i>) the name of a keyboard shortcut for a menu item</td>
		</tr>
        <tr>
			<td><b>count</b></td>
			<td>(<i>number</i>) a badge with a number</td>
		</tr>
        <tr>
			<td><b>countColor</b></td>
			<td>(<i>string</i>) the color of a badge with number: "danger" | "secondary" | "primary" | "success" </td>
		</tr>
       <tr>
			<td><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether an item is hidden</td>
		</tr>
		<tr>
			<td><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether an item is disabled</td>
		</tr>
    </tbody>
</table>
