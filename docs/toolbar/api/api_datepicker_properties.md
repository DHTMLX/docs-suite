---
sidebar_label: Toolbar Datepicker properties
title: JavaScript Toolbar - Datepicker properties
description: You can explore the Datepicker properties of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Toolbar Datepicker properties

### Usage

~~~js
const data = [
	{
		type: "datePicker",
        id?: string | number,
	    parent?: string,
	    value?: string | Date,
		valueFormat?: string | "date",

		dateFormat?: string,
		disabledDates?: (a: Date) => boolean,
		icon?: string,
	    label?: string,
		mark?: (a: Date) => string,
		mode?: "calendar" | "year" | "month" | "timepicker", // "calendar" by default
	    placeholder?: string,
		thisMonthOnly?: boolean, // false by default
		timeFormat?: 24 | 12, // 24 by default
		timePicker?: boolean, // false by default
		weekNumbers?: boolean, // false by default
		weekStart?: "saturday" | "sunday" | "monday", // "sunday" by default

		css?: string | string[],
	    disabled?: boolean,
		editable?: boolean,
	    hidden?: boolean,
	    width?: string,
    },
	// more Toolbar controls
]
~~~

### Description

- `type` - (required) the type of a control, set it to `"datePicker"`, if not specified - the [navItem](../../../toolbar/navitem/) type is applied by default
- `id` - (optional) the id of a control, auto-generated if not set
- `parent` - (optional) the parent of the item
- `value` - (optional) the value of a datepicker
- `valueFormat` - (optional) defines the format of the output date (either a string or a Date object)
- `dateFormat` - (optional) the format of dates, by default "%d/%m/%y", check the [Calendar properties](calendar/api/calendar_dateformat_config.md) for more details. The date format must include delimiters (space or symbol), otherwise an error will be thrown
- `disabledDates` - (optional) allows disabling some date intervals, day labels are dimmed. [Read the details](calendar/api/calendar_disableddates_config.md)
- `icon` - (optional) an icon for a Datepicker, the name of the icon from the used [icon font](helpers/icon.md)
- `label` - (optional) specifies an AREA label for the control
- `mark` - (optional) adds a CSS class to specific days. [Read the details](calendar/api/calendar_mark_config.md)
- `mode` - (optional) the mode of displaying of the datepicker every time the user opens it
- `placeholder` - (optional) a tip for the input
- `thisMonthOnly` - (optional) hides dates of the previous/next months relative to the currently displayed one
- `timeFormat` - (optional) defines the time format for a timepicker in the datepicker
- `timePicker` - (optional) adds a timepicker into the datepicker. Use the `timeFormat` property to define the format of displaying time in the timepicker 
- `weekNumbers` - (optional) defines whether to show the numbers of weeks
- `weekStart` - (optional) sets the starting day of the week
- `css` - (optional) adds style classes to a Datepicker control
- `disabled` - (optional) defines whether a Datepicker control is disabled
- `editable` - (optional) allows a user to enter the value of the control manually; *false* by default
- `hidden` - (optional) defines whether a Datepicker is hidden
- `width` - (optional) the width of the field

### Example

<iframe src="https://snippet.dhtmlx.com/3rotluou?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

**Change log:** 

- The following properties were added in v8.0: 
	- `valueFormat`
	- `disabledDates`
	- `mark`
	- `mode`
	- `thisMonthOnly`
	- `timeFormat`
	- `timePicker`
	- `weekNumbers`
	- `weekStart`
	- `editable`

**Related article:** [Datepicker](toolbar/datepicker.md)