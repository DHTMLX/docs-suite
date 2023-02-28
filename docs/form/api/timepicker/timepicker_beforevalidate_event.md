---
sidebar_label: beforeValidate
title: JavaScript Form - beforeValidate Timepicker Event 
description: You can explore the beforeValidate event of the Timepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeValidate

@short: fires before the control value is validated

@signature: {'beforeValidate: (value: string | ITimeObject) => boolean | void;'}

@params:
- `value: string | object` - the value to be validated

@returns:
Return `false` to cancel the default action of the event; otherwise, `true`.

@example:
form.getItem("timepicker").events.on("beforeValidate", function(value) {
    console.log("beforeValidate", value);
    return true;
});

@descr:

The type of the value parameter depends on the applied [valueFormat](form/api/timepicker/api_timepicker_properties.md) and [timeFormat](form/api/timepicker/api_timepicker_properties.md):

- If *valueFormat: "string"*  and *timeFormat:24* are specified, the string value will include just the hour and minutes: "00:39"
- If *valueFormat: "string"*  and *timeFormat:12* are specified, the string value will include hour, minutes, and am/pm identifiers: "06:00AM"
- If *valueFormat: "timeObject"*  and *timeFormat:24* are specified, the object value will contain key:value pairs for hours, minutes and their values: {hour: 0, minute: 39}
- If *valueFormat: "timeObject"*  and *timeFormat:12* are specified, the object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values: {hour: 6, minute: 0, AM: true}

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/timepicker/timepicker_validate_method.md)
