---
sidebar_label: TimePicker
title: JavaScript Form - TimePicker 
description: You can explore the TimePicker of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# TimePicker

A control that allows a user to select time value either by moving handles along track bars or by entering hour and minutes values directly into related inputs.

![TimePicker](../assets/form/form_timepicker.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. TimePicker](https://snippet.dhtmlx.com/4k3o8p7b)

## Adding TimePicker

You can easily add a TimePicker control during initialization of a form:

~~~js
const form = new dhx.Form("form_container", {
	rows: [
    	{
			type: "timepicker",
            name: "timepicker",
            label: "time",
            labelWidth: "50px",
			timeFormat: 12,
    		valueFormat: "timeObject",
            value: [6,20,"AM"]
		}
    ]
});
~~~

### Properties

View [the full list of configuration properties of the TimePicker control](form/api/timepicker/api_timepicker_properties.md).

## Working with TimePicker

You can manipulate a TimePicker control by using methods or events of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
const value = form.getItem("timepicker").getValue();
~~~

### Methods:

Check [the full list of methods of the Timepicker control](form/api/api_overview.md#timepicker-methods).

### Events:

Check [the full list of events of the Timepicker control](form/api/api_overview.md#timepicker-events).

### Working with the dhtmlxTimePicker widget

There is a possibility to use methods of DHTMLX TimePicker via the [getWidget()](form/api/timepicker/timepicker_getwidget_method.md) method of a TimePicker control.

For example, you can set value for a TimePicker control. To do this, you need to get the widget attached to the TimePicker control and then use the [setValue()](timepicker/api/timepicker_setvalue_method.md) method of this widget.

~~~js
const timepicker = form.getItem("timepicker").getWidget();  // -> TimePicker
timepicker.setValue("00:39"); //set the value as a string
~~~

**Related sample**: [Form. Get widget of control](https://snippet.dhtmlx.com/0aqkdsi7)

Check [the full list of methods of the DHTMLX Timepicker component](../../timepicker/api/api_overview/#methods) which you can apply via the [getWidget()](../../form/api/timepicker/timepicker_getwidget_method/) method.
