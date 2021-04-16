---
sidebar_label: Work with selected date
title: Work with selected date 
---

## Initially selected date

If you want to create a calendar with an initially selected date, set the [](calendar/api/calendar_value_config.md) property in the configuration object. The property can accept a value in several formats:

- as a Date object
- as a string
- as an array of Date values for the range mode
- as an array of string values for the range mode

~~~js
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
~~~

https://snippet.dhtmlx.com/epjjww3l	Calendar. Value Initialization

The specified date will be highlighted with a round blue marker in the calendar. By default, no date is selected initially.

:::note
Please note that the format of date in the Calendar is defined by the dateFormat option. So, check that you've set the format of date you want to use in the calendar both in the [](calendar/api/calendar_value_config.md) and in the [](calendar/api/calendar_dateformat_config.md) property. Otherwise, the default format ("%d/%m/%y") will be used.
:::


## How to set the selected date in the calendar

To select a date in a calendar, call the [](calendar/api/calendar_setvalue_method.md) method. The method has one mandatory parameter - a date that should be selected, which can be passed in several formats:

- as a Date object
- as a string
- as an array of Date values for the range mode
- as an array of string values for the range mode

~~~js
// selects the current date
calendar.setValue(new Date());

// sets the current date as an array of Date value
calendar.setValue([new Date()]);
 
// sets a date as a string
calendar.setValue("30/05/19");

// sets a date as an array of string value
calendar.setValue(["30/05/19"]);

//sets dates as an array of Date values(for the range mode)
calendar.setValue([new Date(2019,05,03), new Date(2019,05,19)]);

//sets dates as an array of string values(for the range mode)
calendar.setValue(["03/06/19", "15/06/19"]);
~~~

In case a date has been successfully added into the calendar, the method will return *true*.

{{editor    https://snippet.dhtmlx.com/vmg11002	Calendar. Preset Selected Date}}


{{note Please note that the format of date in the Calendar is defined by the [](calendar/api/calendar_dateformat_config.md) option. So, check that you've set the format of date you want to use in the calendar both in the
**setValue()** method and in the **dateFormat** property. Otherwise, the default format (**"%d/%m/%y"**) will be used.}}


## How to get the selected date in the calendar

To get the selected date, call the [](calendar/api/calendar_getvalue_method.md) method. The method returns selected date either as a string (default) or as a Date object. 
To get a date as an object, pass the *true* parameter to the method.

~~~js
var date1 = calendar.getValue(); // -> "20/08/19"

var date2 = calendar.getValue(true); // -> Tue Aug 20 2019 00:00:00 GMT+0300 
~~~

{{editor    https://snippet.dhtmlx.com/k2vrfqj0	Calendar. Getting Selected Date}}

If you work with a calendar in the [range mode](calendar/configuring.md#rangemode) the **getValue()** method returns either an array of Date values or an array of string values with the start and end dates of the range.

~~~js
// for a range calendar as an array of Date values 
var date = calendar.getValue(true); 
// -> [Mon Jun 03 2019 00:00:00 GMT+0300, Wed Jun 19 2019 00:00:00 GMT+0300]

// for a range calendar as an array of string values 
var date = calendar.getValue(); // ->  ["03/06/19", "19/06/19"]
~~~


