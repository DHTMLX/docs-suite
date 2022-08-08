---
sidebar_label: Customization and styling Calendar 
title: Customization and styling Calendar
---

## Calendar stylization

<iframe src="https://snippet.dhtmlx.com/2045cbe1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

There is a possibility to make changes in the look and feel of a calendar. For example, change its background color.

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case)

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [](calendar/api/calendar_css_config.md) property in the Calendar configuration.

```
There is a possibility to make changes in the look and feel of a calendar. For example, change its background color:

![](../../assets/calendar/styled_calendar.png)

**Related sample**: [Calendar. Styling (custom CSS)](https://snippet.dhtmlx.com/2045cbe1)

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case)

~~~js
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
var calendar = new dhx.Calendar({
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~js
<style>
	.bg-grey {
		background: #efefef;
	}
</style>

var calendar = new dhx.Calendar("calendar", { 
	css: "bg-grey dhx_calendar--bordered" 
});
~~~
```

## Styling selected dates

![](../../assets/calendar/calendar_range_styling.png)

**Related sample**: [Calendar. Custom styles for selected date](https://snippet.dhtmlx.com/9u0ix3na)

You can apply custom styling to dates selected in a calender as well as to [date ranges](calendar/operating_calendar.md#linkingtwocalendars). There are system styles you need to change for this purpose:

~~~js
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

var calendar1 = new dhx.Calendar("calendar1", {css: "dhx_widget--bordered"});
var calendar2 = new dhx.Calendar("calendar2", {css: "dhx_widget--bordered"});
~~~
