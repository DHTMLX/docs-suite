---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Simple Vault Method 
description: You can explore the getProperties method of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "simpleVault",
            name:"simplevault",
            label: "i am simpleVault",
            labelWidth: "120px",
            labelPosition: "left",
            disabled: false,
            required: false
        }
    ]
});

form.getItem("simplevault").getProperties();

@descr:

The returned object of the **SimpleVault** control looks like:

~~~js
{
	errorMessage: "",
	fieldName: "simplevault",
	height: "content",
	helpMessage: "Help information",
	hiddenLabel: false,
	label: "Simple Vault",
	labelPosition: "left",
	labelWidth: 140,
	padding: 0,
	params: undefined,
	preMessage: "",
	required: true,
	singleRequest: false,
	successMessage: "",
	target: "https://docs.dhtmlx.com/suite/backend/upload",
	width: "content",
}
~~~

You will find the description of these properties [here](form/api/simplevault/api_simplevault_properties.md).

@changelog: added in v7.0
