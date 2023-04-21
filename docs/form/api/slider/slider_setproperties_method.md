---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Slider Method 
description: You can explore the setProperties method of the Slider control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(properties: object): void;'}

@params:
- `properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("slider").setProperties({ 
    min: 5, max: 20, 
    step: 5, 
    tooltip: false
});

@descr:

:::info
The method invokes the [](form/api/slider/slider_afterchangeproperties_event.md) and [](form/api/slider/slider_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **Slider** control:

~~~js
{
	css: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	inverse: boolean,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	majorTick: number,
	max: number,
	min: number,
	mode: string,
	padding: string|number,
	range: boolean,
	step: number,
	tick: number,
	tickTemplate: function,
	tooltip: boolean, 
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/slider/api_slider_properties.md).

@changelog: added in v7.0
