---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Spacer Method 
description: You can explore the setProperties method of the Spacer control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("spacer").setProperties({
    height: "50px"
});

@descr:

:::info
The method invokes the [](form/api/spacer/spacer_afterchangeproperties_event.md) and [](form/api/spacer/spacer_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **Spacer** control:

~~~js
{
	css: string,
	height: string|number|"content"
	padding: string|number
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/spacer/api_spacer_properties.md).

@changelog: added in v7.0
