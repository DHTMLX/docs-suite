---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Toggle Method 
description: You can explore the setProperties method of the Toggle control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("toggle").setProperties({
    icon: "dxi dxi-eye",
    width: "100px",
    padding: 20
});

@descr:

:::info
The method invokes the [afterChangeProperties](form/api/toggle/toggle_afterchangeproperties_event.md) and [beforeChangeProperties](form/api/toggle/toggle_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **Toggle** control:

~~~js
css: string,
width: string | number | "content",
height: string | number | "content",
padding: string | number,
full: boolean,
text: string,
icon: string,
offText: string,
offIcon: string,
value: string | number
~~~

You will find the description of these properties [here](form/api/toggle/api_toggle_properties.md).