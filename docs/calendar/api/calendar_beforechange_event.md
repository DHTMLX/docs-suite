---
sidebar_label: beforeChange
title: JavaScript Calendar - beforeChange Event 
description: You can explore the beforeChange event of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeChange

@short: fires before the change of date selection

@signature: {'beforeChange: (date: Date, oldDate: Date, byClick: boolean) => boolean | void;'}

@params:
- `date: Date` - the newly selected date
- `oldDate: Date` - the previously selected date
- `byClick: boolean` - defines whether the change happened because of a click on a date  - *true*, or due to an API call - *false*

@returns:
Return `true` to allow changing date selection, `false` to prevent changing date selection.

@example:
calendar.events.on("BeforeChange",function(date, oldDate, byClick){
	if (date > new Date())
    	return false;
});

@descr:

**Related sample**: [Calendar. Events](https://snippet.dhtmlx.com/7kj7fiek)

You can block selection of particular dates by returning *false* from the event handler.

[comment]: # (@related:calendar/handling_events.md) 
[comment]: # (@relatedapi:calendar/api/calendar_change_event.md)
