---
sidebar_label: Form Datepicker properties
title: JavaScript Form - Datepicker Properties 
description: You can explore the Properties of the Datepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Datepicker properties

### Usage

~~~js
{
    type: "datepicker",
    name?: string,
    id?: string,
    value?: Date | string,

    css?: string,
    disabled?: boolean, // false by default
    editable?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    hidden?: boolean, // false by default
    padding?: string | number, 
    required?: boolean, // false by default
    validation?: (input: string | Date) => boolean,
    width?: string | number | "content", // "content" by default

    date?: Date | string,
    dateFormat?: string, // "%d/%m/%y" by default
    disabledDates?: (date: Date) => boolean,
    icon?: string,
    mark?: (date: Date) => string,
    mode?: "calendar" | "month" | "year", // "calendar" by default
    placeholder?: string,
    thisMonthOnly?: boolean, // false by  default
    timeFormat?: 24 | 12, // 24 by default
    timePicker?: boolean, // false by default
    valueFormat?: string | Date, // "string" by default
    weekNumbers?: boolean, // false by default
    weekStart?: "saturday" | "sunday" | "monday", // "sunday" by default

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
            <td>(required) the type of a control, set it to "datepicker"</td>
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
            <td>(optional) the value of a datepicker</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(optional) adds style classes to a control </td>
        </tr>
        <tr>
            <td><b>disabled</b></td>
            <td>(optional) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>) </td>
        </tr>
        <tr>
            <td><b>editable</b></td>
            <td>(optional) allows a user to enter the value of the control manually, <i>false</i> by default </td>
        </tr>
        <tr>
            <td><b>height</b></td>
            <td>(optional) the height of a control </td>
        </tr>
        <tr>
            <td><b>hidden</b></td>
            <td>(optional) defines whether a control is hidden</td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(optional) sets padding between a cell and a border of a DatePicker control</td>
        </tr>
        <tr>
            <td><b>required</b></td>
            <td>(optional) <a href="../../../work_with_form/#validating-form">defines whether a control is required</a></td>
        </tr>
        <tr>
            <td><b>validation</b></td>
            <td>(optional) <a href="../../../work_with_form#validation-rules">the validation function</a>, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of a control </td>
        </tr>
        <tr>
            <td><b>date</b></td>
            <td>(optional) defines the date that will be opened when the calendar is created, differs from the selected date (set by <b>value</b>) </td>
        </tr>
        <tr>
            <td><b>dateFormat</b></td>
            <td>(optional) defines the format of dates in the calendar, "%d/%m/%y" by default. The date format must include delimiters (space or symbol), otherwise an error will be thrown</td>
        </tr>
        <tr>
            <td><b>disabledDates</b></td>
            <td>(optional) allows disabling some date intervals, day labels are dimmed </td>
        </tr>
        <tr>
            <td><b>icon</b></td>
            <td>(optional) the CSS class name of an <a href="../../../../helpers/icon">icon</a> from the used icon font</td>
        </tr>
        <tr>
            <td><b>mark</b></td>
            <td>(optional) allows adding a CSS class to specific days </td>
        </tr>
        <tr>
            <td><b>mode</b></td>
            <td>(optional) specifies the mode of displaying a calendar: "calendar" (default), "month", "year" </td>
        </tr>
        <tr>
            <td><b>placeholder</b></td>
            <td>(optional) a tip for the input </td>
        </tr>
        <tr>
            <td><b>thisMonthOnly</b></td>
            <td>(optional) hides dates of the previous/next months relative to the currently displayed one</td>
        </tr>
        <tr>
            <td><b>timeFormat</b></td>
            <td>(optional) defines the time format of a timepicker: 12-hour or 24-hour (12 or 24 (default), correspondingly)</td>
        </tr>
        <tr>
            <td><b>timePicker</b></td>
            <td>(optional) adds a timepicker into a calendar, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>valueFormat</b></td>
            <td>(optional) defines the format of the value that will be returned while getting the current value of the control: "string" (default) or "Date"</td>
        </tr>
        <tr>
            <td><b>weekNumbers</b></td>
            <td>(optional) defines whether to show the numbers of weeks, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><b>weekStart</b></td>
            <td>(optional) sets the starting day of the week: "saturday", "monday" or "sunday" (default) </td>
        </tr>
        <tr>
            <td><b>hiddenLabel</b></td>
            <td>(optional) makes the label invisible</td>
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

<iframe src="https://snippet.dhtmlx.com/q3yk7e6s?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

**Related article:** [DatePicker](form/calendar.md)