---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Checkbox Method 
description: You can explore the getProperties method of the Checkbox control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "checkbox",
            label: "I agree",
            name: "agree",
            id: "agree",
            value: "checkboxvalue"
        }
    ]
});

form.getItem("checkbox").getProperties();

@descr:

The returned object of the **Checkbox** control looks like:

~~~js
{
	errorMessage: "",
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	label: "",
	labelPosition: "top",
	labelWidth: "",
	padding: 0,
	preMessage: "",
	required: false,
	successMessage: "",
	text: "I agree",
	width: "content"
}
~~~

You will find the description of these properties [here](form/api/checkbox/api_checkbox_properties.md).

@changelog: added in v7.0
