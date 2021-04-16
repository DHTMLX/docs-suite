---
sidebar_label: resize
title: resize
---          

@short: fires on resizing a window

```todoapi 
void resize(object state,object oldState,object side){ ... };

resize: (state: (ISize & IPosition) | ISize | IPosition, oldState: (ISize & IPosition) | ISize | IPosition, editettypes: IDirectionConfig) => void;
```

@params:
- state     		object    an object with the new size and (or) position of a window
- oldState   	object    an object with the previous size and (or) position of a window
- side  object  an object that specifies the direction of resizing


@example:
dhxWindow.events.on("Resize", function(state, oldState, side) {
    console.log("The window is resized" + state.left, state.top, 
                state.width, state.height)
});


@template: api_event
@descr:
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

@relatedsample: https://snippet.dhtmlx.com/jfu4upwd	Window. Events

@related: window/handling_events.md