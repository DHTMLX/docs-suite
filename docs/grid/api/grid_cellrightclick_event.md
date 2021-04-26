---
sidebar_label: cellRightClick
title: cellRightClick
---          

@short: fires on right click on a grid cell

@signature: cellRightClick: (row: object, col: object, e: MouseEvent) => void;

<!-- @params:
- row			object		an object with a row configuration
- column		object		an object with a column configuration
- e				Event		a native event object -->


@example:
grid.events.on("CellRightClick", function(row,column,e){
     // your logic here
});


@template: api_event
@descr:


**Related sample**:
- [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
