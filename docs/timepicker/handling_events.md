---
sidebar_label: Event handling
title: JavaScript Timepicker - Event Handling 
description: You can explore the event handling of Timepicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can attach event listeners with the `timepicker.events.on()` method:

~~~js
timepicker.events.on("change", function(value){
    console.log("The value of a timepicker has changed to "+ value);
});
~~~

**Related sample**: [Timepicker. Events](https://snippet.dhtmlx.com/5ccptwy7)

{{note Event names are case-insensitive.}}

## Detaching event listeners

You can detach event listeners with the `timepicker.events.detach()` method:

~~~js
timepicker.events.on("change", function(value){
    console.log("The value of a timepicker has changed to "+ value);
});
timepicker.events.detach("Change");
~~~

## Calling events

You can call events with the `timepicker.events.fire()` method:

~~~js
timepicker.events.fire("name",args);
// where args is an array of arguments
~~~

The [API section](timepicker/api/api_overview.md#events) lists all Timepicker events.
