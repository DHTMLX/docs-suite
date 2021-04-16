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


@template:	api_config
@descr: 
The time format can be presented either in the 12-hour or in the 24-hour format.


@relatedapi:
calendar/api/calendar_timepicker_config.md

@related: calendar/how_to_start.md#initializecalendar
calendar/configuring.md#timepicker

@relatedsample: https://snippet.dhtmlx.com/9xi24if2	Calendar. Time Format