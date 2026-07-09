---
sidebar_label: Form Timepicker properties
title: JavaScript Form - Timepicker Properties 
description: You can explore the Properties of the Timepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Timepicker properties

### Usage

~~~js
{
    type: "timepicker",
    name?: string,
    id?: string, // must be unique if set, auto-generated if not set
    value?: Date | number | string | array | object,

    css?: string,
    disabled?: boolean, // false by default
    editable?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    hidden?: boolean, // false by default
    padding?: string | number, 
    required?: boolean, // false by default
    validation?: (input: string) => boolean,
    width?: string | number | "content", // "content" by default
    
    controls?: boolean, // false by default
    icon?: string,
    placeholder?: string,
    timeFormat?: 12 | 24, // 24 by default
    valueFormat?: "string" | "timeObject", // "string" by default

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

- `type` - (required) the type of a control, set it to "timepicker"
- `name` - (optional) the name of a control
- `id` - (optional) the id of a control, must be **unique** if set, auto-generated if not set
- `value` - (optional) the initial value of the TimePicker control:
    -  The date set as a number is the number of milliseconds since January 1, 1970, 00:00:00 UTC returned by the `getTime()` method of the `Date` object.
    - The value of a timepicker set as an array should have the following elements:
        - the hour value
        - the minutes value
        - the "AM/PM" identifier for 12-hour format as a string
    - The value set as an object:
        - for the `24-hour` format contains key:value pairs for hours, minutes and their values:<br> `{hour: 0, minute: 39}`
        - for the `12-hour` format contains key:value pairs for hours, minutes, am/pm identifiers and their values: <br> `{hour: 6, minute: 0, AM: true}`
- `css` - (optional) adds style classes to a control
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `editable` - (optional) allows a user to enter the value of the control manually, *false* by default
- `height` - (optional) the height of a control, *"content"* by default
- `hidden` - (optional) defines whether a control is hidden, *false* by default
- `padding` - (optional) sets padding between a cell and a border of the TimePicker control
- `required` - (optional) defines whether a control is required, *false* by default
- `validation` - (optional) [the validation function](form/work_with_form.md#validation-rules), takes as a parameter the value to validate and returns true/false to indicate the result of validation
- `width` - (optional) the width of a control, *"content"* by default
- `controls` - (optional) defines whether a timepicker is equipped with the Close and Save buttons, *false* by default
- `icon` - (optional) the CSS class name of an icon from the used icon font
- `placeholder` - (optional) a tip for the input
- `timeFormat` - (optional) defines what clock format is activated: the 12-hour or 24-hour one. Set the property to 12 or 24 (default) value, correspondingly, *24* by default
- `valueFormat` - (optional) defines the format of the value to be applied when working with the events of the timepicker control: "string" (default), "timeObject"
- `hiddenLabel` - (optional)  makes the label invisible, *false* by default
- `label` - (optional) specifies a label for a control
- `labelPosition` - (optional) defines the position of a label: "left" | "top" (default)
- `labelWidth` - (optional) sets the width of the label of a control
- `helpMessage` - (optional) adds a help message to a control
- `preMessage` - (optional) a message that contains instructions for interacting with the control
- `successMessage` - (optional) a message that appears in case of successful validation of the control value
- `errorMessage` - (optional) a message that appears in case of error during validation of the control value

### Example

<iframe src="https://snippet.dhtmlx.com/4k3o8p7b?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [TimePicker](form/timepicker.md)
