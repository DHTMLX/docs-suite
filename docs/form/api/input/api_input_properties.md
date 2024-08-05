---
sidebar_label: Form Input properties
title: JavaScript Form - Input Properties 
description: You can explore the Properties of the Input control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Input properties

### Usage

~~~js
{
    type: "input",
    name?: string,
    id?: string,
    value?: string | number,
    numberMask?:
        | {
                  prefix?: string; // "" by default (before the value)
                  suffix?: string; // "" by default (after the value)
                  groupSeparator?: string; // "," by default
                  decSeparator?: string; // "." by default
                  allowNegative?: boolean; // true by default
                  maxIntLength?: number; // 16 by default (for the number type)
                  maxDecLength?: number; // 2 by default (for the number type)
            }
        | boolean,
    patternMask?:
        |   {
                pattern: ((value: string | number) => string) | string;
                charFormat?: {
                    [char: string]: RegExp;
                };
            }
        | string,
    
    css?: string,
    disabled?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    hidden?: boolean, // false by default
    padding?: string | number, 
    required?: boolean, // false by default
    validation?: string | (input: string | number) => boolean,
    width?: string | number | "content", // "content" by default

    autocomplete?: boolean, // false by default
    icon?: string,
    inputType?: "text" | "password" | "number", // "text" by default
    max?: number | string,
    maxlength?: number | string,
    min?: number | string,
    minlength?: number | string,
    placeholder?: string,
    readOnly?: boolean, // false by default

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
            <td>(required) the type of a control, set it to "input" </td>
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
            <td>(optional) the initial value of the input</td>
        </tr>
        <tr>
            <td><b>numberMask</b></td>
            <td>(optional) sets an <a href="../../../work_with_form#numbermask">input mask for entering number values</a>. Can be set in two ways:<ul><li>as an <i>object</i> with the following properties:
                <ol>- <b>prefix</b> - renders a text before the resulting value</ol>
                <ol>- <b>suffix</b> - renders a text after the resulting value</ol>
                <ol>- <b>groupSeparator</b> - sets a separator for thousands</ol>
                <ol>- <b>decSeparator</b> - sets a separator for decimals</ol>
                <ol>- <b>allowNegative</b> - allows using negative numbers</ol>
                <ol>- <b>maxIntLength</b> - allows setting the maximal length of an integer</ol>
                <ol>- <b>maxDecLength</b> - allows setting the maximal length of a decimal</ol></li>
                <li>as a <i>boolean</i> value converts the number value displayed in the input field into one of the predefined templates</li></ul></td>
        </tr>
        <tr>
            <td><b>patternMask</b></td>
            <td>(optional) sets an <a href="../../../work_with_form#patternmask">input mask for entering number and string values according to a special pattern</a>. Can be set in two ways:<ul><li>as an <i>object</i> with the following properties:
                <ol>- <b>pattern</b> - allows specifying the necessary mask and change it dynamically, depending on the entered values</ol>
                <ol>- <b>charFormat</b> - allows specifying a regular expression for an optional symbol</ol></li>
                <li>as a <i>string</i> allows setting a mask as a string using a predefined set of symbols</li></ul></td>
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
            <td>(optional) makes an input hidden, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(optional) sets padding between a cell and a border of the Input control</td>
        </tr>
        <tr>
            <td><b>required</b></td>
            <td>(optional) <a href="../../../work_with_form#validating-form">defines whether a control is required</a>, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>validation</b></td>
            <td>(optional) <a href="../../../work_with_form#validation-rules">the rule of input validation</a>. Can be set in two ways:<ul><li>as a predefined <i>string</i> value:<ol>- "email" - validEmail</ol><ol>- "integer" - validInteger</ol><ol>- "numeric" - validNumeric</ol><ol>- "alphanumeric" - validAplhaNumeric</ol><ol>- "IPv4" - validIPv4</ol>Can be used with <i>inputType: "text", "password"</i>.</li><li>as a <i>function</i> that defines a custom validation rule. It takes as a parameter the value typed in the input and returns <i>true</i>, if the entered value is valid.<br/> Can be used with <i>inputType: "number"</i> only.</li></ul></td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of a control, <i>"content"</i> by default</td>
        </tr>
        <tr>
            <td><b>autocomplete</b></td>
            <td>(optional) enables/disables the autocomplete functionality of the input, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>icon</b></td>
            <td>(optional) the CSS class name of an <a href="../../../../helpers/icon">icon</a> from the used icon font</td>
        </tr>
        <tr>
            <td><b>inputType</b></td>
            <td>(optional) sets the type of an input: "text", "password", "number". <br/>Using the "number" type for the input sets the type of the <b>value</b> attribute to "number". <br/>Use the "password" value to specify a field for entering a password. <i>"text"</i> by default</td>
        </tr>
        <tr>
            <td><b>max</b></td>
            <td>(optional) <a href="../../../work_with_form#minimal-and-maximal-values">the maximal value allowed in the input</a>. <br/>The attribute works only with the input type: "number". </td>
        </tr>
        <tr>
            <td><b>maxlength</b></td>
            <td>(optional) the maximum <a href="../../../work_with_form#number-of-allowed-characters">number of characters allowed in the input</a>. <br/>The attribute works with the following input types: "text", "password".</td>
        </tr>
        <tr>
            <td><b>min</b></td>
            <td>(optional) <a href="../../../work_with_form#minimal-and-maximal-values">the minimal value allowed in the input</a>. <br/>The attribute works only with the input type: "number". </td>
        </tr>
        <tr>
            <td><b>minlength</b></td>
            <td>(optional) the minimum <a href="../../../work_with_form#number-of-allowed-characters">number of characters allowed in the input</a>. <br/> The attribute works with the following input types: "text", "password". </td>
        </tr>
        <tr>
            <td><b>placeholder</b></td>
            <td>(optional) a tip for the input</td>
        </tr>
        <tr>
            <td><b>readOnly</b></td>
            <td>(optional) defines whether an input is readonly, <i>false</i> by default</td>
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

<iframe src="https://snippet.dhtmlx.com/9q8fubjm?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [Input](form/input.md)
