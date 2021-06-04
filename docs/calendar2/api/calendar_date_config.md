---
sidebar_label: date
title: date
---          

@short: defines the date that will be opened when the calendar is created

@signature: date?: Date | string;


@example:
var calendar = new dhx.Calendar("calendar_container", {
    value: new Date(),
    date: new Date(2019, 0, 1)
});



@descr: 
By default, it is either the same as calendar/api/calendar_value_config.md, or shows the current date, if **value** is not specified.


@relatedapi: 
calendar/api/calendar_value_config.md

@related: calendar/how_to_start.md#initialize-calendar
calendar/configuring.md#initialcalendardate

**Related sample**: [Calendar. Date Initialization](https://snippet.dhtmlx.com/fyg6l65t)