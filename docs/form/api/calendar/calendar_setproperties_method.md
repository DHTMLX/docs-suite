---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Datepicker Method 
description: You can explore the setProperties method of the Datepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("datepicker").setProperties({
    editable: true,
    labelWidth: "100px",
    required: true
});

@descr:

:::info
The method invokes the [](form/api/calendar/calendar_afterchangeproperties_event.md) and [](form/api/calendar/calendar_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **DatePicker** control:

~~~js
{
	css: string,
	dateFormat: string,
	disabledDates: function,
	editable: boolean,
	errorMessage: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean, 
	icon: string,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	mark: function,
	mode: string,
	padding: string|number,
	placeholder: string,
	preMessage: string,
	required: boolean,
	successMessage: string,
	thisMonthOnly: boolean,
	timeFormat: number,
	timePicker: boolean,
	validation: function,
	valueFormat: string,
	weekNumbers: boolean,
	weekStart: string,
	width: string|number|"content",
}
~~~

You will find the description of these properties [here](form/api/calendar/api_calendar_properties.md).

@changelog: added in v7.0
