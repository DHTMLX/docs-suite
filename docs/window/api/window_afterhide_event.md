---
sidebar_label: afterHide
title: afterHide
description: description
---          

@short: fires after a window is hidden

@signature: afterHide: (position: object, e?: Event) => void;

@params:
- position  object      an object with coordinates of the window's position
- events    Event       a native event object

@example:
dhxWindow.events.on("AfterHide", function(position, events){
    console.log("A window is hidden", events);
});


@template: api_event
@descr:
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
