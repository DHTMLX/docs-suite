---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Toggle Method 
description: You can explore the getProperties method of the Toggle control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "toggle",
            // renders an icon in the enabled state
            icon: "dxi dxi-eye",
            // renders an icon in the disabled state
            offIcon: "dxi dxi-eye-off"
        },
    ]
});

form.getItem("toggle").getProperties();

@descr:

The returned object of the **Toggle** control looks like:

~~~js
{
    css: "",
    width: "content",
    height: "content",
    padding: "",
    full: false,
    text: "Visible",
    icon: "dxi dxi-eye",
    offText: "Invisible",
    offIcon: "dxi dxi-eye-off",
    value: undefined
}
~~~

You will find the description of these properties [here](form/api/toggle/api_toggle_properties.md).


