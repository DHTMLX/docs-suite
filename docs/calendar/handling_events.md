---
sidebar_label: Event handling
title: JavaScript Calendar - Event Handling 
description: You can explore the event handling of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attach event listeners

Use the `calendar.events.on()` method of the `events` module to attach event listeners:

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

You can attach several handlers to one event. Calendar executes all of them.

{{note Event names are case-insensitive.}}

**Related sample**: [Calendar. Events](https://snippet.dhtmlx.com/7kj7fiek)

## Detach event listeners

Use the `calendar.events.detach()` method to detach an event listener:

~~~js
calendar.events.on("change",function(date, oldDate, byClick){
    console.log("Change selection from "+oldDate+" to "+date);
    console.log(click);
});
calendar.events.detach("change");
~~~

## Call events

Use the `calendar.events.fire()` method to call an event:

~~~js
calendar.events.fire("name",args);
// where args is an array of arguments
~~~

## Event list

You can find the full event list in the [Calendar API](calendar/api/api_overview.md#events).
