---
sidebar_label: getProperties
title: getProperties
description: description
---          



@short: returns an object with the available configuration attributes of the control

@params:
- id	string  optional, the id of a checkbox

@returns:
param   object      an object either with the available attributes of the control and their values, or with the available attributes of the checkbox and their values

@example:
var form = new dhx.Form("form_container", { 
    rows: [
        {
            id: "checkboxGroup",
            type: "checkboxGroup",
            name: "checkboxGroup",
            required: true,
            label: "Checkbox Group",
            labelWidth: 140,
            labelPosition: "left",
            helpMessage: "Help information",
            padding: "50px",
            value: {
                first: true,
            },
            options: {
                padding: "50px",
                rows: [
                    {
                        id: "first",
                        type: "checkbox",
                        text: "Select 1",
                    },
                    {
                        id: "second",
                        type: "checkbox",
                        text: "Select 2",
                        checked: true
                    }
                ]
            }
        }
     ]
});
 
form.getItem("checkboxGroup").getProperties();
// -> the returned object for the CheckboxGroup control:
{
	errorMessage: "",
	height: "content",
	helpMessage: "Help information",
	hiddenLabel: false,
	label: "Checkbox Group",
	labelPosition: "left",
	labelWidth: 140,
	options: {...},
	padding: 0,
	preMessage: "",
	required: true,
	successMessage: "",
	width: "content"
}


form.getItem("checkboxGroup").getProperties("second");
// -> the returned object for the specified checkbox of the control:
{
	height: "content",
	padding: 0,
	text: "Select 2",
	width: "content"
}

@template: api_method
@descr:
The returned object of the **CheckboxGroup** control can contain the following configuration attributes:

<table class="webixdoc_links">
	<tbody>
		<tr>
			<td class="webixdoc_links0"><b>options</b></td>
			<td>(<i>object</i>) an object with options of a CheckboxGroup
			</td>
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
			<td class="webixdoc_links0"><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
	 <tr>
			<td class="webixdoc_links0"><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a CheckboxGroup control</td>
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
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
    </tbody>
</table>

### Checkbox properties

<table class="webixdoc_links">
	<tbody>
		<tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string</i>) the text label of a checkbox</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a checkbox</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a checkbox</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a checkbox</td>
		</tr>
	</tbody>
</table>

@changelog: added in v7.0
