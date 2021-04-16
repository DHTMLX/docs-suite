---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

You can attach event listeners with the **colorpicker.events.on()** method:

~~~js
colorpicker.events.on("ModeChange", function(mode) {
   console.log("Selected mode: " + mode); 
});
~~~

{{note The names of events are case-insensitive.}}

{{editor    https://snippet.dhtmlx.com/fllgaabo	Colorpicker. Events}}

## Detaching event listeners

To detach events, use **colorpicker.events.detach()**:

~~~js
colorpicker.events.on("ModeChange", function(mode) {
   console.log("Selected mode: " + mode); 
});

colorpicker.events.detach("ModeChange");
~~~

## Calling events

To call events, use **colorpicker.events.fire()**:

~~~js
colorpicker.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](colorpicker/api/refs/colorpicker_events.md).



