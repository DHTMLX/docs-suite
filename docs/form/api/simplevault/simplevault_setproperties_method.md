---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Simple Vault Method 
description: You can explore the setProperties method of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("simplevault").setProperties({
    labelWidth: "140px", 
    labelPosition: "top"
});
 
@descr:

:::info
The method invokes the [](form/api/simplevault/simplevault_afterchangeproperties_event.md) and [](form/api/simplevault/simplevault_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **SimpleVault** control:

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
    helpMessage: string,
    required: boolean,
    preMessage: string,
    successMessage: string,
    errorMessage: string,
    params: { [key: string]: any },
    headerParams: { [key: string]: any },
    target: string,
    fieldName: string,
    singleRequest: boolean,
    updateFromResponse: boolean,
    autosend: boolean,
    accept: string,
    validation: (value: ISimpleVaultValue) => boolean
}
~~~

You will find the description of these properties [here](form/api/simplevault/api_simplevault_properties.md).

@changelog: added in v7.0
