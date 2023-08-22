---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Select Method 
description: You can explore the setProperties method of the Select control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("select").setProperties({
    label: "New label",
    labelWidth: "100px", 
    width: "300px"
});

@descr:

:::info
The method invokes the [](form/api/select/select_afterchangeproperties_event.md) and [](form/api/select/select_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **Select** control:

~~~js
{
	css: string,
	errorMessage: string,
	height: string | number | "content",
	helpMessage: string,
	hiddenLabel: boolean,
	icon: string,
	label: string,
	labelPosition: string,
	labelWidth: string | number,
	padding: string | number,
	preMessage: string,
	successMessage: string,
	validation: function,
	width: string | number | "content"
}
~~~

You will find the description of these properties [here](form/api/select/api_select_properties.md).

@changelog: added in v7.0
