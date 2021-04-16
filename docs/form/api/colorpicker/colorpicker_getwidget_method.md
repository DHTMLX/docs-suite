---
sidebar_label: getWidget
title: getWidget
---          

@short: returns the dhtmlxColorPicker widget attached to a ColorPicker control



@returns:
param   object    the dhtmlxColorPicker widget

@example:
var colorpicker = form.getItem("colorpicker").getWidget();  
// -> dhtmlxColorPicker


@template: api_method
@descr:
It is possible to use methods of dhtmlxColorPicker via the **getWidget()** method of a ColorPicker control.

For example, you can set focus on the specified value in the control. To do this, you need to get the widget attached to the ColorPicker control and then use the [setFocus()](colorpicker/api/colorpicker_setfocus_method.md) method of this widget.

~~~js
var colorpicker = form.getItem("colorpicker").getWidget();  // -> ColorPicker
colorpicker.setFocus("#BDF0E9"); // sets focus on the "#BDF0E9" color
~~~

{{editor    https://snippet.dhtmlx.com/0aqkdsi7	Form. Get Widget Of Control}}

