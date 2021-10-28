---
sidebar_label: Event Handling
title: JavaScript TreeGrid - Event Handling 
description: You can explore the event handling of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Event Handling

## Attaching event listeners

You can attach event listeners with the **treegrid.events.on()** method:

~~~js
treegrid.events.on("scroll", function({top,left}){
    console.log("The treegrid is scrolled to "+top,left);
});
~~~

{{note The names of events are case-insensitive.}}

**Related sample**: [TreeGrid. TreeGrid Events](https://snippet.dhtmlx.com/sgwnxshe)

## Detaching event listeners

To detach events, use **treegrid.events.detach()**:

~~~js
treegrid.events.on("scroll", function({top,left}){
    console.log("The treegrid is scrolled to "+top,left);
});

treegrid.events.detach("Scroll");
~~~

## Calling events

To call events, use **treegrid.events.fire()**:

~~~js
treegrid.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](treegrid/api/api_overview.md#treegrid-events).
