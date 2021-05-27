---
sidebar_label: afterValidate
title: JavaScript Form - afterValidate Timepicker Event 
hide_title: true
description: You can explore the afterValidate Timepicker event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterValidate

@short: fires after the control value is validated

@signature: {'afterValidate: (value: string | ITimeObject, isValid: boolean) => void;'}

@params:
- `value: string | object` - the validated value
- `isValid: boolean` - the result of validation

@example:
form.getItem("timepicker").events.on("AfterValidate", function(value, isValid) {
    console.log("AfterValidate", value, isValid);
});

@descr:

The type of the value parameter depends on the applied [valueFormat](form/timepicker.md#addingtimepicker) and [timeFormat](form/timepicker.md#addingtimepicker):

- If *valueFormat: "string"*  and *timeFormat:24* are specified, the string value will include just the hour and minutes: "00:39"
- If *valueFormat: "string"*  and *timeFormat:12* are specified, the string value will include hour, minutes, and am/pm identifiers: "06:00AM"
- If *valueFormat: "timeObject"*  and *timeFormat:24* are specified, the object value will contain key:value pairs for hours, minutes and their values: {hour: 0, minute: 39}
- If *valueFormat: "timeObject"*  and *timeFormat:12* are specified, the object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values: {hour: 6, minute: 0, AM: true}

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/timepicker/timepicker_validate_method.md)
