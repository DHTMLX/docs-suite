---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Colorpicker Method 
description: You can explore the getProperties method of the Colorpicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "colorpicker",
            name: "colorpicker",
            labelWidth: "200px",
            label: "Choose your color"
        }
    ]
});

form.getItem("colorpicker").getProperties();

@descr:

The returned object of the **ColorPicker** control looks like:

~~~js
{
	customColors: [],
	editable: false,
	errorMessage: "",
	grayShades: true,
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	icon: "",
	label: "Choose your color",
	labelPosition: "top",
	labelWidth: "200px",
	mode: "palette",
	padding: 0,
	palette: [Array(7), Array(7), ...],
	placeholder: "",
	preMessage: "",
	required: false,
	successMessage: "",
	validation: undefined,
	width: "content"
}
~~~

You will find the description of these properties [here](form/api/colorpicker/api_colorpicker_properties.md).

@changelog: added in v7.0
