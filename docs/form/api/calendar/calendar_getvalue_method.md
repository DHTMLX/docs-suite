---
sidebar_label: getValue
title: getValue
---          

@short: returns the current value of a DatePicker control

@params:
- asDate    boolean     defines whether a date will be returned as a Date object

@returns:
param   string|Date     the current value of the control

@example:
var value = form.getItem("datepicker").getValue();
// -> "03/06/19"

var value = form.getItem("datepicker").getValue(true);
// -> Mon Jun 03 2019 00:00:00 GMT+0300


@template: api_method
@descr:


