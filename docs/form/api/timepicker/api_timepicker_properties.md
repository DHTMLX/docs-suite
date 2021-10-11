---
sidebar_label: Form Timepicker properties
title: JavaScript Form - Timepicker Properties 
description: You can explore the Properties of the Timepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Timepicker properties

- `type` - (string) the type of a control, set it to "timepicker"
- `id` - (string) the id of a control, auto-generated if not set
- `value` - (Date|number|string|array|object) the initial value of the TimePicker control:
    - The value of a timepicker set as an array should have the following elements:
        - the hour value
        - the minutes value
        - the "AM/PM" identifier for 12-hour format as a string
    - The value set as an object:
        - for the `24-hour` format contains key:value pairs for hours, minutes and their values:<br> `{hour: 0, minute: 39}`
        - for the `12-hour` format contains key:value pairs for hours, minutes, am/pm identifiers and their values: <br> `{hour: 6, minute: 0, AM: true}`
    -  The date set as a number is the number of milliseconds since January 1, 1970, 00:00:00 UTC returned by the `getTime()` method of the `Date` object.
- `valueFormat` - (string) defines the format of the value to be applied when working with the events of the timepicker control: "string", "timeObject"
- `validation` - (function) [the validation function](form/work_with_form.md#validation-rules), takes as a parameter the value to validate and returns true/false to indicate the result of validation
- `icon` - (string) the name of an icon from the used icon font
- `placeholder` - (string) a tip for the input
- `editable` - (boolean) allows a user to enter the value of the control manually
- `width` - (string|number|"content") the width of a control
- `height` - (string|number|"content") the height of a control
- `padding` - (string|number) sets padding between a cell and a border of the TimePicker control
- `css` - (string) adds style classes to a control
- `disabled` - (boolean) defines whether a control is enabled (false) or disabled (true)
- `hidden` - (boolean) defines whether a control is hidden
- `label` - (string) specifies a label for a control
- `labelWidth` - (string|number) sets the width of the label of a control
- `hiddenLabel` - (boolean) invisible label that will be used to identify the input on the server side
- `labelPosition` - (string) defines the position of a label: "left"|"top"
- `name` - (string) the name of a control
- `required` - (boolean) defines whether a control is required
- `helpMessage` - (string) adds a help message to a control
- `preMessage` - (string) a message that contains instructions for interacting with the control
- `successMessage` - (string) a message that appears in case of successful validation of the control value
- `errorMessage` - (string) a message that appears in case of error during validation of the control value
- `timeFormat` - (number) defines what clock format is activated: the 12-hour or 24-hour one. Set the property to 12 or 24 (default) value, correspondingly
- `controls` - (boolean) defines whether a timepicker is equipped with the Close and Save buttons
