---
sidebar_label: Form Select properties
title: JavaScript Form - Select Properties 
description: You can explore the Properties of the Select control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Select properties

### Usage

~~~js
{
	type: "select",
	name?: string,
	id?: string,
	options: [
		{
			value: string | number,
			content: string,
			disabled?: boolean,
		},
		// more options
	],
	value?: string | number,

	css?: string,
	disabled?: boolean,
	height?: string | number | "content", // "content" by default
	hidden?: boolean,
	padding?: string | number,
	required?: boolean, // false by default
	validation?: (input: string | number | boolean) => boolean,
	width?: string | number | "content", // "content" by default
	
	icon?: string,

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

<table>
	<tbody>
    	<tr>
			<td><b>type</b></td>
			<td>(required) the type of a control, set it to "select" </td>
		</tr>
		<tr>
			<td><b>name</b></td>
			<td>(optional) the name of a control </td>
		</tr>
		<tr>
			<td><b>id</b></td>
			<td>(optional) the id of a control, auto-generated if not set </td>
		</tr>
       	<tr>
			<td><b>options</b></td>
			<td>(required) an array of Select options, each option is an object with a set of <i>key:value</i> pairs - attributes of options and their values:
            	<ul>
                	<li><b>value</b> - (required) sets the value for the select option</li>
                    <li><b>content</b> - (required) the content displayed in the select option</li>
					<li><b>disabled</b> - (optional) defines whether the option is enabled (<i>false</i>) or disabled (<i>true</i>) </li>
                </ul>
            </td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(optional) the initial value of the select control </td>
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
			<td>(optional) defines whether a control is hidden</td>
		</tr>
         <tr>
			<td><b>padding</b></td>
			<td>(optional) sets padding between a cell and a border of the Select control</td>
		</tr>	
		<tr>
			<td><b>required</b></td>
			<td>(optional) <a href="../../../work_with_form#validating-form">defines whether a control is required</a></td>
		</tr>
		<tr>
			<td><b>validation</b></td>
			<td>(optional) <a href="../../../work_with_form#validation-rules">the validation function</a>, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(optional) the width of a control</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(optional) the name of an <a href="../../../../helpers/icon">icon</a> from the used icon font</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(optional) invisible label that will be used to identify the input on the server side</td>
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
			<td>(optional) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(optional) a message that appears in case of successful validation of the control value</td>
		</tr>
		<tr>
			<td><b>errorMessage</b></td>
			<td>(optional) a message that appears in case of error during validation of the control value</td>
		</tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/yo9w9o2t?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [Select](form/select.md)