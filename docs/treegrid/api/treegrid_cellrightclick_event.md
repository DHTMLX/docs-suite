---
sidebar_label: cellRightClick
title: cellRightClick
---          

@short: fires on right click on a grid cell

@signature: {'cellRightClick: (row: IRow, col: ICol, e: MouseEvent) => void;'}

@params:
- row			object		an object with a row configuration
- column		object		an object with a column configuration
- e				Event		a native event object

@example:
grid.events.on("CellRightClick", function(row,column,e){
     // your logic here
});


@descr:

**Related sample**: [TreeGrid. TreeGrid Events](https://snippet.dhtmlx.com/sgwnxshe)
