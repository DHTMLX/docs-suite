---
sidebar_label: Properties
title: Textarea properties
---

<table class="webixdoc_links">
    <tbody>
        <tr>
            <td class="webixdoc_links0"><b>type</b></td>
            <td>(<i>string</i>) the type of a control, set it to "textarea"</td>
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
            <td>(<i>string</i>) the initial value of the textarea</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>validation</b></td>
            <td>(<i>string,function</i>) <a
                    href="https://docs.dhtmlx.com/suite/form__work_with_form.html#validatingform">the rule of input
                    validation</a>. Can be set in two ways:
                <ul>
                    <li>as a predefined string value:
                        <ol>- "email" - validEmail</ol>
                        <ol>- "integer" - validInteger</ol>
                        <ol>- "numeric" - validNumeric</ol>
                        <ol>- "alphanumeric" - validAplhaNumeric</ol>
                        <ol>- "IPv4" - validIPv4</ol>
                    </li>
                    <li>as a <i>function</i> that defines a custom validation rule. It takes as a parameter the value
                        typed in the input and returns <i>true</i>, if the entered value is valid.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>placeholder</b></td>
            <td>(<i>string</i>) a tip for the textarea</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>readOnly</b></td>
            <td>(<i>boolean</i>) defines whether a textarea is readonly</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>resizable</b></td>
            <td>(<i>boolean</i>) adds a resizer icon into a textarea, if set to <i>true</i></td>
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
            <td>(<i>string|number</i>) sets padding between a cell and a border of the Textarea control</td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>minlength</b></td>
            <td>(<i>string|number</i>) the minimum <a
                    href="https://docs.dhtmlx.com/suite/form__work_with_form.html#validatingform">number of characters
                    allowed in the textarea</a></td>
        </tr>
        <tr>
            <td class="webixdoc_links0"><b>maxlength</b></td>
            <td>(<i>string|number</i>) the maximum <a
                    href="https://docs.dhtmlx.com/suite/form__work_with_form.html#validatingform">number of characters
                    allowed in the textarea</a></td>
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
            <td class="webixdoc_links0"><b>required</b></td>
            <td>(<i>boolean</i>) <a
                    href="https://docs.dhtmlx.com/suite/form__work_with_form.html#validatingform">defines whether a
                    control is required</a></td>
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
            <td>(<i>string</i>) a message that appears in case of error during validation of the control value </td>
        </tr>
    </tbody>
</table>
