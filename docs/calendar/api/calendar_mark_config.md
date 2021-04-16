---
sidebar_label: mark
title: mark
---          

@short: adds a CSS class to specific days

```todoapi
function mark;
mark?: (a: Date) => string;
```

@type: function

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



@template:	api_config
@descr: 
The function passed to the method receives one parameter:

- **date** (*Date*) - a date object 

and must return a string with the name of the CSS class or an empty string.

@related:
calendar/how_to_start.md#initializecalendar
calendar/configuring.md#highlighteddates

@relatedsample:
https://snippet.dhtmlx.com/ic5oeiga	Calendar. Marked Dates