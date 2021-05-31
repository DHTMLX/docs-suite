---
sidebar_label: Event Handling
title: JavaScript Window - Event Handling 
description: You can explore the event handling of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Event Handling

## Attaching event listeners

You can attach event listeners with the **dhxWindow.events.on()** method:

~~~js
dhxWindow.events.on("Move", function(left,top){
    console.log("The window moved to "+left,top)
});
~~~

{{note The names of events are case-insensitive.}}

**Related sample**: [Window. Events](https://snippet.dhtmlx.com/jfu4upwd)

## Detaching event listeners

To detach events, use **dhxWindow.events.detach()**:

~~~js
var onmove = dhxWindow.events.on("Move", function(left,top){
    console.log("The window moved to "+left,top)
});

dhxWindow.events.detach(onmove);
~~~

## Calling events

To call events, use **dhxWindow.events.fire()**:

~~~js
dhxWindow.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](window/api/api_overview.md#events).
