---
sidebar_label: beforeHide
title: JavaScript Window - beforeHide Event 
description: You can explore the beforeHide event of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeHide

@short: fires before a window is hidden

@signature: {'beforeHide: (position: IPosition, e?: Event) => boolean | void;'}

@params:
- `position: object` - an object with coordinates of the window's position
- `events: Event` - a native event object

@returns:
Return `true` to hide a window, `false` to block hiding a window.

@example:
dhxWindow.events.on("BeforeHide", function(position, events){
    console.log("A window will be hidden", events);
    return true;
});

@descr:

**Related sample**: [Window. Events](https://snippet.dhtmlx.com/jfu4upwd)

The **position** parameter contains two attributes:

- **left** - (*number*) the left coordinate of the window's position (in pixels)
- **top** - (*number*) the top coordinate of the window's position (in pixels)

When the user closes the window by clicking on the Close icon (when the [](window/api/window_closable_config.md) option is enabled), the native event object will be passed into the second argument.

Note, the event fires in 2 cases:

1. While calling the [hide](window/api/window_hide_method.md) method
2. While the [closable](window/api/window_closable_config.md) option is enabled and a user clicks on the Close icon

@changelog:

The **position** and **events** parameters have been added in v7.0.

[comment]: # (@related: window/handling_events.md)
