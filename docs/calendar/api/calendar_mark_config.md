---
sidebar_label: mark
title: JavaScript Calendar - mark Config 
description: You can explore the mark config of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# mark

@short: Optional. Adds a CSS class to specific days

@signature: {'mark?: (date: Date) => string;'}

@params:
The function receives one parameter:

- `date: Date` - a date object 

and must return a string with the name of the CSS class or an empty string.

@example:
<style>
    .highlight-date {
        color: #fff;
    }
</style>

const calendar = new dhx.Calendar("calendar_container", {
    mark: function(date) {
        if (date.getDay() === 6) {
            return "highlight-date";
        }
    },
    css: "dhx_widget--bordered"
});


@descr:
**Related sample**: [Calendar. Marked and disabled dates](https://snippet.dhtmlx.com/ic5oeiga)

[comment]: # (@related: calendar/how_to_start.md#initialize-calendar calendar/configuring.md#highlighteddates)
