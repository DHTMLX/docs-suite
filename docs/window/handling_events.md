---
sidebar_label: Event handling
title: JavaScript Window - Event Handling 
description: You can explore the event handling of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can attach event listeners with the **dhxWindow.events.on()** method:

~~~js
dhxWindow.events.on("move", function(position, oldPosition, side) {
    console.log("The window is moved to " + position.left, position.top)
});
~~~

{{note The names of events are case-insensitive.}}

**Related sample**: [Window. Events](https://snippet.dhtmlx.com/jfu4upwd)

## Detaching event listeners

To detach events, use **dhxWindow.events.detach()**:

~~~js
dhxWindow.events.on("move", function(position, oldPosition, side) {
    console.log("The window is moved to " + position.left, position.top)
});

dhxWindow.events.detach("move");
~~~

## Calling events

To call events, use **dhxWindow.events.fire()**:

~~~js
dhxWindow.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](window/api/api_overview.md#events).
