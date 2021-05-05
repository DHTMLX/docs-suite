---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a window is shown

@signature: {'afterShow: (position: IPosition) => void;'}

@params:
- position  object      an object with coordinates of the window's position

@example:
dhxWindow.events.on("AfterShow", function(position){
    console.log("A window is shown");
});



@descr:
The **position** parameter contains two attributes:

- **left** - (*number*)	the left coordinate of the window's position (in pixels)
- **top** - (*number*)	the top coordinate of the window's position (in pixels)

**Related sample**: [Window. Events](https://snippet.dhtmlx.com/jfu4upwd)

@related: window/handling_events.md

@changelog: 
The **position** parameter has been added in v7.0.