---
sidebar_label: timeFormat
title: timeFormat
---          

@short: defines the time format for a timepicker in the calendar

@signature: {'timeFormat?: 24 | 12;'}

@default: 24

@example:
var calendar = new dhx.Calendar("calendar_container", {
    timePicker: true,
    timeFormat: 12
});


@descr:
**Related sample**: [Calendar. Time Format](https://snippet.dhtmlx.com/9xi24if2)

The time format can be presented either in the 12-hour or in the 24-hour format.

[comment]: # (@relatedapi: calendar/api/calendar_timepicker_config.md)

[comment]: # (@related: calendar/how_to_start.md#initialize-calendar calendar/configuring.md#timepicker)
