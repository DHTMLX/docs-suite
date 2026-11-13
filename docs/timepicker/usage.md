---
sidebar_label: Work with TimePicker
title: JavaScript Timepicker - Work with TimePicker 
description: You can explore how to work with TimePicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Timepicker

The Timepicker API lets you set the value of the component and get its current value.

## Set the value {#setting-value}

The [`setValue()`](timepicker/api/timepicker_setvalue_method.md) method changes the value of a timepicker. The method takes the value as a parameter in one of the following formats:

- A `Date` object
- A string
- An array with the following elements:
  - The hour value
  - The minute value
  - The "AM/PM" identifier for the 12-hour format, as a string
- The number of milliseconds since January 1, 1970, 00:00:00 UTC returned by the [`getTime()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) method of the `Date` object

For example:

~~~js
// set the value as a string
timepicker.setValue("00:39");

// set the value as a Date object
timepicker.setValue(new Date('January 10, 2019 17:54:00'));

// set the value as an array
timepicker.setValue([6,20,"AM"]);

// set the value as a number
timepicker.setValue(1559288966422);
~~~

**Related sample**: [Timepicker. Set Timepicker value](https://snippet.dhtmlx.com/6r8lkhbg)

## Get the value {#getting-value}

The [`getValue()`](timepicker/api/timepicker_getvalue_method.md) method returns the value of a timepicker as a string or as an object. The method takes one parameter:

- `asObject` — (`boolean`) optional. If `true`, the method returns the value as an object. The default value is `false`.

~~~js
// return value as a string in the 24-hour format
const val1 = timepicker.getValue(); // -> "00:39"

// return value as an object in the 24-hour format
const val2 = timepicker.getValue(true);// -> {hour: 0, minute: 39}

// return value as a string in the 12-hour format
const val3 = timepicker2.getValue(); // -> "06:00AM"

// return value as an object in the 12-hour format
const val4 = timepicker2.getValue(true); // -> {hour: 6, minute: 0, AM: true}
~~~

**Related sample**: [Timepicker. Get Timepicker value](https://snippet.dhtmlx.com/k4atpgnd)

The format of the returned value depends on the passed parameter and the time format:

| Time format | String value | Object value |
| --- | --- | --- |
| 24-hour | The hour and minutes, for example `"00:39"` | The `hour` and `minute` keys with their values |
| 12-hour | The hour, minutes, and AM/PM identifier, for example `"06:00AM"` | The `hour`, `minute`, and `AM` keys with their values |
