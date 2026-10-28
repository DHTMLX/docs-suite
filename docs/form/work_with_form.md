---
sidebar_label: Work with Form
title: JavaScript Form - Work with Form 
description: description
---

# Work with Form

## Getting values of controls

The [](form/api/form_getvalue_method.md) method returns the current values or states of Form controls. The default return value is an object with control names (or ids, if a control has no `name`) and their values or states.

~~~jsx
// default functionality
const state = form.getValue();
//->{"name":"John Doe","email":"jd@mail.com", "agree":true}
~~~

To get this information as FormData, pass the following parameter:

- `asFormData` — (`boolean`) defines whether the method returns control values as FormData

~~~jsx
// returning form details as FormData
const state = form.getValue(true);
~~~

**Related sample**: [Form. Get value](https://snippet.dhtmlx.com/odod5v12)

## Setting new values for controls

To set new values or states for Form controls on the fly, use the [](form/api/form_setvalue_method.md) method. The method takes an object with `key:value` pairs as a parameter, where `key` is the control name (or id, if the control has no `name`) and `value` is the new value or state of the control:

~~~jsx
form.setValue({
    "input_name":"Jack London", 
    "slider_id":10
    // more name:value pairs
});
~~~

**Related sample**: [Form. Set value](https://snippet.dhtmlx.com/7nxbtlzs)

## Enabling/Disabling a form

To enable a form, use the [`enable()`](form/api/form_enable_method.md) method:

~~~jsx
form.enable();
~~~

To disable a form, use the [`disable()`](form/api/form_disable_method.md) method:

~~~jsx
form.disable();
~~~

**Related sample**: [Form. Disable/enable](https://snippet.dhtmlx.com/few71nk2)

## Checking if a form is disabled

To check if a form is disabled, call the [`isDisabled()`](form/api/form_isdisabled_method.md) method:

~~~jsx
form.isDisabled(); // -> true/false
~~~

To check whether a form control is disabled, pass the control name (or id, if the control has no `name`) to the [`isDisabled()`](form/api/form_isdisabled_method.md) method:

~~~jsx
form.isDisabled("input"); // -> returns true/false
~~~

**Related sample**: [Form. Is disabled](https://snippet.dhtmlx.com/lthu8p6p)

## Hiding/Showing a form

To hide a form, use the [`hide()`](form/api/form_hide_method.md) method:

~~~jsx
form.hide();
~~~

To show a form, use the [`show()`](form/api/form_show_method.md) method:

~~~jsx
form.show();
~~~

**Related sample**: [Form. Hide/Show control](https://snippet.dhtmlx.com/w6rr8chf)

## Checking if a form is visible

To check if a form is visible, call the [`isVisible()`](form/api/form_isvisible_method.md) method:

~~~jsx
form.isVisible(); // -> true/false
~~~

To check whether a form control is visible, pass the control name (or id, if the control has no `name`) to the [`isVisible()`](form/api/form_isvisible_method.md) method:

~~~jsx
form.isVisible("input"); // -> returns true/false
~~~

## Using input masks

Input masks control how users enter values in the [Input](form/input.md) and [Textarea](form/textarea.md) Form controls. To work with input masks, use the [`numberMask`](#numbermask) and [`patternMask`](#patternmask) configuration options and the [`getText()`](#getting-the-text-value-of-an-input-or-a-textarea) method of these controls.

### numberMask

The `numberMask` property sets an input mask for entering number values in the [Input](form/input.md) and [Textarea](form/textarea.md) Form controls. You can set it in two ways:

- As an object with the following properties:
    - `prefix` — renders text before the resulting value
    - `suffix` — renders text after the resulting value
    - `groupSeparator` — sets a separator for thousands
    - `decSeparator` — sets a separator for decimals
    - `allowNegative` — allows negative numbers
    - `maxIntLength` — sets the maximum length of the integer part
    - `maxDecLength` — sets the maximum length of the decimal part
    - `minDecLength` — sets the minimum rendered length of the decimal part

For example, the `numberMask` config can be set as the following object:

~~~jsx
{
    type: "input",
    numberMask:{
        prefix: "$",
        groupSeparator: ",",
        decSeparator: ".",
        maxIntLength: 7,
        maxDecLength: 2,
        minDecLength: 0
    }
}
~~~

With this config, the value *1000000.0000* becomes *$1,000,000*.

#### Default `numberMask` configs depending on the input type

When an input has `inputType:"number"`, the resulting value is converted to the `number` type. The default config for this input type is:

~~~jsx
{
    groupSeparator: ",",
    decSeparator: ".",
    allowNegative: true,
    maxIntLength: 16,
    maxDecLength: 2,
    minDecLength: 0
}
~~~

The default config for `inputType: "text"` (the default input type) is:

~~~jsx
{
    groupSeparator: ",",
    decSeparator: ".",
    allowNegative: true,
    minDecLength: 0
}
~~~

When an input has `inputType:"text"`, the resulting number is converted to the `string` type without the mask, as if it were a number. For example, if the input value is *"$ 1,000,000"*, the [`getValue()`](form/api/input/input_getvalue_method.md) method returns *"1000000"*.

- As a boolean value, the `numberMask` property converts the number displayed in the input field to one of the predefined templates, depending on the specified `inputType`:

~~~jsx
{
    type: "input",
    numberMask: true,
}
~~~

In the example above, the input type is not set, so the template of the default `inputType:"text"` converts *100000.01* to *100,000.01*.

**Related sample**: [Form. Number mask](https://snippet.dhtmlx.com/51wnauq3)

### patternMask

The `patternMask` property sets an input mask for entering number and string values in the [Input](form/input.md) and [Textarea](form/textarea.md) Form controls according to a pattern. You can set it in two ways:

- As an object with the following properties:
    - `pattern` — (`function | string`) specifies the mask and lets you change it dynamically, depending on the entered values. You can set it as:
        - a function that takes the entered value (a string or a number) as a parameter and returns a string with a pattern mask
        - a string with a pattern mask
    - `charFormat` — (`object`) optional, specifies a regular expression for an optional symbol. Set it as an object with `key:value` pairs, where `key` is a symbol and `value` is a regular expression. The default configuration of this property is:

~~~jsx
{
    "0": /\d/,
    "a": /[A-Za-z]/,
    "#": /[A-Za-z0-9]/,
    "*": /./,
}
~~~

|  Symbol| Description            |
| -------|----------------------- |
| "0"    | any number from **0** to **9** |
| "a"    | a single letter of the Roman alphabet, including all capital letters from **A** to **Z** and all lowercase letters from **a** to **z** |
| "#"    | a single letter of the Roman alphabet (either an uppercase or a lowercase one) or a single number from **0** to **9** |
| "*"    | any symbol |

:::note
The `patternMask` property supports static masks: symbols that are not specified in `charFormat` render as they are and cannot be changed.
:::

The following `patternMask` property specifies a mask pattern for entering a date in an input:

~~~jsx
{
    type: "input",
    label: "DD/MM/YYYY HH:MM",
    placeholder: "01/01/2001 00:00",
    patternMask: {
        pattern: "00/00/0000 H0:M0", // a common mask pattern for date and time
        charFormat: { // setting regular expressions for hours and minutes 
            "H": /[0-2]/,
            "M": /[0-5]/,
        }
    }
}
~~~

A date that matches this mask: *01/01/2001 12:59*.
    
- As a string, the `patternMask` property sets a mask with a predefined set of symbols. The following `patternMask` property specifies a mask for entering an SSN:

~~~jsx
{
    type: "input",
    patternMask: "000-00-0000" 
}
~~~

An SSN that matches this mask: *123-41-1234*.

**Related sample**: [Form. Pattern mask](https://snippet.dhtmlx.com/gu1ekt1z)

#### Selecting the suitable data format

You can specify different mask patterns depending on the type of data entered in an input. The examples below show common data formats:

- Phone number

A phone number can include digits, symbols, and spaces. Specify this format as a string value of the [`patternMask`](#patternmask) property:

~~~jsx
{
    type: "input",
    patternMask: "+0 (000) 000-0000",
};
~~~

Example: *+9 (123) 123-1234*

- License plate format

A license plate usually combines letters, digits, and symbols. Specify this format as a string value of the [`patternMask`](#patternmask) property:

~~~jsx
{
    type: "input",
    patternMask: "0-aaa-000",
}
~~~

Example: *9-AAA-999*

- Price format

You can set a price format with the [`numberMask`](#numbermask) property, for example as the following object:

~~~jsx
 {
    type: "input",
    numberMask: {
        prefix: "$ ",
        maxDecLength: 2
    }
}
~~~

Example: *$ 1,000,000*

In the example above, the `prefix` property sets the currency sign, and the `maxDecLength` property limits the number of decimal places to 2.

- Date and time format

For a date and time input, specify the [`patternMask`](#patternmask) property as the following object:

~~~jsx
patternMask: {
    pattern: "00/00/0000 H0:M0", 
    charFormat: { 
        "H": /[0-2]/,
        "M": /[0-5]/,
    }
}
~~~

Example: *01/01/2001 12:59*

In the example above:

- The `pattern` property sets a common mask pattern for date and time
- The `charFormat` property specifies regular expressions for hours and minutes:
    - `"H": /[0-2]/` — a digit from 0 to 2 for the hour in `H0`
    - `"M": /[0-5]/` — a digit from 0 to 5 for the minutes in `M0`

**Related sample**: [Form. Number mask](https://snippet.dhtmlx.com/51wnauq3)

**Related sample**: [Form. Pattern mask](https://snippet.dhtmlx.com/gu1ekt1z)

### Getting the text value of an input or a textarea

To get the value of an input or a textarea with the applied mask, use the [`getText()`](form/api/input/input_gettext_method.md) method of the Input control or the [`getText()`](form/api/textarea/textarea_gettext_method.md) method of the Textarea control.
The method returns the control value as a string and works with the `numberMask` and `patternMask` properties.

~~~jsx
const input = form.getItem("input");
input.setValue(1000.01);

input.getValue(); // 1000.01 for the input type number
input.getValue(); // "1000.01" for the input type string

input.getText(); // "1,000.01" with the applied numberMask/patternMask
~~~

## Validating form

Form validation covers required fields, minimum and maximum values, the number of allowed characters, and validation rules.

### Required fields

To make a field required, set the `required` property:

~~~jsx
{    
    type: "checkbox",
    label: "I agree",
    name: "agree",
    required: true,
    id: "agree",
    value: "checkboxvalue"
}
~~~

When you set `required:true` for a field, an asterisk appears next to its label:

![Form with required Name Email and I am agree fields marked by asterisks in DHTMLX Suite](/img/form/required_fields.png)

**Related sample**: [Form. Required](https://snippet.dhtmlx.com/0pr3var0)

The property applies to input fields with the `number`, `text`, and `password` input types.

### Minimal and maximal values

From v7.0, you can validate number values entered in an input field.

![Form Age inputs showing green valid value and red invalid value validation messages in DHTMLX Suite](/img/form/value_validate.png)

Specify the minimum value, the maximum value, or both with the `min` and `max` properties:

~~~jsx
{
    type: "input",
    inputType: "number",
    label: "Age",
    value: 18,
    placeholder: "Enter your age",
    min: 12,
    max: 18
}
~~~

These properties apply to input fields with the `number` input type.

### Number of allowed characters

From v7.0, you can limit the number of characters entered in an input or textarea field.

![Form Name inputs showing red invalid and green valid character length validation in DHTMLX Suite](/img/form/length_validate.png)

Use the `minlength` and `maxlength` properties, which check the length of the value. Validation succeeds if the length is greater than or equal to `minlength` and less than or equal to `maxlength`, whichever of them you set:

~~~jsx
{
    type: "input",
    inputType: "text",
    label: "Name",
    placeholder: "John Doe",
    minlength: 3,
    maxlength: 10
}
~~~

These properties apply to input and textarea fields with the `text` and `password` input types.

### Validation rules

To define how an input or a textarea is validated, use one of the predefined validation rules:

- `"email"` — `validEmail`
- `"integer"` — `validInteger`
- `"numeric"` — `validNumeric`
- `"alphanumeric"` — `validAplhaNumeric`
- `"IPv4"` — `validIPv4`

Set the rule name as the value of the `validation` property:

~~~jsx
{
    type: "input",
    inputType: "text",
    label: "Email",
    placeholder: "jd@mail.name",
    validation: "email"
}
~~~

You can also set a custom validation function as the value of the `validation` property:

~~~jsx title="Validation for Input control"
{
    type: "input",
    inputType: "text",
    label: "Name",
    placeholder: "John Doe",
    validation: function(value) {
        return value && value.length > 4;
    }    
}
~~~

**Related sample**: [Form. Validation](https://snippet.dhtmlx.com/3cz9v7rm)

:::info
If the `inputType` property is set to `"number"`, you can set the `validation` property only as a function.
:::

~~~jsx title="Validation for Combo control. Multi select is enabled"
{
    name: "combo",
    type: "combo",
    multiselection: true,
    value: ["id:1", 4],
    data: [
        { value: "value: 1", id: "id:1" },
        { value: "value: 2", id: "id:2" },
        { value: "value: 3", id: 3 },
        { value: "value: 4", id: 4 },
        { value: "value: 5", id: 5 },
    ],
    validation: (value, text) => {
        return value.includes(4) || text.includes("value:5");
    }
}
~~~

~~~jsx title="Validation for Combo control. Multi select is disabled"
{
    name: "combo",
    type: "combo",
    multiselection: false,
    value: 4,
    data: [
        { value: "value: 1", id: "id:1" },
        { value: "value: 2", id: "id:2" },
        { value: "value: 3", id: 3 },
        { value: "value: 4", id: 4 },
        { value: "value: 5", id: 5 },
    ],
    validation: (value, text) => {
        return value === 4 || text === "value:5";
    }
},
~~~

### Messages

Along with validation rules, you can define messages that tell users whether they are filling in the form correctly. Three types of messages are available:

<table>
    <tbody>
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

For example, the following configuration object defines an email input:

~~~jsx
{
    type: "input",
    label: "Email",
    placeholder: "jd@mail.name",
    errorMessage: "Invalid email",
    successMessage: "Valid email",
    validation: "email"
}
~~~

**Related sample**: [Form. Messages](https://snippet.dhtmlx.com/yhiuq2mi)

### Validation API

After a user fills out the form, check whether it is filled out correctly.
To validate a form, use the [](form/api/form_validate_method.md) method:

~~~jsx
const result = form.validate();
~~~

The method returns `true` if all fields are filled as required, or `false` if some fields need attention.

**Related sample**: [Form. Validate](https://snippet.dhtmlx.com/pmz0zk16)

## Sending form to server

To send a form to the server, use the [](form/api/form_send_method.md) method. The method takes three parameters:

<table>
    <tbody>
        <tr>
            <td><b>url</b></td>
            <td>(<i>string</i>) the URL of the server</td>
        </tr>
        <tr>
            <td><b>method</b></td>
            <td>(<i>string</i>) the request type; the default value is "POST"</td>
        </tr>
        <tr>
            <td><b>asFormData</b></td>
            <td>(<i>boolean</i>) optional, defines whether values of Form controls should be sent as Form Data</td>
        </tr>
    </tbody>
</table>

The method returns a promise object.

~~~jsx
const send = form.send("myserver.com", "POST");
~~~

To control how the form is sent, handle the [](form/api/form_beforesend_event.md) and [](form/api/form_aftersend_event.md) events:

~~~jsx
// fires before sending a form to the server
form.events.on("BeforeSend", function(){
   // your logic here
});

// fires after sending a form to the server
form.events.on("AfterSend", function(){
   // your logic here
});
~~~

## Clearing form

The [](form/api/form_clear_method.md) method clears a form fully or partially, depending on the parameter you pass:

- `"value"` — clears only form values
- `"validation"` — clears only form validation
- Without parameters — clears both form values and validation

~~~jsx
// clears only form validation
form.clear("validation");

// clears only form values
form.clear("value");

// clears both form values and validation
form.clear();
~~~

**Related sample**: [Form. Clear form](https://snippet.dhtmlx.com/a64ih4ih)

## Setting focus to a control

![Form with various controls and focus set on the Name input field in DHTMLX Suite](/img/form/set_focus.png)

From v7.0, you can set focus to a Form control with the [`setFocus()`](form/api/form_setfocus_method.md) method. The method takes the control name (or id, if the control has no `name`) as a parameter:

~~~jsx
form.setFocus("input");
~~~

**Related sample**: [Form. Set focus on control](https://snippet.dhtmlx.com/tye82oqs)

You can set focus to the DatePicker, Checkbox, ColorPicker, Combo, Input, RadioGroup, Select, Textarea, and TimePicker controls.
