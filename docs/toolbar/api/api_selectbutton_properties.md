---
sidebar_label: Toolbar SelectButton properties
title: JavaScript Toolbar - SelectButton Properties 
description: You can explore the SelectButton properties of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Toolbar SelectButton properties

### Usage

~~~js
const data = [
	{
		type: "selectButton";
		id?: string | number;
		parent?: string | number;
		value?: string;
		css?: string | string[];
		icon?: string;
		items?: IMenuElement[]; // ISpacer | ISeparator | INavItem | IMenuItem | ICustomHTML
		tooltip?: string;
		count?: number | string;
		countColor?: "danger" | "secondary" | "primary" | "success";
		hidden?: boolean;
		disabled?: boolean;
    },
	// more Toolbar controls
]
~~~

### Description

<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(required) the type of a control, set it to "selectButton". If not specified - the <a href="../../navitem">"navItem"</a> type is applied by default.</td>
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
			<td>(optional) a value of the button</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(optional) adds style classes to a button</td>
		</tr>
        <tr>
			<td><b>icon</b></td>
			<td>(optional) the name of an <a href="../../customization#icons">icon</a> from the used icon font</td>
		</tr>
        <tr>
			<td><b>items</b></td>
			<td>(optional) an array of nested controls. You can find the full list of all available controls <a href="../../../menu/configuring_menu_items">here</a>. If the type of a nested control is not specified, the *menuItem* type will be applied by default.</td>
		</tr>
		 <tr>
			<td><b>tooltip</b></td>
			<td>(optional) a tooltip for the control</td>
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
			<td><b>hidden</b></td>
			<td>(optional) defines whether a button is hidden</td>
		</tr>
		<tr>
			<td><b>disabled</b></td>
			<td>(optional) defines whether a button is disabled</td>
		</tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/nqq5ej8w?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related article:** [SelectButton](toolbar/selectbutton.md)