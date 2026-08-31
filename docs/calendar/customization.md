---
sidebar_label: Customization
title: JavaScript Calendar - Customization 
description: You can explore the customization of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Styling Calendar

You can change the look and feel of a calendar. For example, change its background color:

![Calendar month view styled with a custom teal primary color in DHTMLX Suite](/img/calendar/styled_calendar.png)

**Related sample**: [Calendar. Styling (custom CSS)](https://snippet.dhtmlx.com/2045cbe1)

Follow these steps:

- Add one or more CSS classes in the `<style>` section of your HTML page or in a separate stylesheet linked on the page:

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

- Assign the class name (or several names separated by spaces) to the [](calendar/api/calendar_css_config.md) property:

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

![Two Calendars with a custom red selected date and pink range highlight in DHTMLX Suite](/img/calendar/calendar_range_styling.png)

**Related sample**: [Calendar. Custom styles for selected date](https://snippet.dhtmlx.com/9u0ix3na)

You can style selected dates and [date ranges](calendar/operating_calendar.md#linking-two-calendars) with your own CSS. Override these system styles:

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
