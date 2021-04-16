---
sidebar_label: cellMouseDown
title: cellMouseDown
---          

@short: fires before releasing the left mouse button when clicking on a grid cell

@signature: cellMouseDown: (row: object, col: object, e: MouseEvent & TouchEvent) => void;

<!-- @params:
- row			object		an object with a row configuration
- column		object		an object with a column configuration
- e				Event		a native event object -->


@example:
grid.events.on("CellMouseDown", function(row,column,e){
     // your logic here
});


@template: api_event
@descr:


@relatedsample:
https://snippet.dhtmlx.com/9zeyp4ds	Grid. Events
