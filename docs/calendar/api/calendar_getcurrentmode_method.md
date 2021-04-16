---
sidebar_label: getCurrentMode
title: getCurrentMode
---          

@short: returns the current mode of displaying Calendar

```todoapi
string getCurrentMode();
getCurrentMode(): ViewMode;
export declare type ViewMode = "calendar" | "year" | "month" | "timepicker";
```


@returns:
- mode	string      the current mode of the calendar ("calendar", "year", "month", "timepicker")


@example:
var mode = calendar.getCurrentMode(); // -> "calendar"


@template: api_method
@descr:

@relatedsample: https://snippet.dhtmlx.com/fadykqoc	Calendar. Get Current Mode

@related: calendar/operating_calendar.md#gettingcurrentmode


@changelog:


