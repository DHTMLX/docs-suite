---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Input Method 
description: You can explore the getProperties method of the Input control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getProperties()

@short: returns an object with the available configuration attributes of the control

@signature: {'getProperties(): IInputProps;'}

@returns:
An object with the available attributes of the control and their values.

@example:
var form = new dhx.Form("form_container", {
    rows: [
        {
            type: "input",
            name: "input",
            label: "Name",
            icon: "dxi dxi-magnify",
            placeholder: "John Doe"           
        } 
    ]
});

form.getItem("input").getProperties();
// -> the returned object
{
	autocomplete: false,
	errorMessage: "",
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	icon: "dxi dxi-magnify",
	inputType: "text",
	label: "Name",
	labelPosition: "top",
	labelWidth: "",
	max: undefined,
	maxlength: undefined,
	min: undefined,
	minlength: undefined,
	padding: 0,
	placeholder: "John Doe",
	preMessage: "",
	readOnly: false,
	required: false,
	successMessage: "",
	validation: undefined,
	width: "content"	
}

@descr:

The returned object of the **Input** control can contain the following configuration attributes:

<table>
	<tbody>
        <tr>
			<td><b>inputType</b></td>
			<td>(<i>string</i>) the type of an input: "text", "password", "number"</td>
		</tr>
		<tr>
			<td><b>min</b></td>
			<td>(<i>string|number</i>) the minimal value allowed in the input. <br/>The attribute works only with the input type: "number". </td>
		</tr>
		<tr>
			<td><b>max</b></td>
			<td>(<i>string|number</i>) the maximal value allowed in the input. <br/>The attribute works only with the input type: "number". </td>
		</tr>
        <tr>
			<td><b>validation</b></td>
			<td>(<i>object|function</i>) the rule of input validation
            </td>
		</tr>
        <tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
        <tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
         <tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Input control</td>
		</tr>
		<tr>
			<td><b>minlength</b></td>
			<td>(<i>string|number</i>) the minimum number of characters allowed in the input. <br/> The attribute works with the following input types: "text", "password".</td>
		</tr>
		<tr>
			<td><b>maxlength</b></td>
			<td>(<i>string|number</i>) the maximum number of characters allowed in the input. <br/>The attribute works with the following input types: "text", "password".</td>
		</tr>
        <tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
        <tr>
			<td><b>readOnly</b></td>
			<td>(<i>boolean</i>) defines whether an input is readonly</td>
		</tr>
        <tr>
			<td><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="../../../../helpers/icon">icon</a> from the used icon font</td>
		</tr>
        <tr>
			<td><b>placeholder</b></td>
			<td>(<i>string</i>) a tip for the input</td>
		</tr>
        <tr>
			<td><b>autocomplete</b></td>
			<td>(<i>boolean</i>) enables/disables the autocomplete functionality of the input</td>
		</tr>
        <tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
        <tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
        <tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
        <tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
        <tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
        <tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
        <tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
        <tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0
