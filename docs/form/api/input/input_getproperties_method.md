---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Input Method 
description: You can explore the getProperties method of the Input control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "input",
            name: "input",
            label: "Name",
            icon: "dxi dxi-magnify",
            placeholder: "John Doe"           
        } 
    ]
});

form.getItem("input").getProperties();

@descr:

The returned object of the **Input** control looks like:

~~~js
{
    autocomplete: false,
    errorMessage: "",
    height: "content",
    helpMessage: "",
    hiddenLabel: false,
    icon: "dxi dxi-magnify",
    inputType: "text",
    label: "Name",
    labelPosition: "top",
    labelWidth: "",
    max: undefined,
    maxlength: undefined,
    min: undefined,
    minlength: undefined,
    padding: 0,
    placeholder: "John Doe",
    preMessage: "",
    readOnly: false,
    required: false,
    successMessage: "",
    validation: undefined,
    width: "content"    
}
~~~

You will find the description of these properties [here](form/api/input/api_input_properties.md).

@changelog: added in v7.0
