---
sidebar_label: move
title: move
---          

@short: fires on moving a window

```todoapi 
<!-- void move(object position,object oldPosition,object side){ ... };

move: (position: IPosition, oldPosition: IPosition, editettypes: IDirectionConfig) => void; -->
```

@params:
- position  object  an object with the new position of the window
- oldPosition   object  an object with the previous position of the window
- side  object  an object that specifies the direction of resizing

@example:
dhxWindow.events.on("Move", function(position, oldPosition, side) {
    console.log("The window is moved to " + position.left, position.top)
});

@template: api_event
@descr:
The **position/oldPosition** parameter contains two attributes:

- **left** - (*number*)	the left coordinate of the window's position (in pixels)
- **top** - (*number*)	the top coordinate of the window's position (in pixels)

The **side** object contains four directions:

- **left** - (*boolean*) optional, the left direction
- **right** - (*boolean*) optional, the right direction
- **top** - (*boolean*) optional, the top direction
- **bottom** - (*boolean*) optional, the bottom direction


@relatedsample: https://snippet.dhtmlx.com/jfu4upwd	Window. Events

@related: window/handling_events.md

