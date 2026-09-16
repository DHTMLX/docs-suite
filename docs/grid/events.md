---
sidebar_label: Event handling
title: JavaScript Grid - Event Handling 
description: You can explore the event handling of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

To attach event listeners, use the `grid.events.on()` method:

~~~js
grid.events.on("scroll", function({top,left}){
    console.log("The grid is scrolled to "+top,left);
});
~~~

:::note
Event names are case-insensitive.
:::

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

## Detaching event listeners

To detach events, use the `grid.events.detach()` method:

~~~js
grid.events.on("scroll", function({top,left}){
    console.log("The grid is scrolled to "+top,left);
});

grid.events.detach("scroll");
~~~

## Calling events

To call events, use the `grid.events.fire()` method:

~~~js
grid.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

For the full list of events, see the related [API section](grid/api/api_overview.md#grid-events).
