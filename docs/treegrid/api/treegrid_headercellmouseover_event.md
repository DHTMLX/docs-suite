---
sidebar_label: headerCellMouseOver
title: headerCellMouseOver
---          

@short: fires on moving the mouse pointer over a grid header cell

@signature: headerCellMouseOver: (col: object, e: MouseEvent) => void;

@params:
- column		object		an object with a column configuration
- e				Event		a native event object

@example:
grid.events.on("HeaderCellMouseOver", function(column,e){
    // your logic here
});

@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/sgwnxshe	TreeGrid. TreeGrid Events
