---
sidebar_label: Toolbar Spacer properties
title: JavaScript Toolbar - Spacer Properties 
description: You can explore the Spacer properties of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Toolbar Spacer properties

### Usage

~~~js
const data = [
	{
		type: "spacer";
		id?: string | number;
    },
	// more Toolbar controls
]
~~~

### Description


<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(required) the type of a control, set it to "spacer". If not specified - the <a href="../../navitem">"navItem"</a> type is applied by default.</td>
		</tr>
		<tr>
			<td><b>id</b></td>
			<td>(optional) the id of a control, auto-generated if not set</td>
		</tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/0wt6z7sc?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related article:** [Spacer](toolbar/spacer.md)