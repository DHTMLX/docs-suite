---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Container Method 
description: You can explore the getProperties method of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getProperties()

@short: returns an object with the available configuration properties of the control and their values

@signature: getProperties(): object;

@returns:
An object with the available properties of the control and their values.

@example: const form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    padding: "40px",
    rows: [
        {
            type: "container",
            name: "grid",
            padding: "12px 0px",
            height: "400px",
        },
    ]
});

form.getItem("container").getProperties();

@descr:

The returned object of the Container control looks like:

~~~js
{
    height: "400px",
    padding: "12px 0px",
    width: "content"
}
~~~

You will find the description of these properties [here](form/api/container/api_container_properties.md).

@changelog: added in v7.2
