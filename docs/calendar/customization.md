---
sidebar_label: Customization
title: JavaScript Calendar - Customization 
description: You can explore the customization of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Styling Calendar

There is a possibility to make changes in the look and feel of a calendar. For example, change its background color:

![](../assets/calendar/styled_calendar.png)

**Related sample**: [Calendar. Styling (custom CSS)](https://snippet.dhtmlx.com/2045cbe1)

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case)

~~~html
<style>
	.my_first_class {
		/*some styles*/
	}
    
    .my_second_class {
		/*some styles*/
	}
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [](calendar/api/calendar_css_config.md) property in the Calendar configuration:

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~html
<style>
	.custom {
        --dhx-color-primary: #118d8d;
    }
</style>

<script>
	const calendar = new dhx.Calendar("calendar_container", { 
		css: "custom dhx_widget--bordered"
	});
</script>
~~~

## Styling selected dates

![](../assets/calendar/calendar_range_styling.png)

**Related sample**: [Calendar. Custom styles for selected date](https://snippet.dhtmlx.com/9u0ix3na)

You can apply custom styling to dates selected in a calender as well as to [date ranges](calendar/operating_calendar.md#linking-two-calendars). There are system styles you need to change for this purpose:

~~~html
<style>
	/* system style for selected dates */
	.dhx_calendar-day--selected::before {
		background-color: #ff5252;
	}

	/* system style for a date range */
	.dhx_calendar-day--in-range:after {
		background-color: #ffe7e7;
 	}
</style>

<script>
	const calendar1 = new dhx.Calendar("calendar1", {css: "dhx_widget--bordered"});
	const calendar2 = new dhx.Calendar("calendar2", {css: "dhx_widget--bordered"});
</script>
~~~
