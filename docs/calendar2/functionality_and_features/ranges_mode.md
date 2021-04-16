---
sidebar_label: Date ranges in one and two calendars
title: Date ranges in one and two calendars
---

## Date ranges in one calendar 

<iframe src="https://snippet.dhtmlx.com/2mrj53h0?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

You have a possibility to create a calendar in the range mode that allows you to select a range of dates in the calendar. To do this, you need to use the [range:true](/calendar/api/calendar_range_config) option in the calendar configuration object and define an array with the start and end dates of the range.

The <strong>value</strong> option should have the array type and contain a pair of values (either Date values or string values) for both dates.

## Date ranges in two calendars

<iframe src="https://snippet.dhtmlx.com/dxo54017?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

You can create two calendars and link them to provide the ability of selecting a date range. The first calendar will be used for setting the start date of the range, while the end date of the range will be specified in the
second calendar. 

Use the [](calendar/api/calendar_link_method.md) method and pass as a parameter the object of the second calendar to link the first calendar to.

In the example the [Change](calendar/api/calendar_change_event.md) event is intended to output the start and end dates of the selected range.
