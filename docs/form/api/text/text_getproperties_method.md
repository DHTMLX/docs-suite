---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Text Method 
description: You can explore the getProperties method of the Text control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getProperties()

@short: returns an object with the available configuration attributes of the control

@signature: {'getProperties(): object;'}

@returns:
An object with the available attributes of the control and their values.

@example:
const form = new dhx.Form("form_container", {
    rows: [
        {
            type: "text",
            name: "text",
            label: "text",                      
            value: "I am a nice text"
        }
    ]
});

form.getItem("text").getProperties();

// the returned object
{
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	inputType: "text",
	label: "text",
	labelPosition: "top",
	labelWidth: "",
	padding: 0,
	width: "content"
}

@descr:

The returned object of the **Text** control can contain the following configuration attributes:

<table>
	<tbody>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>inputType</b></td>
			<td>(<i>string</i>)  the type of an input: "text", "password", "number".</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
		<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
		<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
        <tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Text control</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0
