---
sidebar_label: getWidget()
title: JavaScript Form - getWidget Timepicker Method 
description: You can explore the getWidget method of the Timepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getWidget()

@short: returns the dhtmlxTimePicker widget attached to a TimePicker control

@signature: {'getWidget(): Timepicker;'}

@returns:
An object of the dhtmlxTimePicker widget.

@example:
const timepicker = form.getItem("timepicker").getWidget();  
// -> dhtmlxTimePicker

@descr:

It is possible to use methods of dhtmlxTimePicker via the **getWidget()** method of a TimePicker control.

For example, you can set value for a TimePicker control. To do this, you need to get the widget attached to the TimePicker control and then use the [setValue()](timepicker/api/timepicker_setvalue_method.md) method of this widget.

~~~js
const timepicker = form.getItem("timepicker").getWidget();  // -> TimePicker
timepicker.setValue("00:39"); //set the value as a string
~~~
