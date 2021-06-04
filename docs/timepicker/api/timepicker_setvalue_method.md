---
sidebar_label: setValue()
title: JavaScript Timepicker - setValue Method 
description: You can explore the setValue method of Timepicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setValue()

@short: sets value for a TimePicker

@signature: {'setValue(value: Date | number | string | any[] | ITimeObject): void;'}

@params:
`value: Date | number | string | array | object` - the value to be set for a timepicker

@example:
// set the value as a string
timepicker.setValue("00:39");

// set the value as a Date
timepicker.setValue(new Date('January 10, 2019 17:54:00'));

// set the value as an array
timepicker.setValue([6,20,"AM"]);

// set the value as a number
timepicker.setValue(1559288966422);

// set the value as an object
timepicker.setValue({hour: 10, minute: 50, AM: true});

@descr:

**Related sample**: [Timepicker. Set Timepicker Value](https://snippet.dhtmlx.com/6r8lkhbg)

The value of timepicker set as an array should have the following elements:

- the hour value
- the minutes value
- the "AM/PM" identifier for 12-hour format as a string

The date set as a number is the number of milliseconds since January 1, 1970, 00:00:00 UTC returned by the [getTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) method of the **Date** object.

[comment]: # (@relatedapi: timepicker/api/timepicker_getvalue_method.md)

[comment]: # (@related: timepicker/usage.md#setting-value)
