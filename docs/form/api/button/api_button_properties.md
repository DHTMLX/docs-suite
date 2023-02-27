---
sidebar_label: Form Button properties
title: JavaScript Form - Button Properties 
description: You can explore the Properties of the Button control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Button properties

### Usage

~~~js
{
	type: "button",
	name?: string,
	id?: string,
	
	text?: string,
	submit?: boolean, // false by default
	url?: string,
	
	css?: string,
	disabled?: boolean,
	height?: string | number | "content", // "content" by default
	hidden?: boolean,
	padding?: string | number,
	width?: string | number | "content", // "content" by default

	// button view
	circle?: boolean,
	color?: "danger" | "secondary" | "primary" | "success", // "primary" by default
	full?: boolean, // false by default
	icon?: string,
	loading?: boolean, // false by default
	size?: "small" | "medium", // "medium" by default
	view?: "flat" | "link", // "flat" by default
}
~~~

### Description

<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(required) the type of a control, set it to "button" </td>
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
			<td><b>text</b></td>
			<td>(optional) the text label of a button </td>
		</tr>
		<tr>
			<td><b>submit</b></td>
			<td>(optional) enables the button to send form data to a server </td>
		</tr>
		<tr>
			<td><b>url</b></td>
			<td>(optional) the URL the post request with form data will be sent to. <br>The property is required if the <b>submit</b> property is set to <i>true</i><br/><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/ikyyekxq" target="_blank">Form. All controls</a>
			</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(optional) adds style classes to a control </td>
		</tr>
		<tr>
			<td><b>disabled</b></td>
			<td>(optional) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>) </td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(optional) the height of a control </td>
		</tr>
		<tr>
			<td><b>hidden</b></td>
			<td>(optional) defines whether a control is hidden</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(optional) sets padding between a cell and a border of a button control</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(optional) the width of a control </td>
		</tr>
		<tr>
			<td><b>circle</b></td>
			<td>(optional) makes the corners of a button round</td>
		</tr>
		<tr>
			<td><b>color</b></td>
			<td>(optional) defines the color scheme of a button: "danger"|"secondary"|"primary"|"success"</td>
		</tr>
		<tr>
			<td><b>full</b></td>
			<td>(optional) extends a button to the full width of a form</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(optional) an <a href="../../../../helpers/icon">icon</a> of the button</td>
		</tr>
		<tr>
			<td><b>loading</b></td>
			<td>(optional) adds a spinner into a button</td>
		</tr>
		<tr>
			<td><b>size</b></td>
			<td>(optional) defines the size of a button: "small"|"medium"</td>
		</tr>
		<tr>
			<td><b>view</b></td>
			<td>(optional) defines the look of a button: "flat"|"link"</td>
		</tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/qgxzwyfa?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="350"></iframe>

**Related article:** [Button](form/button.md)