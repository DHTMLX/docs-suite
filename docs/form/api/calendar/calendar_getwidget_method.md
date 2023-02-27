---
sidebar_label: getWidget()
title: JavaScript Form - getWidget Datepicker Method 
description: You can explore the getWidget method of the Datepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getWidget()

@short: returns the DHTMLX Calendar widget attached to a DatePicker control

@signature: {'getWidget(): Calendar;'}

@returns:
An object of the DHTMLX Calendar widget.

@example:
const datepicker = form.getItem("datepicker").getWidget();  
// -> DHTMLX Calendar

@descr:

**Related sample**: [Form. Get widget of control](https://snippet.dhtmlx.com/0aqkdsi7)

It is possible to use methods of DHTMLX Calendar via the **getWidget()** method of a DatePicker control.

For example, you can show the current month in the control. To do this, you need to get the widget attached to the DatePicker control and then use the [showDate()](calendar/api/calendar_showdate_method.md) method of this widget.

~~~js
const datepicker = form.getItem("datepicker").getWidget();  // -> DHTMLX Calendar
datepicker.showDate(null,"month"); // shows the current month
~~~
