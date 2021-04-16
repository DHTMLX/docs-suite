---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

You can attach event listeners with the **tree.events.on()** method:

~~~js
tree.events.on("ItemClick", function(id, e){
    console.log("The item with the id "+ id +" was clicked.");
});
~~~

{{note The names of events are case-insensitive.}}

{{editor	https://snippet.dhtmlx.com/vux1ye9g	Tree. Events}}

## Detaching event listeners

To detach events, use **tree.events.detach()**:

~~~js
tree.events.on("ItemClick", function(id, e){
    console.log("The item with the id "+ id +" was clicked.");
});

tree.events.detach("ItemClick");
~~~

## Calling events

To call events, use **tree.events.fire()**:

~~~js
tree.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](tree/api/refs/tree_events.md).



