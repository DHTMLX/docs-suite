---
sidebar_label: beforeChange
title: JavaScript Timepicker - beforeChange Event 
description: You can explore the beforeChange event of Timepicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChange

@short: fires before change of the timepicker value

@signature: {'beforeChange: (value: string | object) => boolean | void;'}

@params:
- `value: string | object` - the value of a timepicker

@returns:
Return `false` to prevent changing the value of the timepicker; otherwise, `true`.

@example:
timepicker.events.on("beforeChange", function(value){
	console.log("The value of a timepicker has beforeChanged to "+ value);
    return true;
});

@descr:

**Related sample**: [Timepicker. Events](https://snippet.dhtmlx.com/5ccptwy7)

The type of the value parameter depends on the applied [valueFormat](timepicker/api/timepicker_valueformat_config.md) and [timeFormat](timepicker/api/timepicker_timeformat_config.md):

- If *valueFormat: "string"*  and *timeFormat:24* are specified, the string value will include just the hour and minutes: "00:39"
- If *valueFormat: "string"*  and *timeFormat:12* are specified, the string value will include hour, minutes, and am/pm identifiers: "06:00AM"
- If *valueFormat: "timeObject"*  and *timeFormat:24* are specified, the object value will contain key:value pairs for hours, minutes and their values: {hour: 0, minute: 39}
- If *valueFormat: "timeObject"*  and *timeFormat:12* are specified, the object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values: {hour: 6, minute: 0, AM: true}

**Change log**: The event was added in v8.0