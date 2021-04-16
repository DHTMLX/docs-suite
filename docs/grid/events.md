---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

You can attach event listeners with the **grid.events.on()** method:

~~~js
grid.events.on("Scroll", function({top,left}){
    console.log("The grid is scrolled to "+top,left);
});
~~~

{{note The names of events are case-insensitive.}}

{{editor    https://snippet.dhtmlx.com/9zeyp4ds	Grid. Events}}

## Detaching event listeners

To detach events, use **grid.events.detach()**:

~~~js
grid.events.on("Scroll", function({top,left}){
    console.log("The grid is scrolled to "+top,left);
});

grid.events.detach("Scroll");
~~~

## Calling events

To call events, use **grid.events.fire()**:

~~~js
grid.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](grid/api/refs/grid_events.md).


