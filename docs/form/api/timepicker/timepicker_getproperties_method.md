---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Timepicker Method 
description: You can explore the getProperties method of the Timepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getProperties()

@short: returns an object with the available configuration attributes of the control

@signature: {'getProperties(): object;'}

@returns:
An object with the available attributes of the control and their values.

@example:
const form = new dhx.Form("form_container", {
    rows: [
        {
            type: "timepicker",
            name: "timepicker",
            label: "time",
            labelWidth: "50px",
            timeFormat: 12,
            valueFormat: "timeObject",
            value: [6,20,"AM"]
        }
    ]
});

form.getItem("timepicker").getProperties();

@descr:

The returned object of the **TimePicker** control looks like:

~~~js
{
    controls: false,
    editable: false,
    errorMessage: "",
    height: "content",
    helpMessage: "",
    hiddenLabel: false,
    icon: "",
    label: "time",
    labelPosition: "top",
    labelWidth: "50px",
    padding: 0,
    placeholder: "",
    preMessage: "",
    required: false,
    successMessage: "",
    timeFormat: 12,
    validation: undefined,
    valueFormat: "timeObject",
    width: "content"
}
~~~

You will find the description of these properties [here](form/api/timepicker/api_timepicker_properties.md).

@changelog: added in v7.0
