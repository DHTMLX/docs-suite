---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

You can attach event listeners with the **pagination.events.on()** method:

~~~js
pagination.events.on("Change", function(index, previousIndex){
    console.log("The currently active page", index);
});
~~~

{{note The names of events are case-insensitive.}}

[Pagination. Pagination events](https://snippet.dhtmlx.com/mlrtmj7p)

## Detaching event listeners

To detach events, use **pagination.events.detach()**:

~~~js
pagination.events.on("Change", function(index, previousIndex){
    console.log("The currently active page", index);
});

pagination.events.detach("Change");
~~~

## Calling events

To call events, use **pagination.events.fire()**:

~~~js
pagination.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](pagination/api/refs/pagination_events.md).
