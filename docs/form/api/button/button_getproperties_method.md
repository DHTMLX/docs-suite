---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Button Method 
description: You can explore the getProperties method of the Button control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "button",
            name: "button",
            text: "Send",
            size: "medium",
            view: "flat",
            submit: true,
            color: "primary"
        }
    ]
});

form.getItem("button").getProperties();

@descr:

The returned object of the **Button** control looks like:

~~~js
{
    circle: false, 
    color: "primary",
    full: false,
    height: "content",
    icon: "",
    loading: false,
    padding: 0,
    size: "medium",
    submit: true,
    text: "Send",
    url: "",
    view: "flat",
    width: "content"
}
~~~

You will find the description of these properties [here](form/api/button/api_button_properties.md).

@changelog: added in v7.0
