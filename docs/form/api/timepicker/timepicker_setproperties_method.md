---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Timepicker Method 
description: You can explore the setProperties method of the Timepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("timepicker").setProperties({
    editable: true, 
    label: "New time", 
    timeFormat: 24, 
});

@descr:

:::info
The method invokes the [](form/api/timepicker/timepicker_afterchangeproperties_event.md) and [](form/api/timepicker/timepicker_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **TimePicker** control:

~~~js
{
	controls: boolean,
	css: string,
	editable: boolean,
	errorMessage: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	icon: string,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	padding: string|number,
	placeholder: string,
	preMessage: string,
	required: boolean,
	successMessage: string,
	timeFormat: number,
	validation: function,
	valueFormat: string,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/timepicker/api_timepicker_properties.md).

@changelog: added in v7.0
