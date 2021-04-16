---
sidebar_label: getProperties
title: getProperties
---          

@short: returns an object with the available configuration attributes of the control

@params:
- id	string  optional, the id of a radio button

@returns:
param   object      an object either with the available attributes of the control and their values, or with the available attributes of the radio button and their values


@example:
var form = new dhx.Form("form_container", { 
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

@template: api_method
@descr:
The returned object of the **RadioGroup** control can contain the following configuration attributes:

<table class="webixdoc_links">
	<tbody>
		<tr>
			<td class="webixdoc_links0"><b>options</b></td>
			<td>(<i>object</i>) an object with options of a RadioGroup</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
			<tr>
			<td class="webixdoc_links0"><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a RadioGroup control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control, applied for all radio buttons in a group</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value, applied for all radio buttons in a group</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value, applied for all radio buttons in a group</td>
		</tr>
    </tbody>
</table>

### RadioButton properties

<table class="webixdoc_links">
	<tbody>
			<tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string</i>) the text label of a radio button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a radio button</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0


