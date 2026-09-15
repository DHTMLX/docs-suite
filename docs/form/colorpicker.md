---
sidebar_label: ColorPicker
title: JavaScript Form - ColorPicker 
description: You can explore the ColorPicker of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# ColorPicker

An input with an attached color picker for selecting a color.

![ColorPicker form control with an open color palette and a hex value input in DHTMLX Suite](/img/form/form_colorpicker.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. ColorPicker](https://snippet.dhtmlx.com/n52dl19s?tag=colorpicker_control)

## Adding ColorPicker

You can add a ColorPicker control during form initialization:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
        {
            type: "colorpicker",
            name: "colorpicker",
            labelWidth: "200px",
            label: "Choose your color"
        }
    ]
});
~~~

### Properties

View [the full list of ColorPicker configuration properties](form/api/colorpicker/api_colorpicker_properties.md).

## Working with ColorPicker

You can manage a ColorPicker control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can get the value of the control:

~~~js
const value = form.getItem("colorpicker").getValue();
~~~

**Related sample**: [Form. Get Item](https://snippet.dhtmlx.com/ocfas6go)

### Methods

Check [the full list of ColorPicker methods](form/api/api_overview.md#color-picker-methods).

### Events

Check [the full list of ColorPicker events](form/api/api_overview.md#color-picker-events).

## Working with the dhtmlxColorPicker widget

You can use DHTMLX ColorPicker methods with the [`getWidget()`](form/api/colorpicker/colorpicker_getwidget_method.md) method of a ColorPicker control.

For example, to set focus on the specified value in the control, get the widget attached to the ColorPicker control and call its [`setFocus()`](colorpicker/api/colorpicker_setfocus_method.md) method.

~~~js
const colorpicker = form.getItem("colorpicker").getWidget();  // -> ColorPicker
colorpicker.setFocus("#BDF0E9"); // sets focus on the "#BDF0E9" color
~~~

**Related sample**: [Form. Get widget of control](https://snippet.dhtmlx.com/0aqkdsi7)

Check [the full list of DHTMLX ColorPicker methods](colorpicker/api/api_overview.md#methods) that you can apply with the [`getWidget()`](form/api/colorpicker/colorpicker_getwidget_method.md) method.