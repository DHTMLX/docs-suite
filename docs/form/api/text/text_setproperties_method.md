---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Text Method 
description: You can explore the setProperties method of the Text control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("text").setProperties({
    label: " Some text"
});

@descr:

:::info
The method invokes the [](form/api/text/text_afterchangeproperties_event.md) and [](form/api/text/text_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **Text** control:

~~~js
{
    css: string,
    errorMessage: string,
    height: string|number|"content",
    helpMessage: string,
    hiddenLabel: boolean,
    inputType: string,
    label: string,
    labelPosition: string,
    labelWidth: string|number,
    padding: string|number,
    preMessage: string,
    successMessage: string,
    width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/text/api_text_properties.md).

@changelog: added in v7.0
