---
sidebar_label: Ribbon Block properties
title: JavaScript Ribbon - Block Properties 
description: You can explore the Block properties of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Ribbon Block properties

### Usage

~~~js
const data = [
	{
		type: "block",
		id?: string | number,
		parent?: string,
		items?: IBlockElement[],

		direction?: "row" | "col",
		title?: string,
		
		css?: "string",
		disabled?: boolean,
		hidden?: boolean,
	}
]
~~~

### Description

<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(required) the type of a control, set it to "block". If not specified - the <a href="../../navitem">"navItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td><b>id</b></td>
			<td>(optional) the id of a control, auto-generated if not set</td>
		</tr>
         <tr>
			<td><b>parent</b></td>
			<td>(optional) the parent of the block</td>
		</tr>
        <tr>
			<td><b>items</b></td>
			<td>(optional) an array of nested controls</td>
		</tr>
        <tr>
			<td><b>direction</b></td>
			<td>(optional) defines the layout of controls within the block: "col" or "row"; controls that do not fit in one row/column are automatically placed in the next row/column</td>
		</tr>
        <tr>
			<td><b>title</b></td>
			<td>(optional) sets a text label beneath the block</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(optional) adds a custom CSS class to the block</td>
		</tr>
		<tr>
			<td><b>disabled</b></td>
			<td>(optional) defines whether a block is disabled</td>
		</tr>
        <tr>
			<td><b>hidden</b></td>
			<td>(optional) defines whether a block is hidden</td>
		</tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/nlviu82g?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="350"></iframe>

**Related article:** [Block](ribbon/block.md)