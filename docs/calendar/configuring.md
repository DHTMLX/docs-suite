---
sidebar_label: Configuration
title: JavaScript Calendar - Configuration
description: You can explore the configuration of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

## Calendar modes

Calendar supports several display modes. Set the [](calendar/api/calendar_mode_config.md) property to choose one:

- `"calendar"` - the default mode. The calendar shows the current date (year and month).

~~~js
const calendar = new dhx.Calendar("calendar_container");
~~~

![Calendar in default day mode showing the month grid for July 2019 in DHTMLX Suite](/img/calendar/calendar_mode.png)

- `"month"` - the calendar shows only months of the current year. 

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    mode: "month"
});
~~~

![Calendar in month mode listing the twelve months of 2019 in DHTMLX Suite](/img/calendar/month_mode.png)

- `"year"` - the calendar shows only years, including the current one.

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    mode: "year"
});
~~~

![Calendar in year mode showing the years 2016 to 2027 in DHTMLX Suite](/img/calendar/year_mode.png)

**Related sample**: [Calendar. Calendar modes](https://snippet.dhtmlx.com/n9q0tc0q)

Call the [](calendar/api/calendar_showdate_method.md) method to show the calendar in one of the modes.

## Date format

Set the [](calendar/api/calendar_dateformat_config.md) property to specify the date format in the calendar. The default format is "%d/%m/%y". 
The [API reference](calendar/api/calendar_dateformat_config.md) lists all characters available for formats.

~~~js
const calendar = new dhx.Calendar("calendar_container", {
   dateFormat:"%d.%m.%Y"
});
~~~

**Related sample**: [Calendar. Date format](https://snippet.dhtmlx.com/2co9z3bi)

## Disabled dates

![Calendar month view with weekend days disabled and dimmed in DHTMLX Suite](/img/calendar/blocked_dates.png)

**Related sample**: [Calendar. Marked and disabled dates](https://snippet.dhtmlx.com/ic5oeiga)

The [](calendar/api/calendar_disableddates_config.md) setting accepts a function that takes a `date` as a parameter and returns a `boolean` value.
The calendar dims every date for which the function returns `true`.

~~~js
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
    },
    css: "dhx_widget--bordered"
});
~~~

## Displaying only current month

![Calendar showing only the current month days without adjacent month dates in DHTMLX Suite](/img/calendar/this_month_only.png)

**Related sample**: [Calendar. The days of this month only](https://snippet.dhtmlx.com/4wi5hbtr)

A default calendar shows both the days of the current month and several days of the previous and next months. Set the [](calendar/api/calendar_thismonthonly_config.md) configuration property to `true` to show only the current month:

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    thisMonthOnly:true
});
~~~

## Highlighted dates

![Calendar month view with Saturdays highlighted by red circular markers in DHTMLX Suite](/img/calendar/marked_dates.png)

**Related sample**: [Calendar. Marked and disabled dates](https://snippet.dhtmlx.com/ic5oeiga)

Set the [](calendar/api/calendar_mark_config.md) property to highlight dates in the calendar. The property takes a function that receives a `date` and returns a `string`. Return the name of a CSS class to mark the date, or an empty string to leave it unmarked.

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    mark: function(date) {
        if (date.getDay() === 6) {
            return "highlight-date";
        }
    },
    css: "dhx_widget--bordered"
});
~~~

Where `highlight-date` is a CSS class like this:

~~~html
<style>
    .highlight-date {
        color: #fff;
    }
</style>
~~~

## Initial calendar date

The default view is the month that contains the current date. To open a different date, set the [](calendar/api/calendar_date_config.md) property. The property accepts a Date object as a value. Its default equals [](calendar/api/calendar_value_config.md); if you do not specify `value`, the calendar shows the current date.

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    date: new Date(2019, 0, 1)
});
~~~

