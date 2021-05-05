---
sidebar_label: mark
title: mark
---          

@short: adds a CSS class to specific days

@signature: {'mark?: (a: Date) => string;'}

@example: 
<style>
    .highlight-date {
        color: #fff;
    }
</style>

var calendar = new dhx.Calendar("calendar", {
    mark: function(date) {
        if (date.getDay() === 6) {
            return "highlight-date";
        }
    },
    css: "dhx_widget--bordered"
});




@descr: 
The function passed to the method receives one parameter:

- **date** (*Date*) - a date object 

and must return a string with the name of the CSS class or an empty string.

@related:
calendar/how_to_start.md#initialize-calendar
calendar/configuring.md#highlighteddates

**Related sample**:
- [Calendar. Marked Dates](https://snippet.dhtmlx.com/ic5oeiga)