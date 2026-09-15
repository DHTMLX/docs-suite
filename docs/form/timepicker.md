---
sidebar_label: TimePicker
title: JavaScript Form - TimePicker 
description: You can explore the TimePicker of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# TimePicker

A control that allows users to select a time value: either move handles along track bars or enter hour and minute values directly in the related inputs.

![TimePicker form control with hours and minutes slider track bars for selecting time in DHTMLX Suite](/img/form/form_timepicker.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. TimePicker](https://snippet.dhtmlx.com/4k3o8p7b?tag=timepicker)

## Adding TimePicker

You can add a TimePicker control during form initialization:

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

View [the full list of TimePicker configuration properties](form/api/timepicker/api_timepicker_properties.md).

## Working with TimePicker

You can manage a TimePicker control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can get the value of the control:

~~~js
const value = form.getItem("timepicker").getValue();
~~~

### Methods

Check [the full list of TimePicker methods](form/api/api_overview.md#timepicker-methods).

### Events

Check [the full list of TimePicker events](form/api/api_overview.md#timepicker-events).

### Working with the dhtmlxTimePicker widget

You can use DHTMLX TimePicker methods with the [`getWidget()`](form/api/timepicker/timepicker_getwidget_method.md) method of a TimePicker control.

For example, to set a value for a TimePicker control, get the widget attached to it and call its [`setValue()`](timepicker/api/timepicker_setvalue_method.md) method.

~~~js
const timepicker = form.getItem("timepicker").getWidget();  // -> TimePicker
timepicker.setValue("00:39"); //set the value as a string
~~~

**Related sample**: [Form. Get widget of control](https://snippet.dhtmlx.com/0aqkdsi7)

Check [the full list of DHTMLX TimePicker methods](timepicker/api/api_overview.md#methods) that you can apply with the [`getWidget()`](form/api/timepicker/timepicker_getwidget_method.md) method.
