---
sidebar_label: cellClick
title: cellClick
---          

@short: fires on click on a grid cell

@signature: {'cellClick: (row: IRow, col: ICol, e: MouseEvent) => void;'}

@params:
- row			object		an object with a row configuration
- col		object		an object with a column configuration
- e				Event		a native event object

@example:
grid.events.on("CellClick", function(row,column,e){
     // your logic here
});


@descr:

**Related sample**: [TreeGrid. TreeGrid Events](https://snippet.dhtmlx.com/sgwnxshe)
