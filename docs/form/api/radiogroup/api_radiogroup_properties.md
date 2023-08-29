---
sidebar_label: Form Radiogroup properties
title: JavaScript Form - RadioGroup and RadioButton Properties 
description: You can explore the Properties of the RadioGroup and RadioButton controls of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# RadioGroup and RadioButton properties

### Usage

~~~js
{
	type: "radiogroup",
	name?: string,
	id?: string,
	options: {
		rows?: [
			{
				type: "radiobutton",
				id?: string,
				value: string,
				checked?: boolean,
				css?: string,
				height?: string | number | "content",
				hidden?: boolean,
				padding?: string | number,
				text?: string,
				width?: string | number | "content",
			},
			// more radio buttons
		],
		cols?: [
			{
				type: "radiobutton",
				id?: string,
				value: string,
				checked?: boolean,
				css?: string,
				height?: string | number | "content",
				hidden?: boolean,
				padding?: string | number,
				text?: string,
				width?: string | number | "content",
			},
			// more radio buttons
		],
		css?: string,
		height?: string | number | "content",
		padding?: string | number,
		width?: string | number | "content",
	},
	value?: string,

	css?: string,
	disabled?: boolean,
	height?: string | number | "content", // "content" by default
	hidden?: boolean,
	padding?: string | number,
	required?: boolean, // false by default
	width?: string | number | "content", // "content" by default

	hiddenLabel?: boolean, // false by default
	label?: string,
	labelPosition?: "left" | "top", // "top" by default
	labelWidth?: string | number,
	
	helpMessage?: string,
	preMessage?: string,
	successMessage?: string,
	errorMessage?: string,
}
~~~

### Description

### RadioGroup properties

<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(required) the type of a control, set it to "radioGroup"</td>
		</tr>
		<tr>
			<td><b>name</b></td>
			<td>(optional) the name of a control</td>
		</tr>
		<tr>
			<td><b>id</b></td>
			<td>(optional) the id of a control, auto-generated if not set</td>
		</tr>
		<tr>
			<td><b>options</b></td>
			<td>(required) an object with options of a RadioGroup. The object can contain the following attributes:
				<ul>
					<li><b>rows</b> - (optional) arranges <a href="../../../../form/api/radiogroup/api_radiogroup_properties/#radiobutton-properties">radio buttons</a> inside the RadioGroup control vertically</li>
					<li><b>cols</b> - (optional) arranges <a href="../../../../form/api/radiogroup/api_radiogroup_properties/#radiobutton-properties">radio buttons</a> inside the RadioGroup control horizontally</li>
					<li><b>css</b> - (optional) adds style classes to a RadioGroup</li>
					<li><b>height</b> - (optional) the height of a RadioGroup </li>
					<li><b>padding</b> - (optional) sets padding between a cell and a border of a RadioGroup</li>
					<li><b>width</b> - (optional) the width of a RadioGroup</li>
				</ul></td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(optional) the initial value of a RadioGroup. The option has a higher priority than the <b>checked</b> attribute of a RadioButton</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(optional) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>disabled</b></td>
			<td>(optional) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>)</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(optional) the height of a control</td>
		</tr>
		<tr>
			<td><b>hidden</b></td>
			<td>(optional) defines whether a RadioGroup is hidden</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(optional) sets padding between a cell and a border of a RadioGroup control</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(optional) <a href="../../../work_with_form#validating-form">defines whether a control is required</a></td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(optional) the width of a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(optional) makes the label invisible</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(optional) specifies a label for a control</td>
		</tr>
    	<tr>
			<td><b>labelPosition</b></td>
			<td>(optional) defines the position of a label: "left"|"top"</td>
		</tr>
    	<tr>
			<td><b>labelWidth</b></td>
			<td>(optional) sets the width of the label of a control</td>
		</tr>
    	<tr>
			<td><b>helpMessage</b></td>
			<td>(optional) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>preMessage</b></td>
			<td>(optional) a message that contains instructions for interacting with the control, applied for all radio buttons in a group</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(optional) a message that appears in case of successful validation of the control value, applied for all radio buttons in a group</td>
		</tr>
		<tr>
			<td><b>errorMessage</b></td>
			<td>(optional) a message that appears in case of error during validation of the control value, applied for all radio buttons in a group</td>
		</tr>
    </tbody>
</table>

### RadioButton properties

<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(optional) the type of a control, set it to "radioButton"</td>
		</tr>
		<tr>
			<td><b>id</b></td>
			<td>(optional) the id of a control, auto-generated if not set</td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(required) the value of a radioButton</td>
		</tr>
		<tr>
			<td><b>checked</b></td>
			<td>(optional) defines the initial state of a radio button, only one radio button can be checked at a time</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(optional) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(optional) the height of a control</td>
		</tr>
		<tr>
			<td><b>hidden</b></td>
			<td>(optional) defines whether a radio button is hidden</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(optional) sets padding between a cell and a border of a radio button</td>
		</tr>
		<tr>
			<td><b>text</b></td>
			<td>(optional) the text label of a radio button</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(optional) the width of a control</td>
		</tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/ycp1cbct?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [RadioGroup](form/radiogroup.md)

