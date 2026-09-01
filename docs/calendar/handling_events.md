---
sidebar_label: Event handling
title: JavaScript Calendar - Event Handling 
description: You can explore the event handling of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attach event listeners

Use the `calendar.events.on()` method to attach event listeners:

~~~js
calendar.events.on("change",function(date, oldDate, byClick){
    console.log("Change selection from "+oldDate+" to "+date);
    console.log(click);
});
~~~

For example, you can attach Calendar to an input that displays the selected date:

~~~html
<input type="text" id="date" />
~~~

~~~js
const calendar = new dhx.Calendar("calendar_container");
calendar.events.on("change",(date)=>{ 
    document.getElementById("date").value = date.getFullYear() +
        "-" + (date.getMonth() + 1) + "-" +date.getDate();
});
~~~

You can attach several handlers to one event. Calendar executes all handlers.

{{note Event names are case-insensitive.}}

**Related sample**: [Calendar. Events](https://snippet.dhtmlx.com/7kj7fiek)

## Detach event listeners

The `calendar.events.detach()` method removes an event listener:

~~~js
calendar.events.on("change",function(date, oldDate, byClick){
    console.log("Change selection from "+oldDate+" to "+date);
    console.log(click);
});
calendar.events.detach("change");
~~~

## Trigger events

Call `calendar.events.fire()` to trigger an event manually:

~~~js
calendar.events.fire("name",args);
// where args is an array of arguments
~~~

## Event list

For the full event list, see the [Calendar API](calendar/api/api_overview.md#events).
