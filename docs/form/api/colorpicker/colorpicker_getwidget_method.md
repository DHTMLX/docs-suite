---
sidebar_label: getWidget()
title: JavaScript Form - getWidget Colorpicker Method 
description: You can explore the getWidget method of the Colorpicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getWidget()

@short: returns the DHTMLX ColorPicker widget attached to a ColorPicker control

@signature: {'getWidget(): Colorpicker;'}

@returns:
An object of the DHTMLX ColorPicker widget.

@example:
const colorpicker = form.getItem("colorpicker").getWidget();  
// -> DHTMLX ColorPicker

@descr:

**Related sample**: [Form. Get widget of control](https://snippet.dhtmlx.com/0aqkdsi7)

It is possible to use methods of DHTMLX ColorPicker via the **getWidget()** method of a ColorPicker control.

For example, you can set focus on the specified value in the control. To do this, you need to get the widget attached to the ColorPicker control and then use the [setFocus()](colorpicker/api/colorpicker_setfocus_method.md) method of this widget.

~~~js
const colorpicker = form.getItem("colorpicker").getWidget();  // -> ColorPicker
colorpicker.setFocus("#BDF0E9"); // sets focus on the "#BDF0E9" color
~~~
