---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Toggle Group Method 
description: You can explore the getProperties method of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getProperties()

@short: returns an object with the available configuration attributes of the control

@signature: {'getProperties(id?: string): object;'}

@params:
- `id: string` - optional, the id of a toggle

@returns:
An object either with the available attributes of the control and their values, or with the available attributes of the toggle and their values

@example:
const form = new dhx.Form("form_container", { 
    rows: [
        {
        	id: "toggleGroup",
            name: "align",
            type: "toggleGroup",
            value: {
                "left": true,
            },
            options: [
                {
                    id: "left",
                    icon: "dxi dxi-format-align-left",
                },
                {
                    id: "center",
                    icon: "dxi dxi-format-align-center",
                    value: "center",
                },
                {
                    id: "right",
                    icon: "dxi dxi-format-align-right",
                    value: 1,
                }
            ]
        },
    ]
});

// return the object of the ToggleGroup control 
form.getItem("ToggleGroup").getProperties();

// return the object of a toggle of the ToggleGroup control 
form.getItem("ToggleGroup").getProperties("second");

@descr:

The returned object of the **ToggleGroup** control looks like:

~~~js
{
	css: "",
	full: false,
	gap: 0,
	height: "content",
	multiselection: false,
	options: {...},
	padding: 0,
	width: "content"
}
~~~

The returned object of a **toggle** of the **ToggleGroup** control looks like:

~~~js
{
	full: false,
	icon: "",
	offIcon: "",
	offText: "",
	text: "Toggle 1",
	value: 1
}
~~~

You will find the description of all these properties [here](form/api/togglegroup/api_togglegroup_properties.md).