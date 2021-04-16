---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

You can attach event listeners with the **dhxWindow.events.on()** method:

~~~js
dhxWindow.events.on("Move", function(left,top){
    console.log("The window moved to "+left,top)
});
~~~

{{note The names of events are case-insensitive.}}

{{editor	https://snippet.dhtmlx.com/jfu4upwd	Window. Events}}

## Detaching event listeners

To detach events, use **dhxWindow.events.detach()**:

~~~js
var onmove = dhxWindow.events.on("Move", function(left,top){
    console.log("The window moved to "+left,top)
});

dhxWindow.events.detach(onmove);
~~~

## Calling events

To call events, use **dhxWindow.events.fire()**:

~~~js
dhxWindow.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](window/api/refs/window_events.md).


