---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

You can attach event listeners with the **chart.events.on()** method:

~~~js
chart.events.on("Resize", function({width:500, height:500}){
    console.log("The size of the chart has changed");
});
~~~

{{note The names of events are case-insensitive.}}

{{editor    https://snippet.dhtmlx.com/a1b9yfwo	Chart. Events}}

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

The full list of events is available in the related [API section](chart/api/refs/chart_events.md).


