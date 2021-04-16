---
sidebar_label: getWidget
title: getWidget
---          

@short: returns the dhtmlxCalendar widget attached to a DatePicker control



@returns:
param   object    the dhtmlxCalendar widget

@example:
var datepicker = form.getItem("datepicker").getWidget();  
// -> dhtmlxCalendar


@template: api_method
@descr:
It is possible to use methods of dhtmlxCalendar via the **getWidget()** method of a DatePicker control.

For example, you can show the current month in the control. To do this, you need to get the widget attached to the DatePicker control and then use the [showDate()](calendar/api/calendar_showdate_method.md) method of this widget.

~~~js
var datepicker = form.getItem("datepicker").getWidget();  // -> dhtmlxCalendar
datepicker.showDate(null,"month"); // shows the current month
~~~

{{editor    https://snippet.dhtmlx.com/0aqkdsi7	Form. Get Widget Of Control}}

