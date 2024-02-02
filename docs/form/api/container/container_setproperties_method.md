---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Container Method 
description: You can explore the setProperties method of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration properties of the Container control dynamically

@signature: setProperties(properties: object): void;

@params:
- `properties: object` - an object with the available properties of the control and their new values

@example:
form.getItem("container").setProperties({
    height: "200",
    width: "800",
    padding: "10"
});

@descr:
:::info
The method invokes the [afterChangeProperties](form/api/container/container_afterchangeproperties_event.md) and [beforeChangeProperties](form/api/container/container_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following properties of the **Container** control:

~~~js
{
    css: string,
    width: string | number | "content",
    height: string | number | "content",
    padding: string | number,
    label: string,
    labelWidth: string | number,
    labelPosition: "left" | "top",
    hiddenLabel: boolean,
    helpMessage: string
}
~~~

You will find the description of these properties [here](form/api/container/api_container_properties.md).
  
@changelog: added in v7.2
