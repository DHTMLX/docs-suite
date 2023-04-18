---
sidebar_label: getValue()
title: JavaScript Form - getValue Timepicker Method 
description: You can explore the getValue method of the Timepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getValue()

@short: returns the current value of a TimePicker control

@signature: {'getValue(asObject?: boolean): string | object;'}

@params:
- `asObject: boolean` - optional, specifies that the value will be returned as an object, `false` by default

@returns:
Either a string, or object with the current value of the control.

@example:
// return value as a string in the 24-hour format
const val1 = timepicker.getItem("timepicker").getValue(); 
// -> "00:39" 

// return value as an object in the 24-hour format
const val2 = timepicker.getItem("timepicker").getValue(true);
// -> {hour: 0, minute: 39}

// return value as a string in the 12-hour format
const val3 = timepicker.getItem("timepicker").getValue(); 
// -> "06:00AM"

// return value as an object in the 12-hour format
const val4 = timepicker.getItem("timepicker").getValue(true); 
// -> {hour: 6, minute: 0, AM: true}

@descr:

The returned value can be of several types, depending on the passed parameter and the applied time format:

- for the 24-hour format a return string value will include just the hour and minutes: "00:39"
- for the 12-hour format a return string value will include hour, minutes, and am/pm identifiers: "06:00AM"
- for the 24-hour format a return object value will contain key:value pairs for hours, minutes and their values
- for the 12-hour format a return object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values

@changelog: 

The *asObject* parameter of the method is added in v7.0
