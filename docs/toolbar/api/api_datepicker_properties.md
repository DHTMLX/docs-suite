---
sidebar_label: Toolbar Datepicker properties
title: JavaScript Toolbar - Datepicker properties
description: You can explore the Datepicker properties of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Toolbar Datepicker properties

### Usage

~~~js
const data = [
	{
		type: "datePicker";
        id?: string | number;
	    parent?: string | number;
	    value?: string | Date;

		dateFormat?: string;
		icon?: string;
	    label?: string;
	    placeholder?: string;

		css?: string | string[];
	    disabled?: boolean;
		editable?: boolean;
	    hidden?: boolean;
	    width?: string;
    },
	// more Toolbar controls
]
~~~

### Description

- `type` - (required) the type of a control, set it to `"datePicker"`, if not specified - the [navItem](../../../toolbar/navitem/) type is applied by default
- `id` - (optional) the id of a control, auto-generated if not set
- `parent` - (optional) the parent of the item
- `value` - (optional) the value of a datepicker
- `dateFormat` - (optional) the format of dates, by default "%d/%m/%y", check the [Calendar properties](calendar/api/calendar_dateformat_config.md) for more details
- `icon` - (optional) an icon for a Datepicker, the name of the icon from the used [icon font](helpers/icon.md)
- `label` - (optional) specifies an AREA label for the control
- `placeholder` - (optional) a tip for the input
- `css` - (optional) adds style classes to a Datepicker control
- `disabled` - (optional) defines whether a Datepicker control is disabled
- `editable` - (optional) allows a user to enter the value of the control manually; *false* by default
- `hidden` - (optional) defines whether a Datepicker is hidden
- `width` - (optional) the width of the field

### Example

<iframe src="https://snippet.dhtmlx.com/3rotluou?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

**Change log:** The **editable** property was added in v8.0

**Related article:** [Datepicker](toolbar/datepicker.md)