---
sidebar_label: DatePicker
title: JavaScript Form - DatePicker 
description: You can explore the DatePicker of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# DatePicker

An input with a calendar attached to it for selecting a date.

![DatePicker](../assets/form/form_datepicker.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. DatePicker](https://snippet.dhtmlx.com/q3yk7e6s?tag=date_picker)

## Adding DatePicker

You can easily add a DatePicker control during initialization of a form:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
		{
			type: "datepicker",
            name: "datepicker",
            label: "date",
            labelWidth: "50px"
		}
    ]
});
~~~

## Properties

View [the full list of configuration properties of the Datepicker control](form/api/calendar/api_calendar_properties.md).

## Working with DatePicker

You can manipulate a DatePicker control by using methods or events of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
const value = form.getItem("datepicker").getValue();
// -> "03/06/19"

const value = form.getItem("datepicker").getValue(true);
// -> Mon Jun 03 2019 00:00:00 GMT+0300
~~~

### Methods

Check [the full list of methods of the Datepicker control](form/api/api_overview.md#datepicker-methods).

### Events

Check [the full list of events of the Datepicker control](form/api/api_overview.md#datepicker-events).

## Working with the dhtmlxCalendar widget

There is a possibility to use methods of DHTMLX Calendar via the [getWidget()](form/api/calendar/calendar_getwidget_method.md) method of a DatePicker control.

For example, you can show the current month in the control. To do this, you need to get the widget attached to the DatePicker control and then use the [showDate()](calendar/api/calendar_showdate_method.md) method of this widget.

~~~js
const datepicker = form.getItem("datepicker").getWidget();  // -> DHTMLX Calendar
datepicker.showDate(null,"month"); // shows the current month
~~~

**Related sample**: [Form. Get widget of control](https://snippet.dhtmlx.com/0aqkdsi7)

Check [the full list of methods of the DHTMLX Calendar component](../../calendar/api/api_overview/#methods) which you can apply via the [getWidget()](../../form/api/calendar/calendar_getwidget_method/) method.