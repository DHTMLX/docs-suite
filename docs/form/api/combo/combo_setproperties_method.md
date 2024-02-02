---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Combo Box Method 
description: You can explore the setProperties method of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("combo").setProperties({
    label: "New label",
    labelPosition: "top"
});

@descr:

:::info
The method invokes the [](form/api/combo/combo_afterchangeproperties_event.md) and [](form/api/combo/combo_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **Combo** control:

~~~js
{
    css: string,
    errorMessage: string,
    filter: function, 
    height: string|number|"content",
    helpMessage: string,
    hiddenLabel: boolean,
    itemHeight: number,
    itemsCount: boolean | function,
    label: string,
    labelPosition: string,
    labelWidth: string|number,
    listHeight: number,
    multiselection: boolean,
    padding: string|number,
    placeholder: string,
    preMessage: string,
    readOnly: boolean,
    required: boolean,
    selectAllButton: boolean,
    successMessage: string,
    template: function,
    validation: function,
    virtual: boolean,
    width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/combo/api_combo_properties.md).

@changelog: added in v7.0
