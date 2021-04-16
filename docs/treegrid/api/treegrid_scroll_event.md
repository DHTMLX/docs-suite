---
sidebar_label: scroll
title: scroll
---          

@short: fires on scrolling a grid

@signature: scroll: (object: coords) => void;

@params:
- coords	object		an object with new top and left coordinates

@example:
grid.events.on("Scroll", function({top,left}){
    console.log("The grid is scrolled to "+top,left);
});

@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/sgwnxshe	TreeGrid. TreeGrid Events
