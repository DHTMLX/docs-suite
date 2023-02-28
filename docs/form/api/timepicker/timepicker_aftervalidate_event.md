---
sidebar_label: afterValidate
title: JavaScript Form - afterValidate Timepicker Event 
description: You can explore the afterValidate event of the Timepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterValidate

@short: fires after the control value is validated

@signature: {'afterValidate: (value: string | ITimeObject, isValidate: boolean) => void;'}

@params:
- `value: string | object` - the validated value
- `isValidate: boolean` - the result of validation

@example:
form.getItem("timepicker").events.on("afterValidate", function(value, isValidate) {
    console.log("afterValidate", value, isValidate);
});

@descr:

The type of the value parameter depends on the applied [valueFormat](form/api/timepicker/api_timepicker_properties.md) and [timeFormat](form/api/timepicker/api_timepicker_properties.md):

- If *valueFormat: "string"*  and *timeFormat:24* are specified, the string value will include just the hour and minutes: "00:39"
- If *valueFormat: "string"*  and *timeFormat:12* are specified, the string value will include hour, minutes, and am/pm identifiers: "06:00AM"
- If *valueFormat: "timeObject"*  and *timeFormat:24* are specified, the object value will contain key:value pairs for hours, minutes and their values: {hour: 0, minute: 39}
- If *valueFormat: "timeObject"*  and *timeFormat:12* are specified, the object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values: {hour: 6, minute: 0, AM: true}

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/timepicker/timepicker_validate_method.md)
