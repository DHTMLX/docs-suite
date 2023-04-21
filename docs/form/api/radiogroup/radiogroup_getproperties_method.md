---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Radiogroup Method 
description: You can explore the getProperties method of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getProperties()

@short: returns an object with the available configuration attributes of the control

@signature: {'getProperties(id?: string): object;'}

@params:
- `id: string` - optional, the id of a radio button

@returns:
An object either with the available attributes of the control and their values, or with the available attributes of the radio button and their values.

@example:
const form = new dhx.Form("form_container", { 
    rows: [
        {
            id: "radiogroup",
            type: "radioGroup",
            required: true,
            label: "Radio Group",
            labelWidth: 140,
            labelPosition: "left",
            helpMessage: " Help information",
            value: "1",
            options: {
                rows: [
                    {
						id: "1,"
                        type: "radioButton",
                        text: "Select 1",
                        value: "1",
                    },
                    {
						id: "2",
                        type: "radioButton",
                        text: "Select 2",
                        value: "2"
                    },
                ]
            }
        }
     ]
});

// return object of the RadioGroup control 
form.getItem("radiogroup").getProperties();

// return object of radio button of the control
form.getItem("radiogroup").getProperties("1");

@descr:

The returned object of the **RadioGroup** control looks like:

~~~js
{
	errorMessage: "",
	height: "content",
	helpMessage: " Help information",
	hiddenLabel: false,
	label: "Radio Group",
	labelPosition: "left",
	labelWidth: 140,
	options: {rows: Array(2), full: false},
	padding: 0,
	preMessage: "",
	required: true,
	successMessage: "",
	width: "content"
}
~~~

The returned object of a **radio button** of the RadioGroup control looks like:

~~~js
{
	height: "content"
	padding: 0
	text: "Select 1"
	width: "content"
}
~~~

You will find the description of these properties [here](form/api/radiogroup/api_radiogroup_properties.md).

@changelog: added in v7.0
