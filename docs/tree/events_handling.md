---
sidebar_label: Event handling
title: JavaScript Tree - Event Handling 
description: You can explore the event handling of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can attach event listeners with the `tree.events.on()` method:

~~~js
tree.events.on("itemClick", function(id, e){
    console.log("The item with the id "+ id +" was clicked.");
});
~~~

:::note
Event names are case-insensitive.
:::

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

## Detaching event listeners

The `tree.events.detach()` method removes an event handler:

~~~js
tree.events.on("itemClick", function(id, e){
    console.log("The item with the id "+ id +" was clicked.");
});

tree.events.detach("itemClick");
~~~

## Calling events

The `tree.events.fire()` method calls an event:

~~~js
tree.events.fire("name",args);
// where args is an array of arguments
~~~

## List of events {#the-list-of-events}

You can find the full list of Tree events in the [API section](tree/api/api_overview.md#events).
