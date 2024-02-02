---
sidebar_label: afterHide
title: JavaScript Form - afterHide Timepicker Event 
description: You can explore the afterHide event of the Timepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterHide

@short: fires after a control is hidden

@signature: {'afterHide: (value: string | object, init: boolean) => void;'}

@params:
- `value: string | object` - the current value of the control
- `init: boolean` - *true*, if the event is triggered on the control initialization

@example:
form.getItem("timepicker").events.on("afterHide", function(value, init) {
    console.log("afterHide", value, init);
});

@descr:

The type of the value parameter depends on the applied [`valueFormat`](form/api/timepicker/api_timepicker_properties.md) and [`timeFormat`](form/api/timepicker/api_timepicker_properties.md):

- If `valueFormat: "string"`  and `timeFormat:24` are specified, the string value will include just the hour and minutes: "00:39"
- If `valueFormat: "string"`  and `timeFormat:12` are specified, the string value will include hour, minutes, and am/pm identifiers: "06:00AM"
- If `valueFormat: "timeObject"`  and `timeFormat:24` are specified, the object value will contain `key:value` pairs for hours, minutes and their values: `{hour: 0, minute: 39}`
- If `valueFormat: "timeObject"`  and `timeFormat:12` are specified, the object value will contain `key:value` pairs for hours, minutes, am/pm identifiers and their values: `{hour: 6, minute: 0, AM: true}`

@changelog: added in v7.0
