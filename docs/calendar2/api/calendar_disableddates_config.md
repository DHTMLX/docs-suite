---
sidebar_label: disabledDates
title: disabledDates
---          

@short: allows disabling some date intervals, day labels are dimmed

```todoapi
function disabledDates;
disabledDates?: (a: Date) => boolean;
```

@example:
var calendar = new dhx.Calendar("calendar", {
	disabledDates: function(date) {
		var disabled = {
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
The function passed to the method receives one parameter:

- **date** (*Date*) - a date object 

and must return a boolean value to define whether a passed date should be blocked (if *true*, the date is inactive).

**Related sample**:
- [Calendar. Marked and disabled dates](https://snippet.dhtmlx.com/ic5oeiga)

@related:
calendar/how_to_start.md#initialize-calendar
calendar/configuring.md#disableddates

@changelog: added in v6.4