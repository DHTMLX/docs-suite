---
sidebar_label: Event Handling
title: JavaScript Tree - Event Handling 
description: You can explore the event handling of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Event Handling

## Attaching event listeners

You can attach event listeners with the **tree.events.on()** method:

~~~js
tree.events.on("itemClick", function(id, e){
    console.log("The item with the id "+ id +" was clicked.");
});
~~~

{{note The names of events are case-insensitive.}}

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

## Detaching event listeners

To detach events, use **tree.events.detach()**:

~~~js
tree.events.on("itemClick", function(id, e){
    console.log("The item with the id "+ id +" was clicked.");
});

tree.events.detach("itemClick");
~~~

## Calling events

To call events, use **tree.events.fire()**:

~~~js
tree.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](tree/api/api_overview.md#events).
