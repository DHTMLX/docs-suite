---
sidebar_label: Form Select properties
title: JavaScript Form - Select Properties 
description: You can explore the Properties of the Select control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Select properties

<table>
	<tbody>
    	<tr>
			<td><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "select" </td>
		</tr>
		<tr>
			<td><b>name</b></td>
			<td>(<i>string</i>) the name of a control </td>
		</tr>
		<tr>
			<td><b>id</b></td>
			<td>(<i>string|number</i>) the id of a control, auto-generated if not set </td>
		</tr>
       	<tr>
			<td><b>options</b></td>
			<td>(<i>array</i>) an array of Select options, each option is an object with a set of <i>key:value</i> pairs - attributes of options and their values:
            	<ul>
                	<li><b>value</b> - (<i>string|number</i>) mandatory, sets the value for the select option</li>
                    <li><b>content</b> - (<i>string</i>) mandatory, the content displayed in the select option</li>
					<li><b>disabled</b> - (<i>boolean</i>) optional, defines whether the option is enabled (<i>false</i>) or disabled (<i>true</i>) </li>
                </ul>
            </td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(<i>string/number</i>) the initial value of the select control </td>
		</tr>
		<tr>
			<td><b>validation</b></td>
			<td>(<i>function</i>) <a href="../../../work_with_form#validation-rules">the validation function</a>, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="../../../../helpers/icon">icon</a> from the used icon font</td>
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
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) <a href="../../../work_with_form#validating-form">defines whether a control is required</a></td>
		</tr>
		<tr>
			<td><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>)</td>
		</tr>
		<tr>
			<td><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a control is hidden</td>
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
