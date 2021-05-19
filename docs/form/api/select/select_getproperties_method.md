---
sidebar_label: getProperties()
title: getProperties()
---          

@short: returns an object with the available configuration attributes of the control

@signature: {'getProperties(): ISelectProps;'}

@returns:
An object with the available attributes of the control and their values.

@example:
var form = new dhx.Form("form_container", {
    rows: [
        {
            type: "select",
            name: "select",
            label: "select",
            labelWidth: "50px",
            width:"200px",
            options: [
                {
                    value: "1",
                    content: "1",
                    disabled: true
                },
                {
                    value: "2",
                    content: "2"
                }
            ]        
        }  
    ]
});

form.getItem("select").getProperties();

// -> the returned object
{
	errorMessage: "",
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	icon: "",
	label: "select",
	labelPosition: "top",
	labelWidth: "50px",
	padding: 0,
	preMessage: "",
	successMessage: "",
	validation: undefined,
	width: "200px"
}

@descr:

The returned object of the **Select** control can contain the following configuration attributes:

<table>
	<tbody>
		<tr>
			<td><b>validation</b></td>
			<td>(<i>function</i>) the validation function</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="../../../helpers/icon">icon</a> from the used icon font</td>
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
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Select control</td>
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
