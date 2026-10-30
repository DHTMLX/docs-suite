---
sidebar_label: Event handling
title: JavaScript Pagination - Event Handling 
description: You can explore the event handling of Pagination in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can attach event listeners with the `pagination.events.on()` method:

~~~js
pagination.events.on("change", function(index, previousIndex){
    console.log("The currently active page", index);
});
~~~

{{note Event names are case-insensitive.}}

**Related sample**: [Pagination. Events](https://snippet.dhtmlx.com/mlrtmj7p)

## Detaching event listeners

The `pagination.events.detach()` method removes event listeners:

~~~js
pagination.events.on("change", function(index, previousIndex){
    console.log("The currently active page", index);
});

pagination.events.detach("change");
~~~

## Calling events

The `pagination.events.fire()` method calls an event:

~~~js
pagination.events.fire("name",args);
// where args is an array of arguments
~~~

## List of events {#the-list-of-events}

The [API section](pagination/api/api_overview.md#events) lists all Pagination events.
