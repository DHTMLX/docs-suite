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

**Related sample**: [Calendar. Get Current Mode](https://snippet.dhtmlx.com/fadykqoc)

@related: calendar/operating_calendar.md#gettingcurrentmode



