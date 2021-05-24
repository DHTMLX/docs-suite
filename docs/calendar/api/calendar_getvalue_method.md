---
sidebar_label: getValue()
title: getValue()
---          

@short: returns the selected date

@signature: {'getValue(asDatObj?: boolean): Date | Date[] | string | string[];'}

@params:
`asDatObj: boolean` - defines whether a date will be returned as a Date object

@returns:
The selected date.

@example:

var date = calendar.getValue(); // -> "03/06/19"

var date = calendar.getValue(true); // -> Fri Jan 11 2019 18:09:15 GMT+0300

// for a range calendar as an array of Date values 
var date = calendar.getValue(true); 
// -> [Mon Jun 03 2019 00:00:00 GMT+0300, Wed Jun 19 2019 00:00:00 GMT+0300]

// for a range calendar as an array of string values 
var date = calendar.getValue(); // ->  ["03/06/19", "19/06/19"]

@descr:

**Related sample**: [Calendar. Getting Selected Date](https://snippet.dhtmlx.com/k2vrfqj0)

[comment]: # (@relatedapi: calendar/api/calendar_setvalue_method.md)

[comment]: # (@related: calendar/operating_calendar.md#gettingselecteddate calendar/configuring.md#rangemode)
