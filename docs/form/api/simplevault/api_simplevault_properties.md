---
sidebar_label: Properties
title: Simple Vault properties
---

<table class="webixdoc_links">
    <tbody>
        <tr>
            <td class="webixdoc_links0"><b>type</b></td>
            <td>(<i>string</i>) the type of a control, set it to "simpleVault"</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>name</b></td>
            <td>(<i>string</i>) the name of a control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>id</b></td>
            <td>(<i>string</i>) the id of a control, auto-generated if not set</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>value</b></td>
            <td>(<i>array</i>) sets the default list of loaded files. Each file object can contain the following
                properties:
                <ul>
                    <li><b>id</b> - (<i>string</i>) mandatory, the id of the file</li>
                    <li><b>status</b> - (<i>string</i>) optional, the status of the file ("queue", "inprogress",
                        "uploaded", or "failed") </li>
                    <li><b>progress</b> - (<i>number</i>) optional, the progress of the file upload</li>
                    <li><b>link</b> - (<i>string</i>) optional, the path to the uploaded file on a server. In order to
                        download files from SimpleVault to the computer, file objects must have the link attribute
                        specified with the path to their location on the server.</li>
                    <li><b>request</b> - (<i>object</i>) optional, an XMLHttpRequest object sent to server when an
                        upload begins</li>
                    <li><b>path</b> - (<i>string</i>) optional, the path to the file on the computer starting from the
                        name of the folder (in case a folder with files is added)</li>
                    <li><b>name</b> - (<i>string</i>) optional, the name of the file including the extension (for adding
                        files from a server)</li>
                    <li><b>size</b> - (<i>number</i>) optional, the size of the file in bytes (for adding files from a
                        server)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>width</b></td>
            <td>(<i>string|number|"content"</i>) the width of a control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>height</b></td>
            <td>(<i>string|number|"content"</i>) the height of a control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>padding</b></td>
            <td>(<i>string|number</i>) sets padding between a cell and a border of the SimpleVault control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>css</b></td>
            <td>(<i>string</i>) adds style classes to a control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>disabled</b></td>
            <td>(<i>boolean</i>) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>)</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>required</b></td>
            <td>(<i>boolean</i>) <a
                    href="https://docs.dhtmlx.com/suite/form__work_with_form.html#validatingform">defines whether a
                    control is required</a></td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>hidden</b></td>
            <td>(<i>boolean</i>) defines whether a control is hidden</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>label</b></td>
            <td>(<i>string</i>) specifies a label for a control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>labelWidth</b></td>
            <td>(<i>string|number</i>) sets the width of the label of a control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>hiddenLabel</b></td>
            <td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>labelPosition</b></td>
            <td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>helpMessage</b></td>
            <td>(<i>string</i>) adds a help message to a control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>preMessage</b></td>
            <td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>successMessage</b></td>
            <td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>errorMessage</b></td>
            <td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>fieldName</b></td>
            <td>(<i>string</i>) optional, sets the name of the file field in the form data that is sent to the server.
                By default takes its value from the value of the <b>name</b> property, or, if not specified, from the
                <b>id</b> attribute. </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>params</b></td>
            <td>(<i>object</i>) optional, adds extra parameters for sending an XMLHttpRequest</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>singleRequest</b></td>
            <td>(<i>boolean</i>) defines whether files are sent in one request, <i>false</i> by default</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>target</b></td>
            <td>(<i>string</i>) mandatory, sets an URL to the server-side script that will process file upload</td>
        </tr>
    </tbody>
</table>
