---
sidebar_label: date
title: JavaScript Calendar - date Config
description: You can explore the date config of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# date

@short: defines the date that will be opened when the calendar is created

@signature: {'date?: Date | string;'}

@example:
var calendar = new dhx.Calendar("calendar_container", {
    value: new Date(),
    date: new Date(2019, 0, 1)
});
@examplestop:

**Related sample**: [Calendar. Date initialization](https://snippet.dhtmlx.com/fyg6l65t)

@descr:
By default, it is either the same as [](calendar/api/calendar_value_config.md), or shows the current date, if **value** is not specified.

[comment]: # (@relatedapi: calendar/api/calendar_value_config.md)

[comment]: # (@related: calendar/how_to_start.md#initialize-calendar calendar/configuring.md#initialcalendardate)
