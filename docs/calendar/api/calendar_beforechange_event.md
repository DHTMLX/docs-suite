---
sidebar_label: beforeChange
title: JavaScript Calendar - beforeChange Event 
description: You can explore the beforeChange event of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChange

@short: fires before the change of date selection

@signature: {'beforeChange: (date: Date, oldDate: Date, byClick: boolean) => boolean | void;'}

@params:
- `date: Date` - the newly selected date. If the selection is about to be cleared, an empty string
- `oldDate: Date` - the previously selected date
- `byClick: boolean` - defines whether the change happened because of a click on a date or on the `"today"` or `"clear"` [control](calendar/api/calendar_controls_config.md) - *true*, or due to an API call - *false*

@returns:
Return `true` to allow changing date selection, `false` to prevent changing date selection.

@example:
calendar.events.on("beforeChange",function(date, oldDate, byClick){
    if (date > new Date())
        return false;
});

@descr:

You can block selection of particular dates by returning *false* from the event handler.

**Related sample**: [Calendar. Events](https://snippet.dhtmlx.com/7kj7fiek)

**Related API**:
- [`change`](calendar/api/calendar_change_event.md)
- [`controls`](calendar/api/calendar_controls_config.md)
- [`clear()`](calendar/api/calendar_clear_method.md)

**Related article**: [Event handling](calendar/handling_events.md)
