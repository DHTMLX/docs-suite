---
sidebar_label: value
title: value
---          

@short: selects the day (adds a round blue marker)

@signature: value?: Date | Date[] | string | string[];

@example: 
// selects a date
var calendar = new dhx.Calendar("calendar_container", {
    value: new Date(2019,01,10)
});

// selects a date as an array of Date value
var calendar = new dhx.Calendar("calendar_container", {
    value: [new Date(2019,01,10)]
});

// selects a date as a string
var calendar = new dhx.Calendar("calendar_container", {
    value: ("10/02/19")
});

// selects a date as an array of string value
var calendar = new dhx.Calendar("calendar_container", {
    value: (["10/02/19"])
});

// selects dates as an array of Date values(for the range mode)
var calendar = new dhx.Calendar("calendar_container", {
    value: ([new Date(2019,05,03), new Date(2019,05,19)]),
    range: true  
});

// selects dates as an array of string values(for the range mode)
var calendar = new dhx.Calendar("calendar_container", {
    value: (["03/06/19", "15/06/19"]),
    range: true  
});



@template:	api_config
@descr: 
If the property is not specified in the configuration object, nothing is selected in the calendar on initialization.

{{note Please note that the format of date in the Calendar is defined by the dateFormat option. So, check that you've set the format of date you want to use in the calendar both in the **value** and in the **dateFormat** property. Otherwise, the default format ("%d/%m/%y") will be used.}}

@related:
calendar/how_to_start.md#selectinitialdateoptional
calendar/configuring.md#initiallyselecteddate

@relatedapi:
calendar/api/calendar_dateformat_config.md
calendar/api/calendar_getvalue_method.md
calendar/api/calendar_range_config.md

@relatedsample:
https://snippet.dhtmlx.com/epjjww3l	Calendar. Value Initialization