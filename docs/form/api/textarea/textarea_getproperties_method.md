---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Textarea Method 
description: You can explore the getProperties method of the Textarea control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "textarea",
            name:"textarea",
            label: "textarea",
            labelWidth: "70px",
            value: "Some nice text",
            width:400
        }
    ]
});

form.getItem("textarea").getProperties();

@descr:

The returned object of the **Textarea** control looks like:

~~~js
{
    errorMessage: "",
    height: "content",
    helpMessage: "",
    hiddenLabel: false,
    label: "textarea",
    labelPosition: "top",
    labelWidth: "70px",
    maxlength: undefined,
    minlength: undefined,
    padding: 0,
    placeholder: "",
    preMessage: "",
    readOnly: false,
    required: false,
    successMessage: "",
    validation: undefined,
    width: 400
}
~~~

You will find the description of these properties [here](form/api/textarea/api_textarea_properties.md).

@changelog: added in v7.0
