---
sidebar_label: setValue()
title: JavaScript Calendar - setValue Method 
description: You can explore the setValue method of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setValue()

@short: selects a date in the calendar

@signature: {'setValue(value: Date | Date[] | string | string[]): boolean;'}

@params:
`value: Date | Date[] | string | string[]` - the date to select

@returns:
Defines, whether a date has been successfully added into the calendar.

@example:
// sets the current date
calendar.setValue(new Date());

// sets the current date as an array of Date value
calendar.setValue([new Date()]);

// sets a date as a string
calendar.setValue("30/05/19");

// sets a date as an array of string value
calendar.setValue(["30/05/19"]);

//sets dates as an array of Date values(for the range mode)
calendar.setValue([new Date(2019,05,03), new Date(2019,05,19)]);

//sets dates as an array of string values(for the range mode)
calendar.setValue(["03/06/19", "15/06/19"]);

@descr:
**Related sample**: [Calendar. Preset selected date](https://snippet.dhtmlx.com/vmg11002)

{{note Please note that the format of date in the Calendar is defined by the [](calendar/api/calendar_dateformat_config.md) option. So, check that you've set the format of date you want to use in the calendar both in the
**setValue()** method and in the **dateFormat** property. Otherwise, the default format (**"%d/%m/%y"**) will be used.}}

[comment]: # (@relatedapi: calendar/api/calendar_dateformat_config.md calendar/api/calendar_getvalue_method.md)

[comment]: # (@related: calendar/operating_calendar.md#selectingdate calendar/configuring.md#rangemode)
