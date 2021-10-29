---
sidebar_label: Event Handling
title: JavaScript Pagination - Event Handling 
description: You can explore the event handling of Pagination in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Event Handling

## Attaching event listeners

You can attach event listeners with the **pagination.events.on()** method:

~~~js
pagination.events.on("change", function(index, previousIndex){
    console.log("The currently active page", index);
});
~~~

{{note The names of events are case-insensitive.}}

**Related sample**: [Pagination. Pagination events](https://snippet.dhtmlx.com/mlrtmj7p)

## Detaching event listeners

To detach events, use **pagination.events.detach()**:

~~~js
pagination.events.on("change", function(index, previousIndex){
    console.log("The currently active page", index);
});

pagination.events.detach("change");
~~~

## Calling events

To call events, use **pagination.events.fire()**:

~~~js
pagination.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](pagination/api/api_overview.md#events).
