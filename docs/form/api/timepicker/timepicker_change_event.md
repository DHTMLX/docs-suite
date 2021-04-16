---
sidebar_label: change
title: change
---          

@short: fires on changing the value of a control
 

@params:
- value     string|object     the current value of the control


@example:
form.getItem("timepicker").events.on("Change", function(value) {
    console.log("Change", value);
});


@template: api_event
@descr:
The type of the value parameter depends on the applied [valueFormat](form/timepicker.md#addingtimepicker) and [timeFormat](form/timepicker.md#addingtimepicker):

- If *valueFormat: "string"*  and *timeFormat:24* are specified, the string value will include just the hour and minutes: "00:39"
- If *valueFormat: "string"*  and *timeFormat:12* are specified, the string value will include hour, minutes, and am/pm identifiers: "06:00AM"
- If *valueFormat: "timeObject"*  and *timeFormat:24* are specified, the object value will contain key:value pairs for hours, minutes and their values: {hour: 0, minute: 39}
- If *valueFormat: "timeObject"*  and *timeFormat:12* are specified, the object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values: {hour: 6, minute: 0, AM: true}

@changelog: added in v7.0
