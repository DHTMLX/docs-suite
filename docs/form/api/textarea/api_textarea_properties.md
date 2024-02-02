---
sidebar_label: Form Textarea properties
title: JavaScript Form - Textarea Properties 
description: You can explore the Properties of the Textarea control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Textarea properties

### Usage

~~~js
{
    type: "textarea",
    name?: string,
    id?: string,
    value?: string,
    
    css?: string,
    disabled?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    hidden?: boolean, // false by default
    padding?: string | number, // "8px" by default
    required?: boolean, // false by default
    validation?: string | (input: string | number) => boolean,
    width?: string | number | "content", // "content" by default

    maxlength?: number | string,
    minlength?: number | string,
    placeholder?: string, 
    readOnly?: boolean, // false by default
    resizable?: boolean, // false by default

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
            <td>(required) the type of a control, set it to "textarea"</td>
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
            <td>(optional) the initial value of the textarea</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(optional) adds style classes to a control</td>
        </tr>
        <tr>
            <td><b>disabled</b></td>
            <td>(optional) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>), <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>height</b></td>
            <td>(optional) the height of a control, <i>"content"</i> by default</td>
        </tr>
        <tr>
            <td><b>hidden</b></td>
            <td>(optional) defines whether a control is hidden, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(optional) sets padding between a cell and a border of the Textarea control, <i>"8px"</i> by default</td>
        </tr>
        <tr>
            <td><b>required</b></td>
            <td>(optional) <a href="../../../work_with_form#validating-form">defines whether a control is required</a>, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>validation</b></td>
            <td>(optional) <a href="../../../work_with_form#validation-rules">the rule of input validation</a>. Can be set in two ways:<ul><li>as a predefined string value:<ol>- "email" - validEmail</ol><ol>- "integer" - validInteger</ol><ol>- "numeric" - validNumeric</ol><ol>- "alphanumeric" - validAplhaNumeric</ol><ol>- "IPv4" - validIPv4</ol></li><li>as a <i>function</i> that defines a custom validation rule. It takes as a parameter the value typed in the input and returns <i>true</i>, if the entered value is valid.</li></ul></td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of a control, <i>"content"</i> by default</td>
        </tr>
        <tr>
            <td><b>maxlength</b></td>
            <td>(optional) the maximum <a href="../../../work_with_form#number-of-allowed-characters">number of characters allowed in the textarea</a></td>
        </tr>
        <tr>
            <td><b>minlength</b></td>
            <td>(optional) the minimum <a href="../../../work_with_form#number-of-allowed-characters">number of characters allowed in the textarea</a></td>
        </tr>
        <tr>
            <td><b>placeholder</b></td>
            <td>(optional) a tip for the textarea</td>
        </tr>
        <tr>
            <td><b>readOnly</b></td>
            <td>(optional) defines whether a textarea is readonly, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>resizable</b></td>
            <td>(optional) adds a resizer icon into a textarea, if set to <i>true</i>, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>hiddenLabel</b></td>
            <td>(optional) makes the label invisible, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>label</b></td>
            <td>(optional) specifies a label for a control</td>
        </tr>
        <tr>
            <td><b>labelPosition</b></td>
            <td>(optional) defines the position of a label: "left" | "top", <i>"top"</i> by default</td>
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
            <td>(optional) a message that appears in case of error during validation of the control value </td>
        </tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/mt93jzrk?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [Textarea](form/textarea.md)
