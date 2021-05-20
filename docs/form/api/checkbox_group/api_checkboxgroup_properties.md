---
sidebar_label: Properties
title: CheckboxGroup properties
---

## CheckboxGroup properties

<table>
    <tbody>
        <tr>
            <td><b>type</b></td>
            <td>(<i>string</i>) the type of a control, set it to "checkboxGroup"</td>
        </tr>
        <tr>
            <td><b>name</b></td>
            <td>(<i>string</i>) the name of a control</td>
        </tr>
        <tr>
            <td><b>id</b></td>
            <td>(<i>string</i>) the id of a control, auto-generated if not set</td>
        </tr>
        <tr>
            <td><b>options</b></td>
            <td>(<i>object</i>) an object with options of a CheckboxGroup. The object can contain the following
                attributes:
                <ul>
                    <li><b>width</b> - (<i>string, number, "content"</i>) the width of a CheckboxGroup</li>
                    <li><b>height</b> - (<i>string, number, "content"</i>) the height of a CheckboxGroup</li>
                    <li><b>padding</b> - (<i>string, number</i>) sets padding between a cell and a border of a
                        CheckboxGroup</li>
                    <li><b>css</b> - (<i>string</i>) adds style classes to a CheckboxGroup</li>
                    <li><b>rows</b> - (<i>array</i>) arranges checkboxes inside the CheckboxGroup control vertically
                    </li>
                    <li><b>cols</b> - (<i>array</i>) arranges checkboxes inside the CheckboxGroup control horizontally
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><b>value</b></td>
            <td>(<i>object</i>) the initial value of a CheckboxGroup. The value contain a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> defines the initial state of the checkbox. The option has a higher priority than the <b>checked</b> attribute of a checkbox.</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(<i>string, number, "content"</i>) the width of a control</td>
        </tr>
        <tr>
            <td><b>height</b></td>
            <td>(<i>string, number, "content"</i>) the height of a control</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(<i>string</i>) adds style classes to a control</td>
        </tr>
        <tr>
            <td><b>disabled</b></td>
            <td>(<i>boolean</i>) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>)</td>
        </tr>
        <tr>
            <td><b>hidden</b></td>
            <td>(<i>boolean</i>) defines whether a CheckboxGroup is hidden</td>
        </tr>
        <tr>
            <td><b>required</b></td>
            <td>(<i>boolean</i>) <a href="../../../form/work_with_form#validating-form">defines whether a control is required</a></td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(<i>string, number</i>) sets padding between a cell and a border of a CheckboxGroup control</td>
        </tr>
        <tr>
            <td><b>label</b></td>
            <td>(<i>string</i>) specifies a label for a control</td>
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
            <td><b>labelWidth</b></td>
            <td>(<i>string, number</i>) sets the width of the label of a control</td>
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

## Properties of a Checkbox of CheckboxGroup

<table>
    <tbody>
        <tr>
            <td><b>type</b></td>
            <td>(<i>string</i>) the type of a control, set it to "checkbox"</td>
        </tr>
        <tr>
            <td><b>id</b></td>
            <td>(<i>string</i>) the id of a control, auto-generated if not set</td>
        </tr>
        <tr>
            <td><b>value</b></td>
            <td>(<i>string</i>) the value of a checkbox</td>
        </tr>
        <tr>
            <td><b>checked</b></td>
            <td>(<i>boolean</i>) defines the initial state of a checkbox</td>
        </tr>
        <tr>
            <td><b>text</b></td>
            <td>(<i>string</i>) the text label of a checkbox</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(<i>string|number|"content"</i>) the width of a checkbox</td>
        </tr>
        <tr>
            <td><b>height</b></td>
            <td>(<i>string|number|"content"</i>) the height of a checkbox</td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(<i>string|number</i>) sets padding between a cell and a border of a checkbox</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(<i>string</i>) adds style classes to a a checkbox</td>
        </tr>
        <tr>
            <td><b>hidden</b></td>
            <td>(<i>boolean</i>) defines whether a checkbox is hidden</td>
        </tr>
    </tbody>
</table>
