---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

You can attach event listeners with the **timepicker.events.on()** method:

~~~js
timepicker.events.on("Change", function(value){
    console.log("The value of a timepicker has changed to "+ value);
});
~~~

{{editor	https://snippet.dhtmlx.com/5ccptwy7	Timepicker. Timepicker Events}}

{{note The names of events are case-insensitive.}}

## Detaching event listeners

To detach events, use **timepicker.events.detach()**:

~~~js
timepicker.events.on("Change", function(value){
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

The list of events is available in the [API section](timepicker/api/refs/timepicker_events.md).



