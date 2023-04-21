---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Button Method 
description: You can explore the setProperties method of the Button control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("button").setProperties({
    size: "small", 
    view: "link"
});
 
@descr:
:::info
The method invokes the [](form/api/button/button_afterchangeproperties_event.md) and [](form/api/button/button_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **Button** control:

~~~js
{
	circle: boolean,
	color: string,
	css: string,
	full: boolean,
	height: string|number|"content",
	icon: string,
	loading: boolean,
	padding: string|number,
	size: string,
	submit: boolean,
	text: string,
	url: string,
	view: string,
	width: string|number|"content",
}
~~~

You will find the description of these properties [here](form/api/button/api_button_properties.md).

@changelog: added in v7.0
