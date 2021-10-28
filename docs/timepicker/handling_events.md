---
sidebar_label: Event Handling
title: JavaScript Timepicker - Event Handling 
description: You can explore the event handling of Timepicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Event Handling

## Attaching event listeners

You can attach event listeners with the **timepicker.events.on()** method:

~~~js
timepicker.events.on("change", function(value){
    console.log("The value of a timepicker has changed to "+ value);
});
~~~

**Related sample**: [Timepicker. Timepicker Events](https://snippet.dhtmlx.com/5ccptwy7)

{{note The names of events are case-insensitive.}}

## Detaching event listeners

To detach events, use **timepicker.events.detach()**:

~~~js
timepicker.events.on("change", function(value){
    console.log("The value of a timepicker has changed to "+ value);
});
timepicker.events.detach("Change");
~~~

## Calling events

To call events, use **timepicker.events.fire()**:

~~~js
timepicker.events.fire("name",args);
// where args is an array of arguments
~~~

The list of events is available in the [API section](timepicker/api/api_overview.md#events).
