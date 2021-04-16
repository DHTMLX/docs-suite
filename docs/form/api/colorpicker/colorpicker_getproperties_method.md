---
sidebar_label: getProperties
title: getProperties
---          

@short: returns an object with the available configuration attributes of the control

@returns:
param   object      an object with the available attributes of the control and their values


@example:
var form = new dhx.Form("form_container", {
    rows: [
        {
            type: "colorpicker",
            name: "colorpicker",
            labelWidth: "200px",
            label: "Choose your color"
        }
    ]
});

form.getItem("colorpicker").getProperties();

// -> the returned object:
{
	customColors: [],
	editable: false,
	errorMessage: "",
	grayShades: true,
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	icon: "",
	label: "Choose your color",
	labelPosition: "top",
	labelWidth: "200px",
	padding: 0,
	palette: [Array(7), Array(7), ...],
	placeholder: "",
	preMessage: "",
	required: false,
	successMessage: "",
	validation: undefined,
	width: "content"
}

@template: api_method
@descr:
The returned object of the **ColorPicker** control can contain the following configuration attributes:

<table class="webixdoc_links">
	<tbody>
		<tr>
			<td class="webixdoc_links0"><b>validation</b></td>
			<td>(<i>function</i>) the validation function, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
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
			<td>(<i>string|number</i>) sets padding between a cell and a border of the ColorPicker control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="https://docs.dhtmlx.com/suite/helpers__icon.html">icon</a> from the used icon font</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>placeholder</b></td>
			<td>(<i>string</i>) a tip for the input</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>editable</b></td>
			<td>(<i>boolean</i>) allows a user to enter the value of the control manually</td>
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
			<td class="webixdoc_links0"><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
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
		<tr>
			<td class="webixdoc_links0"><b>mode</b></td>
			<td>(<i>string</i>) the mode of a control: "palette" (default), "picker"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>palette</b></td>
			<td>(<i>array</i>) contains arrays of colors you want to be shown in a colorpicker</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>customColors</b></td>
			<td>(<i>array</i>) shows a section with custom colors in the bottom part of the ColorPicker</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>grayShades</b></td>
			<td>(<i>boolean</i>) defines whether the section with gray shades is displayed in the palette</td>
		</tr>
    </tbody>
</table>


@changelog: added in v7.0


