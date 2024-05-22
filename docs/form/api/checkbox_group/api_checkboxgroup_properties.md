---
sidebar_label: Form CheckboxGroup properties
title: JavaScript Form - Checkbox Group Properties 
description: You can explore the Properties of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# CheckboxGroup properties

## Usage

~~~js
{
    type: "checkboxGroup",
    name?: string,
    id?: string,
    options: {
        rows?: [
            {
                type: "checkbox",
                id?: string,
                value?: string,
                checked?: boolean, 
                css?: string,
                height?: string | number | "content",
                hidden?: boolean,
                padding?: string | number,
                text?: string,
                width?: string | number | "content",
            },
            // more checkboxes
        ],
        cols?: [
            {
                type: "checkbox",
                id?: string,
                value?: string,
                checked?: boolean,
                css?: string,
                height?: string | number | "content",
                hidden?: boolean,
                padding?: string | number,
                text?: string,
                width?: string | number | "content",
            },
            // more checkboxes
        ],
        css?: string,
        height?: string | number | "content", // "content" by default
        padding?: string | number, 
        width?: string | number | "content", // "content" by default
    },
    value?: {
        [id: string]: boolean | string,
        // more values
    },
    
    css?: string,
    disabled?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    hidden?: boolean, // false by default
    padding?: string | number,
    required?: boolean, // false by default
    width?: string | number | "content", // "content" by default
    
    hiddenLabel?: boolean, // false by default
    label?: string,
    labelPosition?: "left"|"top", // "top" by default
    labelWidth?: string | number,

    helpMessage?: string,
    preMessage?: string,
    successMessage?: string,
    errorMessage?: string,
}
~~~

## Description

### CheckboxGroup properties

<table>
    <tbody>
        <tr>
            <td><b>type</b></td>
            <td>(required) the type of a control, set it to "checkboxGroup"</td>
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
            <td><b>options</b></td>
            <td>(required) an object with options of a CheckboxGroup. The object can contain the followingattributes:<ul><li><b>rows</b> - (optional) arranges <a href="../../../../form/api/checkbox_group/api_checkboxgroup_properties#properties-of-a-checkbox-of-checkboxgroup">checkboxes</a> inside the CheckboxGroup control vertically</li><li><b>cols</b> - (optional) arranges <a href="../../../../form/api/checkbox_group/api_checkboxgroup_properties#properties-of-a-checkbox-of-checkboxgroup">checkboxes</a> inside the CheckboxGroup control horizontally</li><li><b>css</b> - (optional) adds style classes to a CheckboxGroup</li><li><b>height</b> - (optional) the height of a CheckboxGroup</li><li><b>padding</b> - (optional) sets padding between a cell and a border of a CheckboxGroup</li><li><b>width</b> - (optional) the width of a CheckboxGroup</li></ul></td>
        </tr>
        <tr>
            <td><b>value</b></td>
            <td>(optional) an object with the initial value of a CheckboxGroup. The value contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> defines the initial state of the checkbox. The option has a higher priority than the <b>checked</b> attribute of a checkbox.</td>
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
            <td>(optional) the height of a control, <i>"content"</i> by default</td>
        </tr>
        <tr>
            <td><b>hidden</b></td>
            <td>(<i>boolean</i>) defines whether a CheckboxGroup is hidden, <i>false</i> by default </td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(optional) sets padding between a cell and a border of a CheckboxGroup control</td>
        </tr>
        <tr>
            <td><b>required</b></td>
            <td>(optional) <a href="../../../work_with_form#validating-form">defines whether a control is required</a>, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of a control, <i>"content"</i> by default</td>
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

### Properties of a Checkbox of CheckboxGroup

<table>
    <tbody>
        <tr>
            <td><b>type</b></td>
            <td>(required) the type of a control, set it to "checkbox"</td>
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
            <td>(optional) adds style classes to a a checkbox</td>
        </tr>
        <tr>
            <td><b>height</b></td>
            <td>(optional) the height of a checkbox</td>
        </tr>
        <tr>
            <td><b>hidden</b></td>
            <td>(optional) defines whether a checkbox is hidden</td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(optional) sets padding between a cell and a border of a checkbox</td>
        </tr>
        <tr>
            <td><b>text</b></td>
            <td>(optional) the text label of a checkbox</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of a checkbox</td>
        </tr>
    </tbody>
</table>

## Example

<iframe src="https://snippet.dhtmlx.com/p89u4ovb?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [CheckboxGroup](form/checkboxgroup.md)
