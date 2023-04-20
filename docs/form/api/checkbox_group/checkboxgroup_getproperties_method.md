---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Checkbox Group Method 
description: You can explore the getProperties method of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getProperties()

@short: returns an object with the available configuration attributes of the control

@signature: {'getProperties(id?: string): object;'}

@params:
- `id: string` - optional, the id of a checkbox

@returns:
An object either with the available attributes of the control and their values, or with the available attributes of the checkbox and their values

@example:
const form = new dhx.Form("form_container", { 
    rows: [
        {
            id: "checkboxGroup",
            type: "checkboxGroup",
            name: "checkboxGroup",
            required: true,
            label: "Checkbox Group",
            labelWidth: 140,
            labelPosition: "left",
            helpMessage: "Help information",
            padding: "50px",
            value: {
                first: true,
            },
            options: {
                padding: "50px",
                rows: [
                    {
                        id: "first",
                        type: "checkbox",
                        text: "Select 1",
                    },
                    {
                        id: "second",
                        type: "checkbox",
                        text: "Select 2",
                        checked: true
                    }
                ]
            }
        }
     ]
});

// return object of the CheckboxGroup control 
form.getItem("checkboxGroup").getProperties();

// return object of checkbox of the CheckboxGroup control 
form.getItem("checkboxGroup").getProperties("second");

@descr:

The returned object of the **CheckboxGroup** control looks like:

~~~js
{
	errorMessage: "",
	height: "content",
	helpMessage: "Help information",
	hiddenLabel: false,
	label: "Checkbox Group",
	labelPosition: "left",
	labelWidth: 140,
	options: {...},
	padding: 0,
	preMessage: "",
	required: true,
	successMessage: "",
	width: "content"
}
~~~

The returned object of a **checkbox** of the **CheckboxGroup** control looks like:

~~~js
{
	height: "content",
	padding: 0,
	text: "Select 2",
	width: "content"
}
~~~

You will find the description of all these properties [here](form/api/checkbox_group/api_checkboxgroup_properties.md).

@changelog: added in v7.0
