---
sidebar_label: Event handling
title: JavaScript Grid - Event Handling 
description: You can explore the event handling of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can attach event listeners with the **grid.events.on()** method:

~~~js
grid.events.on("scroll", function({top,left}){
    console.log("The grid is scrolled to "+top,left);
});
~~~

{{note The names of events are case-insensitive.}}

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

## Detaching event listeners

To detach events, use **grid.events.detach()**:

~~~js
grid.events.on("scroll", function({top,left}){
    console.log("The grid is scrolled to "+top,left);
});

grid.events.detach("scroll");
~~~

## Calling events

To call events, use **grid.events.fire()**:

~~~js
grid.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](grid/api/api_overview.md#grid-events).
