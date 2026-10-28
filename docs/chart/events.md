---
sidebar_label: Event handling
title: JavaScript Chart - Event Handling 
description: You can explore the event handling of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attach event listeners

Use the `chart.events.on()` method to attach event listeners:

~~~js
chart.events.on("resize", function({ width, height }){
    console.log("The size of the chart has changed");
});
~~~

**Related sample**: [Chart. Events](https://snippet.dhtmlx.com/a1b9yfwo)

## Detach event listeners

The `chart.events.detach()` method removes a listener:

~~~js
chart.events.on("resize", function({ width, height }){
    console.log("The size of the chart has changed");
});

chart.events.detach("resize");
~~~

## Trigger events

Call `chart.events.fire()` to trigger an event manually:

~~~js
chart.events.fire("name",args);
// where args is an array of arguments
~~~

## Event list

For the full event list, see the [API section](chart/api/api_overview.md#events).
