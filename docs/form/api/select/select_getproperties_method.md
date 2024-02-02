---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Select Method 
description: You can explore the getProperties method of the Select control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "select",
            name: "select",
            label: "select",
            labelWidth: "50px",
            width:"200px",
            options: [
                {
                    value: "1",
                    content: "1",
                    disabled: true
                },
                {
                    value: "2",
                    content: "2"
                }
            ]        
        }  
    ]
});

form.getItem("select").getProperties();

@descr:

The returned object of the **Select** control looks like:

~~~js
{
    errorMessage: "",
    height: "content",
    helpMessage: "",
    hiddenLabel: false,
    icon: "",
    label: "select",
    labelPosition: "top",
    labelWidth: "50px",
    padding: 0,
    preMessage: "",
    successMessage: "",
    validation: undefined,
    width: "200px"
}
~~~

You will find the description of these properties [here](form/api/select/api_select_properties.md).

@changelog: added in v7.0
