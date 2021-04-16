---
sidebar_label: cellClick
title: cellClick
---          

@short: fires on click on a grid cell

@signature: cellClick: (row: object, col: object, e: MouseEvent) => void;

@params:
- row			object		an object with a row configuration
- column		object		an object with a column configuration
- e				Event		a MouseEvent object


@example:
grid.events.on("CellClick", function(row,column,e){
     // your logic here
});


@template: api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/9zeyp4ds	Grid. Events
