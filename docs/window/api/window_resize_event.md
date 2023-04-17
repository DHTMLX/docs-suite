---
sidebar_label: resize
title: JavaScript Window - resize Event 
description: You can explore the resize event of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# resize

@short: fires on resizing a window

@signature: {'resize: (state: object, oldState: object, side: object) => void;'}

@params:
- `state: object` - an object with the new size and (or) position of a window. 
    - The size parameters are:
        - `width: number` - the width of the window
        - `height: number` - the height of the window
    - The position parameters are:
        - `left: number` - the left coordinate of the window's position (in pixels)
        - `top: number` - the top coordinate of the window's position (in pixels)
- `oldState: object` - an object with the previous size and (or) position of a window
    - The size parameters are:
        - `width: number` - the width of the window
        - `height: number` - the height of the window
    - The position parameters are:
        - `left: number` - the left coordinate of the window's position (in pixels)
        - `top: number` - the top coordinate of the window's position (in pixels)
- `side: object` - an object that specifies the direction of resizing. It contains four directions:
    - `left: boolean` - optional, the left direction
    - `right: boolean` - optional, the right direction
    - `top: boolean` - optional, the top direction
    - `bottom: boolean` - optional, the bottom direction

@example:
dhxWindow.events.on("resize", function(state, oldState, side) {
    console.log("The window is resized" + state.left, state.top, 
                state.width, state.height)
});

@descr:

**Related sample**: [Window. Events](https://snippet.dhtmlx.com/jfu4upwd)

[comment]: # (@related: window/handling_events.md)
