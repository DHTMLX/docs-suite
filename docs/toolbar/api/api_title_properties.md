---
sidebar_label: Toolbar Title properties
title: JavaScript Toolbar - Title Properties 
description: You can explore the Title properties of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Toolbar Title properties

### Usage

~~~js
const data = [
	{
		type: "title",
		id?: string | number,
		parent?: string,
		value?: string,

		html?: string,
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
			<td>(required) the item type, set it to "title". If not specified - the <a href="../../navitem">"navItem"</a> type is applied by default.</td>
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
			<td>(optional) the value of the Title control. You need to set either the <b>value</b> or <b>html</b> property to the title</td>
		</tr>
        <tr>
			<td><b>html</b></td>
			<td>(optional) a string with HTML that should be inserted into the title</td>
		</tr>
		<tr>
			<td><b>tooltip</b></td>
			<td>(optional) a tooltip for the control</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(optional) adds a custom CSS class</td>
		</tr>
		<tr>
			<td><b>disabled</b></td>
			<td>(optional) defines whether a control is disabled</td>
		</tr>
        <tr>
			<td><b>hidden</b></td>
			<td>(optional) defines whether a control is hidden</td>
		</tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/dwynhb7o?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related article:** [Title](toolbar/title.md)