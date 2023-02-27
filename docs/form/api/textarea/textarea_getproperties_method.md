---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Textarea Method 
description: You can explore the getProperties method of the Textarea control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getProperties()

@short: returns an object with the available configuration attributes of the control

@signature: {'getProperties(): ITextareaProps;'}

@returns:
An object with the available attributes of the control and their values.

@example:
const form = new dhx.Form("form_container", {
    rows: [
        {
            type: "textarea",
            name:"textarea",
            label: "textarea",
            labelWidth: "70px",
            value: "Some nice text",
            width:400
        }
    ]
});

form.getItem("textarea").getProperties();

// the returned object
{
	errorMessage: "",
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	label: "textarea",
	labelPosition: "top",
	labelWidth: "70px",
	maxlength: undefined,
	minlength: undefined,
	padding: 0,
	placeholder: "",
	preMessage: "",
	readOnly: false,
	required: false,
	successMessage: "",
	validation: undefined,
	width: 400
}

@descr:

The returned object of the **Textarea** control can contain the following configuration attributes:

<table>
	<tbody>
    	<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value	</td>
		</tr>
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
			<td><b>maxlength</b></td>
			<td>(<i>string|number</i>) the maximum number of characters allowed in the textarea</td>
		</tr>
		<tr>
			<td><b>minlength</b></td>
			<td>(<i>string|number</i>) the minimum number of characters allowed in the textarea</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Textarea control</td>
		</tr>
		<tr>
			<td><b>placeholder</b></td>
			<td>(<i>string</i>) a tip for the textarea</td>
		</tr>
		<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>readOnly</b></td>
			<td>(<i>boolean</i>) defines whether a textarea is readonly</td>
		</tr>
    	<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
    	<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
		<tr>
			<td><b>validation</b></td>
			<td>(<i>object,function</i>) the rule of input validation
	    </td>
		</tr>
    	<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0
