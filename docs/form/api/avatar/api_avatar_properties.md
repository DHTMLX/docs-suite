---
sidebar_label: Form Avatar properties
title: JavaScript Form - Avatar Properties 
description: You can explore the Properties of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Avatar properties

### Usage

~~~js
{
    type: "avatar",
    name?: string,
    id?: string, // must be unique if set, auto-generated if not set

    target?: string,
    value?: object,

    hidden?: boolean, // false by default
    disabled?: boolean, // false by default
    readOnly?: boolean, // false by default

    removeIcon?: boolean, // true by default 
    circle?: boolean, // false by default
    icon?: string,
    placeholder?: string,
    preview?: string,
    alt?: string,
    size?: "small" | "medium" | "large" | number, // "medium" by default
    
    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number, 

    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // "top" by default
    hiddenLabel?: boolean, // false by default
    helpMessage?: string,
    required?: boolean, // false by default

    preMessage?: string,
    successMessage?: string,
    errorMessage?: string,

    validation?: (value: object) => boolean,

    accept?: string, // "image/*" by default
    fieldName?: string, // "file" by default
    autosend?: boolean, // false by default
    params?: { [key: string]: any },
    headerParams?: { [key: string]: any },
    updateFromResponse?: boolean  // true by default 
}
~~~

### Description

<table>
    <tbody>
        <tr>
            <td><b>type</b></td>
            <td>(required) the type of a control, set it to "avatar"</td>
        </tr>
        <tr>
            <td><b>name</b></td>
            <td>(optional) the name of a control</td>
        </tr>
        <tr>
            <td><b>id</b></td>
            <td>(optional) the id of a control, must be <b>unique</b> if set, auto-generated if not set</td>
        </tr>
        <tr id="target">
            <td><b>target</b></td>
            <td>(optional) sets an URL to the server-side script that will process file upload, the property is required when an image is sent to the server via the control</td>
        </tr>
        <tr>
            <td><b>value</b></td>
            <td>(optional) the value of an Avatar set as an object. The avatar object can contain the following properties:<ul><li><b>id</b> - (optional) the id of the file, auto-generated if not set</li><li><b>src</b> - (required) the path to the image. If the image is uploaded into the component without being sent to the server, a temporary path is formed. In case data is sent to the server, the server response must contain a path with the "src" key. The value of the key should be the absolute path to the image</li><li><b>file</b> - (optional) the <a href="https://developer.mozilla.org/en-US/docs/Web/API/File">File</a> object is formed when an image is loaded with the help of UI</li><li><b>path</b> - (optional) the path to the file on the computer starting from the name of the folder (in case a folder with files is added)</li><li><b>status</b> - (optional) the status of the file ("queue", "inprogress", "uploaded", or "failed") </li><li><b>progress</b> - (optional) the progress of the file upload</li><li><b>request</b> - (optional) an XMLHttpRequest object sent to the server when an upload begins</li></ul></td>
        </tr>
         <tr>
            <td><b>hidden</b></td>
            <td>(optional) defines whether a control is hidden, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>disabled</b></td>
            <td>(optional) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>), <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>readOnly</b></td>
            <td>(optional) sets the readonly mode for the control, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>removeIcon</b></td>
            <td>(optional) enables the possibility to clear the control by means of the UI, <i>true</i> by default</td>
        </tr>
        <tr>
            <td><b>circle</b></td>
            <td>(optional) sets the mode of displaying the control with rounded corners, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>icon</b></td>
            <td>(optional) allows setting the CSS class of an icon when there is no image uploaded, doesn't work together with the <b>preview</b> property</td>
        </tr>
        <tr>
            <td><b>placeholder</b></td>
            <td>(optional) allows setting a text to be visible when there is no image uploaded, doesn't work together with the <b>preview</b> property</td>
        </tr>
        <tr>
            <td><b>preview</b></td>
            <td>(optional) specifies the absolute path to the preview image. The preview image is visible, when the <b>value</b> is not defined</td>
        </tr>
        <tr>
            <td><b>alt</b></td>
            <td>(optional) sets the attribute of the &#60;img&#62; tag - an alternative text when there is no image uploaded</td>
        </tr>
        <tr>
            <td><b>size</b></td>
            <td>(optional) allows setting one of the three basic control's sizes, or applying a custom size, <i>"medium"</i> by default</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(optional) adds style classes to a control</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of a control, <i>"content"</i> by default</td>
        </tr>
        <tr>
            <td><b>height</b></td>
            <td>(optional) the height of a control, <i>"content"</i> by default</td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(optional) sets padding between a cell and a border of the Avatar control</td>
        </tr>
        <tr>
            <td><b>label</b></td>
            <td>(optional) specifies a label for the control</td>
        </tr>
        <tr>
            <td><b>labelWidth</b></td>
            <td>(optional) sets the label width of the control</td>
        </tr>
        <tr>
            <td><b>labelPosition</b></td>
            <td>(optional) defines the position of a label: "left" | "top", <i>"top"</i> by default</td>
        </tr>
        <tr>
            <td><b>hiddenLabel</b></td>
            <td>(optional) makes the label invisible, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>helpMessage</b></td>
            <td>(optional) adds a help message to a control</td>
        </tr>
        <tr>
            <td><b>required</b></td>
            <td>(optional) <a href="../../../work_with_form#validating-form">defines whether a control is required</a>, <i>false</i> by default</td>
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
            <td>(optional) a message that appears in case of an error during validation of the control value</td>
        </tr> 
        <tr>
            <td><b>validation</b></td>
            <td>(optional) the validation function, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
        </tr> 
        <tr>
            <td id="accept"><b>accept</b></td>
            <td>(optional) allows specifying the type/extension of the selected file, <i>"image/*"</i> by default. <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers">Check details</a></td>
        </tr>      
        <tr>
            <td><b>fieldName</b></td>
            <td>(optional) sets the file field name in the form data sent to the server, <i>"file"</i> by default</td>
        </tr>
        <tr>
            <td><b>autosend</b></td>
            <td>(optional) enables/disables automatic sending of an added file, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>params</b></td>
            <td>(optional) adds extra parameters for sending an XMLHttpRequest</td>
        </tr>
        <tr>
            <td><b>headerParams</b></td>
            <td>(optional) provides additional parameters for Request Headers</td>
        </tr>
        <tr>
            <td><b>updateFromResponse</b></td>
            <td>(optional) updates file attributes with the data from the server response, <i>true</i> by default</td>
        </tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/87u37hqc?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [Avatar](form/avatar.md)
