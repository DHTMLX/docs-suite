---
sidebar_label: afterShow
title: JavaScript Window - afterShow Event 
description: You can explore the afterShow event of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterShow

@short: fires after a window is shown

@signature: {'afterShow: (position: object) => void;'}

@params:
- `position: object` - an object with coordinates of the window's position. The parameter contains two attributes:
    - `left: number` - the left coordinate of the window's position (in pixels)
    - `top: number` - the top coordinate of the window's position (in pixels)

@example:
dhxWindow.events.on("afterShow", function(position){
    console.log("A window is shown");
});

@descr:

**Related sample**: [Window. Events](https://snippet.dhtmlx.com/jfu4upwd)

@changelog:

The **position** parameter has been added in v7.0.

[comment]: # (@related: window/handling_events.md)
