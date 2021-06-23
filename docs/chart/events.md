---
sidebar_label: Event Handling
title: JavaScript Chart - Event Handling 
description: You can explore the event handling of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Event Handling

## Attaching event listeners

You can attach event listeners with the **chart.events.on()** method:

~~~js
chart.events.on("Resize", function({width:500, height:500}){
    console.log("The size of the chart has changed");
});
~~~

**Related sample**: [Chart. Events](https://snippet.dhtmlx.com/a1b9yfwo)

## Detaching event listeners

To detach events, use the **chart.events.detach()** method:

~~~js
chart.events.on("Resize", function({width:500, height:500}){
    console.log("The size of the chart has changed");
});

chart.events.detach("Resize");
~~~

## Calling events

To call events, use the **chart.events.fire()** method:

~~~js
chart.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](chart/api/api_overview.md#events).

## Events basic rules

To learn more about how to work with events, check Events basic rules.
