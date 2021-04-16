---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a window is shown

afterShow: (position: object) => void;

@params:
- position  object      an object with coordinates of the window's position

@example:
dhxWindow.events.on("AfterShow", function(position){
    console.log("A window is shown");
});


@template: api_event
@descr:
The **position** parameter contains two attributes:

- **left** - (*number*)	the left coordinate of the window's position (in pixels)
- **top** - (*number*)	the top coordinate of the window's position (in pixels)

@relatedsample: https://snippet.dhtmlx.com/jfu4upwd	Window. Events

@related: window/handling_events.md

@changelog: 
The **position** parameter has been added in v7.0.