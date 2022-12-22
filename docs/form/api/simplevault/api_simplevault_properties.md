---
sidebar_label: Form Simple Vault properties
title: JavaScript Form - Simple Vault Properties 
description: You can explore the Properties of the Simple Vault control  of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Simple Vault properties

### Usage

~~~js
{
	type: "simplevault",
    name?: string,
    id?: string,
    target: string,
    value?: [
        {
            id: string | number,
            status: "queue" | "inprogress" | "uploaded" | "failed",
            progress: number,
            link?: string,
            name?: string,
            path?: string,
            request?: XMLHttpRequest,
            size?: number,
        },
        // more file objects
    ],

    css?: string,
    disabled?: boolean,
    fieldName?: string,
    height?: string | number | "content", // "content" by default
    hidden?: boolean,
    hiddenLabel?: boolean, // false by default
    label?: string,
    labelPosition?: "left" | "top", // "top" by default
    labelWidth?: string | number,
    padding?: string | number,
    params?: {
        [key: string]: any,
    },
    required?: boolean,
    singleRequest?: boolean, // false by default
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
            <td>(required) sets an URL to the server-side script that will process file upload</td>
        </tr>
        <tr>
            <td><b>value</b></td>
            <td>(optional) sets the default list of loaded files. Each file object can contain the following properties:
                <ul>
                    <li><b>id</b> - (required) the id of the file</li>
                    <li><b>status</b> - (required) the status of the file ("queue", "inprogress", "uploaded", or "failed") </li>
                    <li><b>progress</b> - (required) the progress of the file upload</li>
                    <li><b>link</b> - (optional) the path to the uploaded file on a server. In order to download files from SimpleVault to the computer, file objects must have the link attribute specified with the path to their location on the server.</li>
                    <li><b>name</b> - (optional) the name of the file including the extension (for adding files from a server)</li>
                    <li><b>path</b> - (optional) the path to the file on the computer starting from the name of the folder (in case a folder with files is added)</li>
                    <li><b>request</b> - (optional) an XMLHttpRequest object sent to server when an upload begins</li>
                    <li><b>size</b> - (optional) the size of the file in bytes (for adding files from a server)</li>
                </ul>
            </td>
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
            <td><b>fieldName</b></td>
            <td>(optional) sets the name of the file field in the form data that is sent to the server. By default takes its value from the value of the <b>name</b> property, or, if not specified, from the <b>id</b> attribute. </td>
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
            <td>(optional) sets padding between a cell and a border of the SimpleVault control</td>
        </tr>
        <tr>
            <td><b>params</b></td>
            <td>(optional) adds extra parameters for sending an XMLHttpRequest</td>
        </tr>
        <tr>
            <td><b>required</b></td>
            <td>(optional) <a href="../../../work_with_form#validating-form">defines whether a control is required</a></td>
        </tr>
        <tr>
            <td><b>singleRequest</b></td>
            <td>(optional) defines whether files are sent in one request, <i>false</i> by default</td>
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

<iframe src="https://snippet.dhtmlx.com/ofy4k51o?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [SimpleVault](form/simplevault.md)