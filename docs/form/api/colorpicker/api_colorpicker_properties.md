---
sidebar_label: Form Colorpicker properties
title: JavaScript Form - Colorpicker Properties 
description: You can explore the Properties of the Colorpicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Colorpicker properties

### Usage

~~~js
{
    type: "colorpicker",
    name?: string,
    id?: string, // must be unique if set, auto-generated if not set
    value?: string,
    
    css?: string,
    disabled?: boolean, // false by default
    editable?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    hidden?: boolean, // false by default
    padding?: string | number,
    required?: boolean, // false by default
    validation?: (value: string) => boolean,
    width?: string | number | "content", // "content" by default
    
    customColors?: string[],
    grayShades?: boolean, // true by default
    icon?: string,
    mode?: "palette" | "picker", // "palette" by default
    palette?: string[][],
    paletteOnly?: boolean, // false by default
    pickerOnly?: boolean, // false by default
    placeholder?: string,

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
            <td>(required) the type of a control, set it to "colorpicker"</td>
        </tr>
        <tr>
            <td><b>name</b></td>
            <td>(optional) the name of a control</td>
        </tr>
        <tr>
            <td><b>id</b></td>
            <td>(optional) the id of a control, must be <b>unique</b> if set, auto-generated if not set</td>
        </tr>
        <tr>
            <td><b>value</b></td>
            <td>(optional) the value of a colorpicker</td>
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
            <td><b>editable</b></td>
            <td>(optional) allows a user to enter the value of the control manually, <i>false</i> by default</td>
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
            <td>(optional) sets padding between a cell and a border of the ColorPicker control</td>
        </tr>
        <tr>
            <td><b>required</b></td>
            <td>(optional) <a href="../../../work_with_form/#validating-form">defines whether a control is required</a>, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>validation</b></td>
            <td>(optional) <a href="../../../work_with_form/#validation-rules">the validation function</a>, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of a control, <i>"content"</i> by default</td>
        </tr>
        <tr>
            <td><b>customColors</b></td>
            <td>(optional) shows a section with custom colors in the bottom part of the ColorPicker</td>
        </tr>
        <tr>
            <td><b>grayShades</b></td>
            <td>(optional) defines whether the section with gray shades is displayed in the palette, <i>true</i> by default</td>
        </tr>
        <tr>
            <td><b>icon</b></td>
            <td>(optional) the CSS class name of an <a href="../../../../helpers/icon/">icon</a> from the used icon font</td>
        </tr>
        <tr>
            <td><b>mode</b></td>
            <td>(optional) the mode of a control: "palette" (default), "picker"</td>
        </tr>
        <tr>
            <td><b>palette</b></td>
            <td>(optional) contains arrays of colors you want to be shown in a colorpicker</td>
        </tr>
        <tr>
            <td><b>paletteOnly</b></td>
            <td>(optional) defines whether ColorPicker is shown only the palette mode, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>pickerOnly</b></td>
            <td>(optional) defines whether ColorPicker is shown only the picker mode, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>placeholder</b></td>
            <td>(optional) a tip for the input</td>
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
            <td>(optional) a message that appears in case of error during validation of the control value</td>
        </tr>
    </tbody>
</table>

## Example

<iframe src="https://snippet.dhtmlx.com/n52dl19s?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [ColorPicker](form/colorpicker.md)