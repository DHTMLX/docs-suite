---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Combo Box Method 
description: You can explore the getProperties method of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "combo",
			name: "combo",
            label: "count",
            labelPosition: "left",
            multiselection: true,
            selectAllButton: true,
            value: [
                "id_1",
                "id_2"
            ],
            data: [
                { value: "1", id: "id_1" },
                { value: "2", id: "id_2" },
                { value: "3", id: "id_3" },
                { value: "4", id: "id_4" },
                { value: "5", id: "id_5" }
            ]
        }
    ]
});

form.getItem("combo").getProperties();

@descr:

The returned object of the **Combo** control looks like:

~~~js
{
	errorMessage: "",
	filter: undefined,
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	itemHeight: 32,
	itemsCount: undefined,
	label: "count",
	labelPosition: "left",
	labelWidth: "",
	listHeight: 224,
	multiselection: true,
	padding: 0,
	placeholder: "",
	preMessage: "",
	readOnly: false,
	required: false,
	selectAllButton: true,
	successMessage: "",
	template: undefined,
	validation: undefined,
	virtual: false,
	width: "content"	
}
~~~

You will find the description of these properties [here](form/api/combo/api_combo_properties.md).

@changelog: added in v7.0
