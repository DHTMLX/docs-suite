---
sidebar_label: timePicker
title: JavaScript Calendar - timePicker Config 
description: You can explore the timePicker config of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# timePicker

@short: Optional. Adds a timepicker into the calendar

@signature: {'timePicker?: boolean;'}

@default: false

@example:
const calendar = new dhx.Calendar("calendar_container", {
    timePicker: true      
});

@descr:
**Related sample**: [Calendar. Timepicker In Calendar](https://snippet.dhtmlx.com/jkbfb202)

You can define the format of displaying time in a timepicker via the [`timeFormat`](calendar/api/calendar_timeformat_config.md) property.

You can also add a timepicker as the **"Timepicker"** entry of the [`controls`](calendar/api/calendar_controls_config.md) property, and if you use both ways at once, the calendar renders it once.

**Related API**: 
- [`timeFormat`](calendar/api/calendar_timeformat_config.md)
- [`controls`](calendar/api/calendar_controls_config.md)

**Related articles**: 
- [Initialize Calendar](calendar/how_to_start.md#initialize-calendar)
- [Timepicker](calendar/configuring.md#timepicker)
