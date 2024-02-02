---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Radiogroup Method 
description: You can explore the setProperties method of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(arg?: string | object, props?: object): void;'}

@params:
- `arg: string | object` - either the id of a radio button, or an object with the available attributes of the RadioGroup control and their new values
- `props: object` - optional, an object with the available attributes of the radio button and their new values

@example:
// 1. Changes values in the configuration of the RadioGroup control
form.getItem("radiogroup").setProperties({
    label: "New label",
    labelPosition: "top",
    helpMessage: " Help information",
    options: {
        rows: [
            {
                id: "first",
                type: "radioButton",
                text: "Select 1",
                value: "1",
            },
            {
                id: "second",
                type: "radioButton",
                text: "Select 2",
                value: "2"
            },
            {
                id: "third",
                type: "radioButton",
                text: "Select 3",
                value: "3"
            }
        ]
    }
});

// 2. Changes values in the configuration of the specified radio button of the control
form.getItem("radiogroup").setProperties("first", {
    text: "New Text",
    padding: 20
});

@descr:

We recommend that you apply the second way of using the method if you want to change the configuration of a separate radio button in the RadioGroup control:

~~~js
form.getItem("radiogroup").setProperties("first", {
    text: "New Text",
    padding: 20
});
~~~

:::info
The method invokes the [](form/api/radiogroup/radiogroup_afterchangeproperties_event.md) and [](form/api/radiogroup/radiogroup_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **RadioGroup** control:

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
    options: object,
    padding: string|number,
    preMessage: string,
    required: boolean,
    successMessage: string,
    width: string|number|"content"
}
~~~

It is possible to change values of the following configuration attributes of a **radio button** of the RadioGroup control:

~~~js
{
    css: string,
    height: string|number|"content",
    padding: string|number,
    text: string,
    width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/radiogroup/api_radiogroup_properties.md).

@changelog: added in v7.0
