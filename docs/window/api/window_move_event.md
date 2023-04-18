---
sidebar_label: move
title: JavaScript Window - move Event 
description: You can explore the move event of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# move

@short: fires on moving a window

@signature: {'move: (position: object, oldPosition: object, side: object) => void;'}

@params:
- `position: object` - an object with the new position of the window. It contains two attributes:
    - `left: number` - the left coordinate of the window's position (in pixels)
    - `top: number` - the top coordinate of the window's position (in pixels)
- `oldPosition: object` - an object with the previous position of the window. It contains two attributes:
    - `left: number` - the left coordinate of the window's position (in pixels)
    - `top: number` - the top coordinate of the window's position (in pixels)
- `side: object` - an object that specifies the direction of resizing. It contains four directions:
    - `left: boolean` - optional, the left direction
    - `right: boolean` - optional, the right direction
    - `top: boolean` - optional, the top direction
    - `bottom: boolean` - optional, the bottom direction

@example:
dhxWindow.events.on("move", function(position, oldPosition, side) {
    console.log("The window is moved to " + position.left, position.top)
});

@descr:

**Related sample**: [Window. Events](https://snippet.dhtmlx.com/jfu4upwd)

[comment]: # (@related: window/handling_events.md)
