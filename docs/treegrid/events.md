---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

You can attach event listeners with the **treegrid.events.on()** method:

~~~js
treegrid.events.on("Scroll", function({top,left}){
    console.log("The treegrid is scrolled to "+top,left);
});
~~~

{{note The names of events are case-insensitive.}}

{{editor	https://snippet.dhtmlx.com/sgwnxshe	TreeGrid. TreeGrid Events}}

## Detaching event listeners

To detach events, use **treegrid.events.detach()**:

~~~js
treegrid.events.on("Scroll", function({top,left}){
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

The full list of events is available in the related [API section](treegrid/api/refs/treegrid_events.md).

