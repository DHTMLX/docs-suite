---
sidebar_label: beforeShow
title: JavaScript Window - beforeShow Event 
description: You can explore the beforeShow event of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeShow

@short: fires before a window is shown

@signature: {'beforeShow: (position: object) => boolean | void;'}

@params:
- `position: object` - an object with coordinates of the window's position. The parameter contains two attributes:
    - `left: number` - the left coordinate of the window's position (in pixels)
    - `top: number` - the top coordinate of the window's position (in pixels)

@returns:
Return `true` to show a window, `false` to block showing a window.

@example:
dhxWindow.events.on("beforeShow", function(position){
    console.log("A window will be shown");
    return true;
});

@descr:

**Related sample**: [Window. Events](https://snippet.dhtmlx.com/jfu4upwd)

@changelog:

The **position** parameter has been added in v7.0.

[comment]: # (@related: window/handling_events.md)
