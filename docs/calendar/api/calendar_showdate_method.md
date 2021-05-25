---
sidebar_label: showDate()
title: showDate()
---          

@short: shows a specified date and/or opens the calendar in one of the available modes

@signature: {'showDate(date?: Date, mode?: ViewMode): void;'}

@params:
- `date: Date` - the date that should be shown in the calendar
- `mode: string` - optional, the mode in which the calendar will be opened

@example:
calendar.showDate(new Date(2020,11,12));

@descr:
**Related sample**: [Calendar. Showing Particular Calendar Date And Mode](https://snippet.dhtmlx.com/nyfzc8cl)

The **modes** are:

<table>
	<tbody>
        <tr>
			<td><b>"calendar"</b></td>
			<td>shows the days of a month, the default mode</td>
		</tr>
        <tr>
			<td><b>"month"</b></td>
			<td>allows selecting a month of a year</td>
		</tr>
        <tr>
			<td><b>"year"</b></td>
			<td>allows selecting a year</td>
		</tr>
    </tbody>
</table>

~~~js
// shows the month of the specified date
calendar.showDate(new Date(2020,11,12),"month");

// shows the current month
calendar.showDate(null,"month");

// shows the current year together with previous/next years
calendar.showDate(new Date(2020,11,12),"year");

// shows the current year
calendar.showDate(null,"year");
~~~

[comment]: # (@related: calendar/operating_calendar.md#changingcalendarmode)
