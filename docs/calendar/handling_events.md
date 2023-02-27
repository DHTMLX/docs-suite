---
sidebar_label: Event handling
title: JavaScript Calendar - Event Handling 
description: You can explore the event handling of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can attach event listeners with the **calendar.events.on()** method of the *events* module:

~~~js
calendar.events.on("change",function(date, oldDate, byClick){
    console.log("Change selection from "+oldDate+" to "+date);
    console.log(click);
});
~~~

For example, Calendar can be attached to an input that will display the date selected in Calendar:

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

Several handlers can be attached to one event, and all of them will be executed.

{{note The names of events are case-insensitive.}}

**Related sample**: [Calendar. Events](https://snippet.dhtmlx.com/7kj7fiek)

## Detaching event listeners

To detach an event listener, use **calendar.events.detach()**:

~~~js
calendar.events.on("change",function(date, oldDate, byClick){
    console.log("Change selection from "+oldDate+" to "+date);
    console.log(click);
});
calendar.events.detach("change");
~~~

## Calling events

To call an event, use **calendar.events.fire()**:

~~~js
calendar.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

You can find the full list of events in the [Calendar API](calendar/api/api_overview.md#events).
