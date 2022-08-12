---
sidebar_label: getValue()
title: JavaScript Calendar - getValue Method 
description: You can explore the getValue method of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getValue()

@short: returns the selected date

@signature: {'getValue(asDatObj?: boolean): Date | Date[] | string | string[];'}

@params:
`asDatObj: boolean` - defines whether a date will be returned as a Date object

@returns:
The selected date.

@example:

const date = calendar.getValue(); // -> "03/06/19"

const date = calendar.getValue(true); // -> Fri Jan 11 2019 18:09:15 GMT+0300

// for a range calendar as an array of Date values 
const date = calendar.getValue(true); 
// -> [Mon Jun 03 2019 00:00:00 GMT+0300, Wed Jun 19 2019 00:00:00 GMT+0300]

// for a range calendar as an array of string values 
const date = calendar.getValue(); // ->  ["03/06/19", "19/06/19"]

@descr:

**Related sample**: [Calendar. Getting selected date](https://snippet.dhtmlx.com/k2vrfqj0)

[comment]: # (@relatedapi: calendar/api/calendar_setvalue_method.md)

[comment]: # (@related: calendar/operating_calendar.md#gettingselecteddate calendar/configuring.md#rangemode)
