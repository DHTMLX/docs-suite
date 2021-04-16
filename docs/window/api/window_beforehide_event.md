---
sidebar_label: beforeHide
title: beforeHide
description: description
---          

@short: fires before a window is hidden

@params:
- position  object      an object with coordinates of the window's position
- events    Event       a native event object

@returns:
- result		boolean			true to hide a window, false to block hiding a window

@example:
dhxWindow.events.on("BeforeHide", function(position, events){
    console.log("A window will be hidden", events);
    return true;
});

@template: api_event
@descr:
The event is blockable. Return *false* to block hiding a window.

The **position** parameter contains two attributes:

- **left** - (*number*)	the left coordinate of the window's position (in pixels)
- **top** - (*number*)	the top coordinate of the window's position (in pixels)

When the user closes the window by clicking on the Close icon (when the <a href="https://docs.dhtmlx.com/suite/window__api__window_closable_config.html">closable</a> option is enabled), the native event object will be passed into the second argument.

<br/>
Note, the event fires in 2 cases:

1. While calling the [hide](window/api/window_hide_method.md) method
2. While the [closable](window/api/window_closable_config.md) option is enabled and a user clicks on the Close icon

@relatedsample: https://snippet.dhtmlx.com/jfu4upwd	Window. Events

@related: window/handling_events.md

@changelog: 
The **position** and **events** parameters have been added in v7.0.
