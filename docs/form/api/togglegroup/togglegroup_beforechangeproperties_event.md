---
sidebar_label: beforeChangeProperties
title: JavaScript Form - beforeChangeProperties Toggle Group Event 
description: You can explore the beforeChangeProperties event of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChangeProperties

@short: fires before configuration attributes of the control are changed dynamically

@signature: {'beforeChangeProperties: (properties: object, id?: string) => boolean | void;'}

@params:
- `properties: object` - an object with [configuration attributes](form/api/togglegroup/togglegroup_getproperties_method.md) of the ToggleGroup or its separate options and their new values
- `id: string` - optional, the id of an option of the ToggleGroup

@returns:
Return `false` to cancel the default action of the event; otherwise, `true`.

@example:
form.getItem("toggleGroup").events.on("beforeChangeProperties", function(properties) {
    console.log("beforeChangeProperties", properties);
    return true;
});

@descr:
The **properties** object of the **ToggleGroup** control looks like:

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

The **properties** object object of a **toggle** of the **ToggleGroup** control looks like:

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