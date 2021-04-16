---
sidebar_label: getWidget
title: getWidget
---          

@short: returns the dhtmlxTimePicker widget attached to a TimePicker control



@returns:
param   object    the dhtmlxTimePicker widget

@example:
var timepicker = form.getItem("timepicker").getWidget();  
// -> dhtmlxTimePicker


@template: api_method
@descr:
It is possible to use methods of dhtmlxTimePicker via the **getWidget()** method of a TimePicker control.

For example, you can set value for a TimePicker control. To do this, you need to get the widget attached to the TimePicker control and then use the [setValue()](timepicker/api/timepicker_setvalue_method.md) method of this widget.

~~~js
var timepicker = form.getItem("timepicker").getWidget();  // -> TimePicker
timepicker.setValue("00:39"); //set the value as a string
~~~

