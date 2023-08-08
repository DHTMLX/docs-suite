---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Avatar Method 
description: You can explore the setProperties method of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("fieldset").setProperties({
    label: "Personal info", 
    labelAlignment: "left"
});

@descr:
:::info
The method invokes the [](form/api/fieldset/fieldset_afterchangeproperties_event.md) and [](form/api/fieldset/fieldset_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **Fieldset** control:

~~~js
{
    css?: string;
    width?: string | number | "content";
    height?: string | number | "content";
    padding?: string | number;

    label?: string;
    labelAlignment?: "left" | "right" | "center";
    align?: "start" | "center" | "end" | "between" | "around" | "evenly";
}
~~~

You will find the description of these properties [here](form/api/fieldset/api_fieldset_properties.md).