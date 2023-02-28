---
sidebar_label: Event handling
title: JavaScript Popup - Event Handling 
description: You can explore the event handling of Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can attach event listeners with the **popup.events.on()** method:

~~~js
popup.events.on("click", function(e){
    console.log("The popup was clicked");
});
~~~

{{note The names of events are case-insensitive.}}

**Related sample**: [Popup. Events](https://snippet.dhtmlx.com/ro2lza9t)

## Detaching event listeners

To detach events, use **popup.events.detach()**:

~~~js
popup.events.on("click", function(e){
    console.log("The popup was clicked");
});

popup.events.detach("click");
~~~

## Calling events

To call events, use **popup.events.fire()**:

~~~js
popup.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](popup/api/api_overview.md#events).
