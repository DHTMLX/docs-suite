---
sidebar_label: Toolbar ImageButton properties
title: JavaScript Toolbar - ImageButton Properties 
description: You can explore the ImageButton properties of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Toolbar ImageButton properties

### Usage

~~~js
const data = [
	{
		type: "imageButton",
		id?: string | number,
		parent?: string | number,
		src: string,
		
		count?: number,
		countColor?: "danger" | "secondary" | "primary" | "success",
		group?: string,
		hotkey?: string,
		multiClick?: boolean,
		tooltip?: string,

		css?: string | string[],
		disabled?: boolean,
		hidden?: boolean,
    },
	// more Toolbar controls
]
~~~

### Description

<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(required) the type of a control, set it to "imageButton". If not specified - the <a href="../../navitem">"navItem"</a> type is applied by default.</td>
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
			<td><b>src</b></td>
			<td>(required) the path to the image</td>
		</tr>
        <tr>
			<td><b>count</b></td>
			<td>(optional) a badge with a number</td>
		</tr>
        <tr>
			<td><b>countColor</b></td>
			<td>(optional) the color of a badge with number: "danger" | "secondary" | "primary" | "success"</td>
		</tr>
		<tr>
			<td><b>group</b></td>
			<td>(optional) defines the name of a group of controls a button belongs to. If one of the buttons in the group becomes active, all others automatically become inactive</td>
		</tr>
        <tr>
			<td><b>hotkey</b></td>
			<td>(optional) the name of the hot key for the button</td>
		</tr>
		<tr>
			<td><b>multiClick</b></td>
			<td>(optional) if <i>true</i> - the "click" event will fire multiple times when the button is clicked and held; if <i>false</i> - the "click" event will fire on each click of the button
           </td>
		</tr>
		<tr>
			<td><b>tooltip</b></td>
			<td>(optional) a tooltip for the button</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(optional) adds style classes to a button </td>
		</tr>
		<tr>
			<td><b>disabled</b></td>
			<td>(optional) defines whether a button is disabled</td>
		</tr>
		<tr>
			<td><b>hidden</b></td>
			<td>(optional) defines whether a button is hidden</td>
		</tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/vdiha09g?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

**Related article:** [ImageButton](toolbar/image_button.md)