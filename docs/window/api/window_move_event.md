---
sidebar_label: move
title: JavaScript Window - move Event 
description: You can explore the move event of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# move

@short: fires on moving a window

@signature: {'move: (position: IPosition, oldPosition: IPosition, side: IDirectionConfig) => void;'}

@params:
- `position: object` - an object with the new position of the window
- `oldPosition: object` - an object with the previous position of the window
- `side: object` - an object that specifies the direction of resizing

@example:
dhxWindow.events.on("move", function(position, oldPosition, side) {
    console.log("The window is moved to " + position.left, position.top)
});

@descr:

**Related sample**: [Window. Events](https://snippet.dhtmlx.com/jfu4upwd)

The **position/oldPosition** parameter contains two attributes:

- **left** - (*number*)	the left coordinate of the window's position (in pixels)
- **top** - (*number*)	the top coordinate of the window's position (in pixels)

The **side** object contains four directions:

- **left** - (*boolean*) optional, the left direction
- **right** - (*boolean*) optional, the right direction
- **top** - (*boolean*) optional, the top direction
- **bottom** - (*boolean*) optional, the bottom direction

[comment]: # (@related: window/handling_events.md)
