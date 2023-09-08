---
sidebar_label: Form Simple Vault properties
title: JavaScript Form - Simple Vault Properties 
description: You can explore the Properties of the Simple Vault control  of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Simple Vault properties

### Usage

~~~js
{
	type: "simplevault",
    name?: string,
    id?: string,
    target?: string,
    value?: [
        {
            id?: string | number,
            file?: File,
            status?: "queue" | "inprogress" | "uploaded" | "failed",
            progress?: number,
            request?: XMLHttpRequest,
            path?: string,
            name?: string,
            [key: string]?: any
        },
        // more file objects
    ],

    css?: string,
    height?: string | number | "content", // "content" by default
    width?: string | number | "content", // "content" by default
    padding?: string | number, // "8px" by default
    hidden?: boolean, // false by default
    disabled?: boolean, // false by default
        
    fieldName?: string, // "file" by default
    params?: {
        [key: string]: any,
    },
    headerParams?: {
        [key: string]: any,
    },
    singleRequest?: boolean, // false by default
    updateFromResponse?: boolean, // true by default
    autosend?: boolean, // false by default
    accept?: string, // all file types by default

    validation?: (value: object[]) => boolean;
    required?: boolean, // false by default

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
            <td>(required) the type of a control, set it to "simpleVault"</td>
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
            <td><b>target</b></td>
            <td>(optional) sets an URL to the server-side script that will process file upload</td>
        </tr>
        <tr>
            <td id="value"><b>value</b></td>
            <td>(optional) sets the default list of loaded files. Each file object can contain the following properties:
                <ul>
                    <li><b>id</b> - (optional) the id of the file</li>
                    <li><b>file</b> - (optional) the <a href="https://developer.mozilla.org/en-US/docs/Web/API/File">File</a> object, in case of loading to the server the property is obligatory</li>
                    <li><b>status</b> - (optional) the status of the file ("queue", "inprogress", "uploaded", or "failed") </li>
                    <li><b>progress</b> - (optional) the progress of the file upload</li>
                    <li><b>request</b> - (optional) an XMLHttpRequest object sent to the server when an upload begins</li>
                    <li><b>name</b> - (optional) the name of the file including the extension (for adding files from the server)</li>
                    <li><b>path</b> - (optional) the path to the file on the computer starting from the name of the folder (in case a folder with files is added)</li>
                    <li><b>[key:string]</b> - (optional) any <i>key:value</i> pair received as a server response (if the <i>updateFromResponse</i> property is enabled)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(optional) adds style classes to a control</td>
        </tr>
        <tr>
            <td><b>height</b></td>
            <td>(optional) the height of a control, <i>"content"</i> by default</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of a control, <i>"content"</i> by default</td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(optional) sets padding between a cell and a border of the SimpleVault control, <i>"8px"</i> by default</td>
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
            <td><b>fieldName</b></td>
            <td>(optional) sets the name of the file field in the form data that is sent to the server, <i>"file"</i> by default</td>
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
            <td><b>singleRequest</b></td>
            <td>(optional) defines whether files are sent in one request, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>updateFromResponse</b></td>
            <td>(optional) updates file attributes with the data from the server response, <i>true</i> by default</td>
        </tr>
        <tr>
            <td><b>autosend</b></td>
            <td>(optional) enables/disables automatic sending of an added file (files won't be sent if they fail validation), <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>accept</b></td>
            <td>(optional) allows specifying the type/extension that will be displayed in the dialog window during the file selection. <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers">Check details</a>, all file types by default</td>
        </tr>
        <tr>
            <td><b>validation</b></td>
            <td>(optional) the validation function, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
        </tr> 
        <tr>
            <td><b>required</b></td>
            <td>(optional) <a href="../../../work_with_form#validating-form">defines whether a control is required</a>, <i>false</i> by default</td>
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

### Example

<iframe src="https://snippet.dhtmlx.com/ofy4k51o?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [SimpleVault](form/simplevault.md)