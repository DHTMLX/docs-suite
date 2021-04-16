---
sidebar_label: Calendar modes 
title: Calendar modes 
---

## Calendar modes (calendar | month | year)

There are several modes of displaying Calendar, which are set via the [](../api/calendar_mode_config.md) property:

- <strong>"calendar"</strong> - the default mode. The current date (year and month) is shown in the calendar
- <strong>"month"</strong> - only months of the current year are shown in the calendar 
- <strong>"year"</strong> - only years are shown, including the current one
  
<iframe src="https://snippet.dhtmlx.com/n9q0tc0q?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

:::note See also
You can also show the calendar in one of the modes using the [](../api/calendar_showdate_method.md) method.
:::

## Changing calendar mode 

You can show a particular date in the calendar and/or open Calendar in a certain mode via the [](../api/calendar_showdate_method.md) method. It takes two parameters:

- **date** - (*Date*) the date that should be shown in the calendar. Use null if you need to show current month or year
- **mode** - (*string*)	optional, the mode in which the calendar will be opened

There are the following calendar modes available:

- **"calendar"** - allows selecting among days of a month (default)
- **"month"** - allows selecting a month
- **"year"** - allows selecting a year

<iframe src="https://snippet.dhtmlx.com/nyfzc8cl?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>


Calendar can be also attached to an input, a click on which will show Calendar in one of the modes. To learn more about input options please read [How to create Date picker](/date_picker.md) article.

:::note See also
For more options please read about [](../api/calendar_modechange_event.md) event.
:::

## Getting current mode 

There is a possibility to get the current mode of displaying Calendar via the [](../api/calendar_getcurrentmode_method.md) method. The method returns one of the available calendar modes:

- month
- year
- calendar
- timepicker
 
<iframe src="https://snippet.dhtmlx.com/fadykqoc?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>


## ?Display days of the current month only? (сейчас отдельная страница)

A default calendar shows both the days of the current month and several days of the previous and next months. You can choose the mode of displaying just the current month by setting the value of 
the [](../api/calendar_thismonthonly_config.md) configuration property to *true*.

<iframe src="https://snippet.dhtmlx.com/4wi5hbtr?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

