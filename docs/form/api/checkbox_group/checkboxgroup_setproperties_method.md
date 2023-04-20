---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Checkbox Group Method 
description: You can explore the setProperties method of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short:  allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(arg?: string | object, properties?: object): void;'}

@params:
- `arg: string | object` - optional, either the id of a checkbox, or an object with the available attributes of the CheckboxGroup control and their new values
- `properties: object` - optional, an object with the available attributes of the checkbox and their new values

@example:
// 1. Changes values in the configuration of the CheckboxGroup control
form.getItem("checkboxGroup").setProperties({
    label: "New label",
    labelPosition: "left",
    options: {
        rows: [
            {
                id: "first",
                type: "checkbox",
                text: "New Select 1",
            },
            {
                id: "second",
                type: "checkbox",
                text: "New Select 2",
            },
            {
                id: "third",
                type: "checkbox",
                text: "New Select 3",
            },
        ]
    }
});

// 2. Changes values in the configuration of the specified checkbox of CheckboxGroup
form.getItem("checkboxGroup").setProperties("first", {
    text: "New Text",
	padding: 20
});

@descr:

We recommend that you apply the second way of using the method if you want to change the configuration of a separate checkbox in the CheckboxGroup control:

~~~js
form.getItem("checkboxGroup").setProperties("first", {
    text: "New Text",
    padding: 20
});
~~~

:::info
The method invokes the [](form/api/checkbox_group/checkboxgroup_afterchangeproperties_event.md) and [](form/api/checkbox_group/checkboxgroup_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **CheckboxGroup** control:

~~~js
{
	css: string,
	errorMessage: string,
	height: string | number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	label: string,
	labelPosition: string,
	labelWidth: string | number,
	options: object,
	padding: string | number,
	preMessage: string,
	required: boolean,
	successMessage: string,
	width: string|number|"content"
}
~~~

It is possible to change values of the following configuration attributes of a **checkbox** of the CheckboxGroup control:

~~~js
{
	css: string,
	height: string | number | "content",
	padding: string | number,
	text: string,
	width: string | number | "content"
}
~~~

You will find the description of these properties [here](form/api/checkbox_group/api_checkboxgroup_properties.md).

@changelog: added in v7.0
