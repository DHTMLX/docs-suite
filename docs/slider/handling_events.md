---
sidebar_label: Event Handling 
title: JavaScript Slider - Event Handling 
description: You can explore the event handling of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Event Handling

## Attaching event listeners

You can attach event listeners with the **slider.events.on()** method:

~~~js
slider.events.on("change", function(newValue, oldValue, isRange){
    console.log("The value of a slider has changed to "+slider.getValue());
});
~~~

{{note The names of events are case-insensitive.}}

**Related sample**: [Slider. Slider Events](https://snippet.dhtmlx.com/sc7ov54z)

## Detaching event listeners

To detach events, use **slider.events.detach()**:

~~~js
slider.events.on("change", function(newValue, oldValue, isRange) {
    console.log("The value of a slider has changed to "+slider.getValue());
});

slider.events.detach("change");
~~~

## Calling events

To call events, use **slider.events.fire()**:

~~~js
slider.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](slider/api/api_overview.md#events).
