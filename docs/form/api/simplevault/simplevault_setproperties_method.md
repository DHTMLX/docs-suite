---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Simple Vault Method 
description: You can explore the setProperties method of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(propertyConfig: ISimpleVaultProps): void;'}

@params:
- `propertyConfig: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("simplevault").setProperties({
    labelWidth: "140px", 
    labelPosition: "top"
});
 
@descr:
The method invokes the [](form/api/simplevault/simplevault_afterchangeproperties_event.md) and [](form/api/simplevault/simplevault_beforechangeproperties_event.md) events.

It is possible to change values of the following configuration attributes of the **SimpleVault** control:

<table>
	<tbody>
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
			<td>(<i>string|number</i>) sets padding between a cell and a border of the SimpleVault control</td>
		</tr>	
    <tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
    <tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
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
    <tr>
			<td><b>fieldName</b></td>
			<td>(<i>string</i>) the name of the file field in the form data that is sent to the server </td>
		</tr>
    <tr>
			<td><b>params</b></td>
			<td>(<i>object</i>) extra parameters for sending an XMLHttpRequest</td>
		</tr>
    <tr>
			<td><b>singleRequest</b></td>
			<td>(<i>boolean</i>) defines whether files are sent in one request</td>
		</tr>
    <tr>
			<td><b>target</b></td>
			<td>(<i>string</i>) mandatory, sets an URL to the server-side script that will process file upload</td>
		</tr>
  </tbody>
</table>

@changelog: added in v7.0
