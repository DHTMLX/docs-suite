---
sidebar_label: timeFormat
title: timeFormat
---          

@short: defines the time format for a timepicker in the calendar

@signature: timeFormat?: 24 | 12; 

@default: 24



@example:
var calendar = new dhx.Calendar("calendar_container", {
    timePicker: true,
    timeFormat: 12
});



@descr: 
The time format can be presented either in the 12-hour or in the 24-hour format.


@relatedapi:
calendar/api/calendar_timepicker_config.md

@related: calendar/how_to_start.md#initialize-calendar
calendar/configuring.md#timepicker

**Related sample**: [Calendar. Time Format](https://snippet.dhtmlx.com/9xi24if2)