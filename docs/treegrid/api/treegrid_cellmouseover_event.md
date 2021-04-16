---
sidebar_label: cellMouseOver
title: cellMouseOver
---          

@short: fires on moving the mouse pointer over a grid cell

@signature: cellMouseOver: (row: object, col: object, e: MouseEvent) => void;

@params:
- row			object		an object with a row configuration
- column		object		an object with a column configuration
- e				Event		a native event object

@example:
grid.events.on("CellMouseOver", function(row,column,e){
    // your logic here
});

@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/sgwnxshe	TreeGrid. TreeGrid Events
