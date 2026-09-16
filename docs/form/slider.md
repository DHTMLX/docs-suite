---
sidebar_label: Slider
title: JavaScript Form - Slider 
description: You can explore the Slider of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Slider

A control that allows you to select a numeric value by moving a thumb along a line with a fixed set of options.

![Slider form control with a thumb and a tooltip showing the selected value 34 in DHTMLX Suite](/img/form/form_slider.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

## Adding Slider

You can add a Slider control during form initialization:

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

View [the full list of Slider configuration properties](form/api/slider/api_slider_properties.md).

## Working with Slider

You can manage a Slider control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can get the value of the control:

~~~js
const value = form.getItem("slider").getValue();
~~~

### Methods

Check [the full list of Slider methods](form/api/api_overview.md#slider-methods).

### Events

Check [the full list of Slider events](form/api/api_overview.md#slider-events).

### Working with the dhtmlxSlider widget

You can use DHTMLX Slider methods with the [`getWidget()`](form/api/slider/slider_getwidget_method.md) method of a Slider control.

For example, to disable a Slider control, get the widget attached to it and call its [`disable()`](slider/api/slider_disable_method.md) method.

~~~js
const slider = form.getItem("slider").getWidget();  // -> DHTMLX Slider
slider.disable(); // disables slider
~~~

Check [the full list of DHTMLX Slider methods](slider/api/api_overview.md#methods) that you can apply with the [`getWidget()`](form/api/slider/slider_getwidget_method.md) method.
