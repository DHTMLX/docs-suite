---
sidebar_label: Form Checkbox properties
title: JavaScript Form - Checkbox Properties 
description: You can explore the Properties of the Checkbox control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Checkbox properties

### Usage

~~~js
{
	type: "checkbox",
    name?: string,
    id?: string,
    value?: string,

    checked?: boolean,
    css?: string,
    disabled?: boolean,
    height?: string | number | "content", // "content" by default
    hidden?: boolean,
    hiddenLabel?: boolean, // false by default
    label?: string,
    labelPosition?: "left" | "top", // "top" by default
    labelWidth?: string | number,
    padding?: string | number,
    required?: boolean, // false by default
    text?: string,
    width?: string | number | "content", // "content" by default

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
            <td>(required) the type of a control, set it to "checkbox"</td>
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
            <td>(optional) the value of a checkbox</td>
        </tr>
        <tr>
            <td><b>checked</b></td>
            <td>(optional) defines the initial state of a checkbox</td>
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
            <td>(optional) defines whether a checkbox is hidden</td>
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
            <td><b>padding</b></td>
            <td>(optional) sets padding between a cell and a border of a Checkbox control</td>
        </tr>
        <tr>
            <td><b>required</b></td>
            <td>(optional) <a href="../../../work_with_form#validating-form">defines whether a control is required</a></td>
        </tr>
        <tr>
            <td><b>text</b></td>
            <td>(optional) optional, the text value of a control. It's placed to the right of the control.</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of a control</td>
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

<iframe src="https://snippet.dhtmlx.com/scs712zl?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

**Related article:** [Checkboxes](form/checkbox.md)