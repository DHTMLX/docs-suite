---
sidebar_label: cellClick
title: cellClick
---          

@short: fires on click on a grid cell

@signature: {'cellClick: (row: IRow, col: ICol, e: MouseEvent) => void;'}

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

**Related sample**:
- [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
