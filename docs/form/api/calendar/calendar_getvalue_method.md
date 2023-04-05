---
sidebar_label: getValue()
title: JavaScript Form - getValue Datepicker Method 
description: descriYou can explore the getValue method of the Datepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.ption
---

# getValue()

@short: returns the current value of a DatePicker control

@signature: {'getValue(asDate?: boolean): string | Date;'}

@params:
- `asDate: boolean` - defines whether a date will be returned as a Date object; *false* by default

@returns:
A string, or Date with the current value of the control.

@example:
const value = form.getItem("datepicker").getValue();
// -> "03/06/19"

const value = form.getItem("datepicker").getValue(true);
// -> Mon Jun 03 2019 00:00:00 GMT+0300

@descr:
