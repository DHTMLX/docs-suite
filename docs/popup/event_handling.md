---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

You can attach event listeners with the **popup.events.on()** method:

~~~js
popup.events.on("Click", function(e){
    console.log("The popup was clicked");
});
~~~

{{note The names of events are case-insensitive.}}

{{editor	https://snippet.dhtmlx.com/ro2lza9t	Popup. Events}}

## Detaching event listeners

To detach events, use **popup.events.detach()**:

~~~js
popup.events.on("Click", function(e){
    console.log("The popup was clicked");
});

popup.events.detach("Click");
~~~

## Calling events

To call events, use **popup.events.fire()**:

~~~js
popup.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](popup/api/refs/popup_events.md).


