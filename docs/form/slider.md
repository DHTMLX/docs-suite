---
sidebar_label: Slider
title: JavaScript Form - Slider 
description: You can explore the Slider of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Slider

A control that allows selecting a numeric value by moving a thumb along a line with a fixed set of options.

![Slider control](../assets/form/form_slider.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

##  Adding Slider
You can easily add a Slider control during initialization of a form:

~~~js
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
~~~

### Properties

View [the full list of configuration properties of the Slider control](form/api/slider/api_slider_properties.md).

## Working with Slider

You can manipulate a Slider control by using methods or events of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
const value = form.getItem("slider_id").getValue();
~~~

### Methods

Check [the full list of methods of the Slider control](form/api/api_overview.md#slider-methods).

### Events

Check [the full list of events of the Slider control](form/api/api_overview.md#slider-events).

### Working with the dhtmlxSlider widget

There is a possibility to use methods of DHTMLX Slider via the [getWidget()](form/api/slider/slider_getwidget_method.md) method of a Slider control.

For example, you can disable a Slider control. To do this, you need to get the widget attached to the Slider control and then use the [disable()](slider/api/slider_disable_method.md) method of this widget.

~~~js
const slider = form.getItem("slider_id").getWidget();  // -> DHTMLX Slider
slider.disable(); // disables slider
~~~

Check [the full list of methods of the DHTMLX Slider component](../../slider/api/api_overview/#methods) which you can apply via the [getWidget()](../../form/api/slider/slider_getwidget_method/) method.