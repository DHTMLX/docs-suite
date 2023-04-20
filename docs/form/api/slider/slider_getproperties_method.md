---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Slider Method 
description: You can explore the getProperties method of the Slider control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
            type: "slider",
            name:"slider",
            label: "slider",
            labelWidth: "50px",
            min: 0,
            max: 100
        }
    ]
});

form.getItem("slider").getProperties();

@descr:

The returned object of the **Slider** control looks like:

~~~js
{
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	inverse: false,
	label: "slider",
	labelPosition: "top",
	labelWidth: "50px",
	majorTick: undefined,
	max: 100,
	min: 0,
	mode: "horizontal",
	padding: 0,
	range: false,
	step: 1,
	tick: undefined,
	tickTemplate: undefined,
	tooltip: true,
	width: "content"
}
~~~

You will find the description of these properties [here](form/api/slider/api_slider_properties.md).

@changelog: added in v7.0
