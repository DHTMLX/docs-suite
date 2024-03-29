---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Spacer Method 
description: You can explore the getProperties method of the Spacer control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "spacer",
            name: "spacer"
        }
    ]
});

form.getItem("spacer").getProperties();

@descr:

The returned object of the **Spacer** control looks like:

~~~js
{
    height: "content",
    padding: 0,
    width: "content"
}
~~~

You will find the description of these properties [here](form/api/spacer/api_spacer_properties.md).

@changelog: added in v7.0
