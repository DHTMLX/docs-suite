---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Datepicker Method 
description: You can explore the getProperties method of the Datepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getProperties()

@short: returns an object with the available configuration attributes of the control

@signature: {'getProperties(): object;'}

@returns:
An object with the available attributes of the control and their values.

@example:
const form = new dhx.Form("form_container", {
    rows: [
        {
            type: "datepicker",
            name: "datepicker",
            label: "date",
            labelWidth: "50px"
        }
    ]
});

form.getItem("datepicker").getProperties();

@descr:

The returned object of the **DatePicker** control looks like:

~~~js
{
	dateFormat: "%d/%m/%y",
	disabledDates: undefined,
	editable: false,
	errorMessage: "",
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	icon: "",
	label: "date",
	labelPosition: "top",
	labelWidth: "50px",
	mark: undefined,
	mode: "calendar",
	padding: 0,
	placeholder: "",
	preMessage: "",
	required: false,
	successMessage: "",
	thisMonthOnly: false,
	timeFormat: 24,
	timePicker: false,
	validation: undefined,
	valueFormat: "string",
	weekNumbers: false,
	weekStart: "sunday",
	width: "content"
}
~~~

You will find the description of these properties [here](form/api/calendar/api_calendar_properties.md).

@changelog: added in v7.0
