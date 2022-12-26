---
sidebar_label: Form Text properties
title: JavaScript Form - Text Properties 
description: You can explore the Properties of the Text control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Text properties

### Usage

~~~js
{
	type: "text",
    name?: string,
	id?: string,
	value?: number | string,

	css?: string,
	disabled?: boolean,
	height?: string | number | "content", // "content" by default
	hidden?: boolean,
	padding?: string | number,
    width?: string | number | "content", // "content" by default

    inputType?: "text" | "password" | "number", // "text" by default
	
    hiddenLabel?: boolean, // false by default
	label?: string,
	labelPosition?: "left" | "top", // "top" by default
	labelWidth?: string | number,

    helpMessage?: string,
	preMessage?: string,
	successMessage?: string,
	errorMessage?: string,
}
~~~

### Description

<table>
    <tbody>
        <tr>
            <td><b>type</b></td>
            <td>(required) the type of a control, set it to "text"</td>
        </tr>
        <tr>
            <td><b>name</b></td>
            <td>(optional) the name of a control</td>
        </tr>
        <tr>
            <td><b>id</b></td>
            <td>(optional) the id of a control, auto-generated if not set</td>
        </tr>
        <tr>
            <td><b>value</b></td>
            <td>(optional) the value of a text control</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(optional) adds style classes to a control</td>
        </tr>
        <tr>
            <td><b>disabled</b></td>
            <td>(optional) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>)</td>
        </tr>
        <tr>
            <td><b>height</b></td>
            <td>(optional) the height of a control</td>
        </tr>
        <tr>
            <td><b>hidden</b></td>
            <td>(optional) defines whether a control is hidden</td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(optional) sets padding between a cell and a border of the Text control</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of a control</td>
        </tr>
        <tr>
            <td><b>inputType</b></td>
            <td>(optional) sets the type of an input: "text", "password", "number". <br />Using the "number" type for the input sets the type of the <b>value</b> attribute to "number". <br />Use the "password" value to specify a field for entering a password.</td>
        </tr>
        <tr>
            <td><b>hiddenLabel</b></td>
            <td>(optional) invisible label that will be used to identify the input on the server side</td>
        </tr>
        <tr>
            <td><b>label</b></td>
            <td>(optional) specifies a label for a control</td>
        </tr>
        <tr>
            <td><b>labelPosition</b></td>
            <td>(optional) defines the position of a label: "left"|"top"</td>
        </tr>
        <tr>
            <td><b>labelWidth</b></td>
            <td>(optional) sets the width of the label of a control</td>
        </tr>
        <tr>
            <td><b>helpMessage</b></td>
            <td>(optional) adds a help message to a control</td>
        </tr>
        <tr>
            <td><b>preMessage</b></td>
            <td>(optional) a message that contains instructions for interacting with the control</td>
        </tr>
        <tr>
            <td><b>successMessage</b></td>
            <td>(optional) a message that appears in case of successful validation of the control value</td>
        </tr>
        <tr>
            <td><b>errorMessage</b></td>
            <td>(optional) a message that appears in case of error during validation of the control value</td>
        </tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/ikyyekxq?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [Text](form/text.md)