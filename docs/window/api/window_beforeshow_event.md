---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a window is shown

@signature: {'beforeShow: (position: IPosition) => boolean | void;'}

@params:
- position  object      an object with coordinates of the window's position

@returns:
- result		boolean			true to show a window, false to block showing a window

@example:
dhxWindow.events.on("BeforeShow", function(position){
    console.log("A window will be shown");
    return true;
});



@descr:

**Related sample**: [Window. Events](https://snippet.dhtmlx.com/jfu4upwd)

The event is blockable. Return *false* to block showing a window.


The **position** parameter contains two attributes:

- **left** - (*number*)	the left coordinate of the window's position (in pixels)
- **top** - (*number*)	the top coordinate of the window's position (in pixels)


@related: window/handling_events.md

@changelog: 
The **position** parameter has been added in v7.0.