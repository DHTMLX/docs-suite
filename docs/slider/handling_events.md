---
sidebar_label: Event Handling 
title: Event Handling 
---          

## Attaching event listeners

You can attach event listeners with the **slider.events.on()** method:

~~~js
slider.events.on("Change", function(newValue, oldValue, isRange){
    console.log("The value of a slider has changed to "+slider.getValue());
});
~~~



{{note The names of events are case-insensitive.}}

{{editor	https://snippet.dhtmlx.com/sc7ov54z	Slider. Slider Events}}

## Detaching event listeners

To detach events, use **slider.events.detach()**:

~~~js
slider.events.on("Change", function(newValue, oldValue, isRange) {
    console.log("The value of a slider has changed to "+slider.getValue());
});

slider.events.detach("Change");
~~~

## Calling events

To call events, use **slider.events.fire()**:

~~~js
slider.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](slider/api/refs/slider_events.md).


