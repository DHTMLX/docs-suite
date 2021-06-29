---
sidebar_label: dateFormat
title: JavaScript Calendar - dateFormat Config
description: You can explore the dateFormat config of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# dateFormat

@short: defines the format of dates in Calendar

@signature: {'dateFormat?: string;'}

@default: "%d/%m/%y"

@example:
var calendar = new dhx.Calendar("calendar_container", {
   dateFormat:"%d.%m.%Y"
});


@descr:
**Related sample**: [Calendar. Date Format](https://snippet.dhtmlx.com/2co9z3bi)

dhtmlxCalendar uses the following characters for setting a date format:

| Character | Definition                                        |
|-----------|---------------------------------------------------|
| **%d**    | day as a number with leading zero, 01..31         |
| **%j**    | day as a number, 1..31                            |
| **%D**    | short name of the day, Su Mo Tu...                |
| **%l**    | full name of the day, Sunday Monday Tuesday...    |
| **%m**    | month as a number with leading zero, 01..12       |
| **%n**    | month as a number, 1..12                          |
| **%M**    | short name of the month, Jan Feb Mar...           |
| **%F**    | full name of the month, January February March... |
| **%y**    | year as a number, 2 digits                        |
| **%Y**    | year as a number, 4 digits                        |
| **%h**    | hours 12-format with leading zero, 01..12)        |
| **%g**    | hours 12-format, 1..12)                           |
| **%H**    | hours 24-format with leading zero, 00..23         |
| **%G**    | hours 24-format, 0..23                            |
| **%i**    | minutes with leading zero, 01..59                 |
| **%s**    | seconds with leading zero, 01..59                 |
| **%a**    | am or pm                                          |
| **%A**    | AM or PM                                          |
| **%u**    | milliseconds                                      |

[comment]: # (@relatedapi: calendar/api/calendar_setvalue_method.md)

[comment]: # (@related: calendar/how_to_start.md#initialize-calendar calendar/configuring.md#dateformat)
