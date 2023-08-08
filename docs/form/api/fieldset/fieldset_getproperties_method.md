---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Fieldset Method 
description: You can explore the getProperties method of the Fieldset control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "fieldset",
            label: "Section name",
            rows: [
                {
                    type: "input",
                    name: "name",
                    required: true,
                    label: "Name",
                    placeholder: "Type text",
                },
                {
                    type: "input",
                    name: "surname",
                    required: true,
                    label: "Surname",
                    placeholder: "Type text",
                },
                // more controls
            ]
        }
    ]
});

form.getItem("fieldset").getProperties();

@descr:

The returned object of the **Fieldset** control looks like:

~~~js
{
    width: 250,
    height: 125,
    label: "form fieldset",
    labelAlignment: "left"
}
~~~

You will find the description of these properties [here](form/api/fieldset/api_fieldset_properties.md).