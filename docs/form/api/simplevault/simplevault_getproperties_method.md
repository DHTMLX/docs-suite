---
sidebar_label: getProperties
title: getProperties
description: description
---          

@short: returns an object with the available configuration attributes of the control

@returns:
param   object      an object with the available attributes of the control and their values

@example:
var form = new dhx.Form("form_container", {
    rows: [
        {
            type: "simpleVault",
            name:"simplevault",
            label: "i am simpleVault",
            labelWidth: "120px",
            labelPosition: "left",
            disabled: false,
            required: false
        }
    ]
});

form.getItem("simplevault").getProperties();
// -> the returned object
{
	errorMessage: "",
	fieldName: "simplevault",
	height: "content",
	helpMessage: "Help information",
	hiddenLabel: false,
	label: "Simple Vault",
	labelPosition: "left",
	labelWidth: 140,
	padding: 0,
	params: undefined,
	preMessage: "",
	required: true,
	singleRequest: false,
	successMessage: "",
	target: "https://docs.dhtmlx.com/suite/backend/upload",
	width: "content",
}

@template: api_method
@descr:
The returned object of the **SimpleVault** control can contain the following configuration attributes:

``` todo нужна ли таблица
<table class="webixdoc_links">
	<tbody>
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
			<td>(<i>string|number</i>) sets padding between a cell and a border of the SimpleVault control</td>
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
			<td class="webixdoc_links0"><b>fieldName</b></td>
			<td>(<i>string</i>) the name of the file field in the form data that is sent to the server </td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>params</b></td>
			<td>(<i>object</i>) extra parameters for sending an XMLHttpRequest</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>singleRequest</b></td>
			<td>(<i>boolean</i>) defines whether files are sent in one request</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>target</b></td>
			<td>(<i>string</i>) mandatory, sets an URL to the server-side script that will process file upload</td>
		</tr>
  </tbody>
</table>

``` 

@changelog: added in v7.0
