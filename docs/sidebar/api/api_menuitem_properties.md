---
sidebar_label: MenuItem properties
title: JavaScript Sidebar - Sidebar MenuItem Properties 
description: You can explore the Sidebar MenuItem properties of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Sidebar MenuItem properties

<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "menuItem". If not specified - the <a href="../../navitem">"navItem"</a> type is applied by default.</td>
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
			<td>(<i>string</i>)  a value for the menu item. You need to set either the <b>value</b> or <b>html</b> property to the item</td>
		</tr>
		<tr>
			<td><b>html</b></td>
			<td>(<i>string</i>) optional, a string with HTML that should be inserted into the menu item</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes</td>
		</tr>
        <tr>
			<td><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="../../../menu/fa_icons">icon</a> from the used icon font</td>
		</tr>
        <tr>
			<td><b>items</b></td>
			<td>(<i>array</i>) an array of children controls (note that all the children should have the type <i>menuItem</i>)</td>
		</tr>
        <tr>
			<td><b>hotkey</b></td>
			<td>(<i>string</i>) the name of a keyboard shortcut for a menu item</td>
		</tr>
		<tr>
			<td><b>tooltip</b></td>
			<td>(<i>string</i>) a tooltip for the menuItem</td>
		</tr>
         <tr>
			<td><b>count</b></td>
			<td>(<i>number|string</i>) a badge with a number</td>
		</tr>
        <tr>
			<td><b>countColor</b></td>
			<td>(<i>string</i>) the color of a badge with number: "danger" | "secondary" | "primary" | "success" </td>
		</tr>
		<tr>
			<td><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a control is hidden</td>
		</tr>
		<tr>
			<td><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether an item is disabled</td>
		</tr>
    </tbody>
</table>
