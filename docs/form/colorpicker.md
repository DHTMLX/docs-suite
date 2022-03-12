---
sidebar_label: ColorPicker
title: JavaScript Form - ColorPicker 
description: You can explore the ColorPicker of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# ColorPicker

An input with a color picker attached to it for selecting a color.

![ColorPicker](../assets/form/form_colorpicker.png)

**Related sample**: [Form. All DhxForm Inputs](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. ColorPicker](https://snippet.dhtmlx.com/n52dl19s)

## Adding ColorPicker

You can easily add a ColorPicker control during initialization of a form:

~~~js
var form = new dhx.Form("form_container", {
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

View [the full list of configuration properties of the Colorpicker control](form/api/colorpicker/api_colorpicker_properties.md).

## Working with ColorPicker

You can manipulate a ColorPicker control by using methods or events of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
var value = form.getItem("colorpicker").getValue();
~~~

**Related sample**: [Form. Get Item](https://snippet.dhtmlx.com/ocfas6go)

### Methods

Check [the full list of methods of the ColorPicker control](form/api/api_overview.md#color-picker-methods).

### Events

Check [the full list of events of the ColorPicker control](form/api/api_overview.md#color-picker-events).

## Working with the dhtmlxColorPicker widget

There is a possibility to use methods of DHTMLX ColorPicker via the [getWidget()](form/api/colorpicker/colorpicker_getwidget_method.md) method of a ColorPicker control.

For example, you can set focus on the specified value in the control. To do this, you need to get the widget attached to the ColorPicker control and then use the [setFocus()](colorpicker/api/colorpicker_setfocus_method.md) method of this widget.

~~~js
var colorpicker = form.getItem("colorpicker").getWidget();  // -> ColorPicker
colorpicker.setFocus("#BDF0E9"); // sets focus on the "#BDF0E9" color
~~~

**Related sample**: [Form. Get Widget Of Control](https://snippet.dhtmlx.com/0aqkdsi7)


Check [the full list of methods of the DHTMLX Colorpicker component](../../colorpicker/api/api_overview/#methods) which you can apply via the [getWidget()](../../form/api/colorpicker/colorpicker_getwidget_method/) method.