**Related sample**: [Calendar. Date initialization](https://snippet.dhtmlx.com/fyg6l65t)

## Initially selected date

To create a calendar with an initially selected date, set the [](calendar/api/calendar_value_config.md) property in the configuration object. The property can accept a value in several formats:

- A Date object
- A string
- An array of Date values for the range mode
- An array of string values for the range mode

~~~js
// selects a date
const calendar = new dhx.Calendar("calendar_container", {
    value: new Date(2019,01,10)
});

// selects a date as an array of Date value
const calendar = new dhx.Calendar("calendar_container", {
    value: [new Date(2019,01,10)]
});

// selects a date as a string
const calendar = new dhx.Calendar("calendar_container", {
    value: ("10/02/19")
});

// selects a date as an array of string value
const calendar = new dhx.Calendar("calendar_container", {
    value: (["10/02/19"])
});

// selects dates as an array of Date values(for the range mode)
const calendar = new dhx.Calendar("calendar_container", {
    value: ([new Date(2019,05,03), new Date(2019,05,19)]),
    range: true  
});

// selects dates as an array of string values(for the range mode)
const calendar = new dhx.Calendar("calendar_container", {
    value: (["03/06/19", "15/06/19"]),
    range: true  
});
~~~

**Related sample**: [Calendar. Value initialization](https://snippet.dhtmlx.com/epjjww3l)

The calendar highlights the specified date with a round blue marker. No date is selected initially.

:::note
The `dateFormat` option defines the date format in the Calendar. Check that you set the same date format both in the [](calendar/api/calendar_value_config.md) and in the [](calendar/api/calendar_dateformat_config.md) property. Otherwise, the calendar uses the default format ("%d/%m/%y").
:::

## Numbers of weeks

![Calendar month view with week numbers shown in a left-hand column in DHTMLX Suite](/img/calendar/week_numbers.png)

**Related sample**: [Calendar. Numbers of weeks](https://snippet.dhtmlx.com/9692gk6n)

To display week numbers in the calendar, enable the [](calendar/api/calendar_weeknumbers_config.md) property. The property defaults to `false`.

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    weekNumbers: true
});
~~~

## Range mode

![Calendar in range mode with a span of dates highlighted in July 2020 in DHTMLX Suite](/img/calendar/range_mode.png)

**Related sample**: [Calendar. Range](https://snippet.dhtmlx.com/2mrj53h0)

You can create a calendar in the range mode that allows you to select a range of dates. Use the [range:true](calendar/api/calendar_range_config.md) option in the calendar configuration object and define an array with the start and end dates of the range.

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    css: "dhx_widget--bordered",
    range: true,
    value: ["25/06/20", "07/07/20"]
});
~~~

:::note
The `value` option must be an array that contains a pair of values (either Date values or string values) for both dates.
:::

## Start of the week

![Calendar month view with the week starting on Monday in DHTMLX Suite](/img/calendar/weekstart_monday.png)

**Related sample**: [Calendar. Week start](https://snippet.dhtmlx.com/kaxmurh9)

The default first day of the week is Sunday (`weekStart:"sunday"`). You can also set Monday as the first day of the week. Apply `"monday"` as the value of the [](calendar/api/calendar_weekstart_config.md) setting:

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    weekStart: "monday"
});
~~~

## Timepicker

Enable the [](calendar/api/calendar_timepicker_config.md) property to add a timepicker to a calendar. The default timepicker format is 24-hour.
Set the [](calendar/api/calendar_timeformat_config.md) property to switch to the 12-hour format. The property accepts either 12 or 24 to select the time format.

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    timePicker: true,
    timeFormat: 12 // the 12-hour format for the timepicker
});
~~~

![Two Calendars comparing 24-hour and 12-hour timepicker formats in DHTMLX Suite](/img/calendar/timepicker_format.png)

**Related sample**: [Calendar. Timepicker In Calendar](https://snippet.dhtmlx.com/jkbfb202)

**Related sample**: [Calendar. Time format](https://snippet.dhtmlx.com/9xi24if2)

## Width of calendar

![Calendar month view rendered at a wider custom width in DHTMLX Suite](/img/calendar/calendar_width.png)

**Related sample**: [Calendar. Calendar width](https://snippet.dhtmlx.com/azm0u5ns)

Set the [](calendar/api/calendar_width_config.md) configuration property to change the calendar width. The default Calendar width is 250px.

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    width: "400", 
    css: "dhx_widget--bordered"
});
~~~
