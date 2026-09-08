---
sidebar_label: Event handling
title: JavaScript Colorpicker - Event Handling 
description: You can explore the event handling of Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can attach event listeners with the `colorpicker.events.on()` method:

~~~js
colorpicker.events.on("modeChange", function(view) {
   console.log("Selected mode: " + view); 
});
~~~

{{note Event names are case-insensitive.}}

**Related sample**: [Colorpicker. Events](https://snippet.dhtmlx.com/fllgaabo)

## Detaching event listeners

You can detach event listeners with the `colorpicker.events.detach()` method:

~~~js
colorpicker.events.on("modeChange", function(view) {
   console.log("Selected mode: " + view); 
});

colorpicker.events.detach("modeChange");
~~~

## Calling events

You can call events with the `colorpicker.events.fire()` method:

~~~js
colorpicker.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The [API section](colorpicker/api/api_overview.md#events) lists all Colorpicker events.
