---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Text Method 
description: You can explore the getProperties method of the Text control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "text",
            name: "text",
            label: "text",                      
            value: "I am a nice text"
        }
    ]
});

form.getItem("text").getProperties();

@descr:

The returned object of the **Text** control looks like:

~~~js
{
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	inputType: "text",
	label: "text",
	labelPosition: "top",
	labelWidth: "",
	padding: 0,
	width: "content"
}
~~~

You will find the description of these properties [here](form/api/text/api_text_properties.md).

@changelog: added in v7.0
