---
sidebar_label: resize
title: JavaScript Window - resize Event 
description: You can explore the resize event of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# resize

@short: fires on resizing a window

@signature: {'resize: (state: (ISize & IPosition) | ISize | IPosition, oldState: (ISize & IPosition) | ISize | IPosition, side: IDirectionConfig) => void;'}

@params:
- `state: object` - an object with the new size and (or) position of a window
- `oldState: object` - an object with the previous size and (or) position of a window
- `side: object` - an object that specifies the direction of resizing

@example:
dhxWindow.events.on("resize", function(state, oldState, side) {
    console.log("The window is resized" + state.left, state.top, 
                state.width, state.height)
});

@descr:

**Related sample**: [Window. Events](https://snippet.dhtmlx.com/jfu4upwd)

The **state/oldState** object contains two attributes:

- **size** - (*object*) optional, an object with the size of a window. It contains two options:
    - **width** - (*number*) the width of the window
    - **height** - (*number*) the height of the window
- **position** - (*object*)  optional, an object with the position of the window  
    - **left** - (*number*)	the left coordinate of the window's position (in pixels)
    - **top** - (*number*)	the top coordinate of the window's position (in pixels)

The **side** object can contain the following directions:

- **left** - (*boolean*) optional, the left direction
- **right** - (*boolean*) optional, the right direction
- **top** - (*boolean*) optional, the top direction
- **bottom** - (*boolean*) optional, the bottom direction

[comment]: # (@related: window/handling_events.md)
