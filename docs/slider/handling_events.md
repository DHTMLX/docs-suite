---
sidebar_label: Event handling 
title: JavaScript Slider - Event Handling 
description: You can explore the event handling of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can attach event listeners with the `slider.events.on()` method:

~~~js
slider.events.on("change", function(newValue, oldValue, isRange){
    console.log("The value of a slider has changed to "+slider.getValue());
});
~~~

{{note Event names are case-insensitive.}}

**Related sample**: [Slider. Events](https://snippet.dhtmlx.com/sc7ov54z)

## Detaching event listeners

You can detach event listeners with the `slider.events.detach()` method:

~~~js
slider.events.on("change", function(newValue, oldValue, isRange) {
    console.log("The value of a slider has changed to "+slider.getValue());
});

slider.events.detach("change");
~~~

## Calling events

You can call events with the `slider.events.fire()` method:

~~~js
slider.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The [API section](slider/api/api_overview.md#events) lists all Slider events.
