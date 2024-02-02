---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Avatar Method 
description: You can explore the getProperties method of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "avatar",
            name:"avatar",
            helpMessage: "Help information",
            required: true,
            label: "Avatar",
            labelWidth: 140,
            target: "https://docs.dhtmlx.com/suite/backend/upload",
        }
    ]
});

form.getItem("avatar").getProperties();

@descr:

The returned object of the **Avatar** control looks like:

~~~js
{
    "css": "",
    "width": "content",
    "height": "content",
    "padding": undefined,
    "label": "Avatar",
    "labelWidth": 140,
    "labelPosition": "top",
    "hiddenLabel": false,
    "helpMessage": "Help information",
    "required": true,
    "preMessage": "",
    "successMessage": "",
    "errorMessage": "",
    "validation": undefined,
    "readOnly": false,
    "removeIcon": true,
    "size": "medium",
    "circle": false,
    "alt": "",
    "icon": "",
    "placeholder": "",
    "preview": "",
    "accept": "",
    "target": "https://docs.dhtmlx.com/suite/backend/upload",
    "fieldName": "file",
    "autosend": false,
    "params": undefined,
    "headerParams": undefined,
    "updateFromResponse": true
}
~~~

You will find the description of these properties [here](form/api/avatar/api_avatar_properties.md).

