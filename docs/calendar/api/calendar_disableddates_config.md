---
sidebar_label: disabledDates
title: JavaScript Calendar - disabledDates Config
description: You can explore the disabledDates config of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# disabledDates

@short: Optional. Allows disabling some date intervals, day labels are dimmed

@signature: {'disabledDates?: (date: Date) => boolean;'}

@params:
The function receives one parameter:

- `date: Date` - a date object

and must return a boolean value to define whether a passed date should be blocked (if *true*, the date is inactive).

@example:
const calendar = new dhx.Calendar("calendar_container", {
    disabledDates: function(date) {
        const disabled = {
            0: true,
            1: true,
            2: false,
            3: false,
            4: false,
            5: false,
            6: true
        }
        return disabled[date.getDay()];
    }
});


@descr:
**Related sample**: [Calendar. Marked and disabled dates](https://snippet.dhtmlx.com/ic5oeiga)

@changelog: added in v6.4

[comment]: # (@related: calendar/how_to_start.md#initialize-calendar calendar/configuring.md#disableddates)
