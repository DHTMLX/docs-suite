---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Textarea Method 
description: You can explore the setProperties method of the Textarea control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("textarea").setProperties({
    label: "New textarea", 
    labelWidth: "80px",
    width: 500
});

@descr:

:::info
The method invokes the [](form/api/textarea/textarea_afterchangeproperties_event.md) and [](form/api/textarea/textarea_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **Textarea** control:

~~~js
{
    css: string,
    errorMessage: string,
    height: string|number|"content",
    helpMessage: string,
    hiddenLabel: boolean,
    label: string,
    labelPosition: string,
    labelWidth: string|number,
    maxlength: string|number,
    minlength: string|number,
    padding: string|number,
    placeholder: string,
    preMessage: string,
    readOnly: boolean,
    required: boolean,
    successMessage: string,
    validation: object|function,
    width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/textarea/api_textarea_properties.md).

@changelog: added in v7.0
