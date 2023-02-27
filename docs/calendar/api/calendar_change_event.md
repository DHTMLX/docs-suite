---
sidebar_label: change
title: JavaScript Calendar - change Event
description: You can explore the change event of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# change

@short: fires on change of date selection

@signature: {'change: (date: Date, oldDate: Date, byClick: boolean) => void;'}

@params:
- `date: Date` - the newly selected date
- `oldDate: Date` - the previously selected date
- `byClick: boolean` - defines whether the change happened because of a click on a date - *true*, or due to an API call - *false*

@example:
calendar.events.on("change",function(date, oldDate, byClick){
    console.log("Change selection from "+oldDate+" to "+date);
    console.log(click);
});

@descr:

**Related sample**: [Calendar. Events](https://snippet.dhtmlx.com/7kj7fiek)

[comment]: # (@related: calendar/handling_events.md)

[comment]: # (@relatedapi:calendar/api/calendar_beforechange_event.md)
