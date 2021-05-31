---
sidebar_label: getValue()
title: JavaScript Form - getValue Datepicker Method 
description: descriYou can explore the getValue Datepicker method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.ption
---

# getValue()

@short: returns the current value of a DatePicker control

@signature: {'getValue<T extends boolean = false>(asDate?: T): string | Date;'}

@params:
`asDate: boolean` - defines whether a date will be returned as a Date object

@returns:
A string, or Date with the current value of the control.

@example:
var value = form.getItem("datepicker").getValue();
// -> "03/06/19"

var value = form.getItem("datepicker").getValue(true);
// -> Mon Jun 03 2019 00:00:00 GMT+0300

@descr:
