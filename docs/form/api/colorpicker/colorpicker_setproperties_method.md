---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Colorpicker Method 
description: You can explore the setProperties method of the Colorpicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("colorpicker").setProperties({
    editable: true, 
    labelWidth: "300px",
    label: "New label"
});
 
@descr:

:::info
The method invokes the [](form/api/colorpicker/colorpicker_afterchangeproperties_event.md) and [](form/api/colorpicker/colorpicker_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **ColorPicker** control:

~~~js
{
	css: string,
	customColors: array,
	editable: boolean,
	errorMessage: string,
	grayShades: boolean,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	icon: string,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	mode: string,
	padding: string|number,
	palette: array,
	placeholder: string,
	preMessage: string,
	required: boolean,
	successMessage: string,
	validation: function,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/colorpicker/api_colorpicker_properties.md).

@changelog: added in v7.0
