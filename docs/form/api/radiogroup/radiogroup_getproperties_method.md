---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Radiogroup Method 
description: You can explore the getProperties method of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getProperties()

@short: returns an object with the available configuration attributes of the control

@signature: {'getProperties(id?: string): object;'}

@params:
- `id: string` - optional, the id of a radio button

@returns:
An object either with the available attributes of the control and their values, or with the available attributes of the radio button and their values.

@example:
const form = new dhx.Form("form_container", { 
    rows: [
        {
            id: "radiogroup",
            type: "radioGroup",
            required: true,
            label: "Radio Group",
            labelWidth: 140,
            labelPosition: "left",
            helpMessage: " Help information",
            value: "1",
            options: {
                rows: [
                    {
						id: "1,"
                        type: "radioButton",
                        text: "Select 1",
                        value: "1",
                    },
                    {
						id: "2",
                        type: "radioButton",
                        text: "Select 2",
                        value: "2"
                    },
                ]
            }
        }
     ]
});
 
form.getItem("radiogroup").getProperties();

// -> the returned object for the RadioGroup control
{
	errorMessage: "",
	height: "content",
	helpMessage: " Help information",
	hiddenLabel: false,
	label: "Radio Group",
	labelPosition: "left",
	labelWidth: 140,
	options: {rows: Array(2), full: false},
	padding: 0,
	preMessage: "",
	required: true,
	successMessage: "",
	width: "content"
}

form.getItem("radiogroup").getProperties("1");

// -> the returned object for the specified radio button of the control
{
	height: "content"
	padding: 0
	text: "Select 1"
	width: "content"
}

@descr:

The returned object of the **RadioGroup** control can contain the following configuration attributes:

<table>
	<tbody>
		<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value, applied for all radio buttons in a group</td>
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
			<td><b>options</b></td>
			<td>(<i>object</i>) an object with options of a RadioGroup</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a RadioGroup control</td>
		</tr>
		<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control, applied for all radio buttons in a group</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value, applied for all radio buttons in a group</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

The returned object of a **radio button** of the RadioGroup control can contain the following configuration attributes:

<table>
	<tbody>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a radio button</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a radio button</td>
		</tr>
		<tr>
			<td><b>text</b></td>
			<td>(<i>string</i>) the text label of a radio button</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a radio button</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0
