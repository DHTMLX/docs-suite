---
sidebar_label: cellDblClick
title: cellDblClick
---          

@short: fires on double-click on a grid cell

@signature: {'cellDblClick: (row: IRow, col: ICol, e: MouseEvent) => void;'}

@params:
- row			object		an object with a row configuration
- col		object		an object with a column configuration
- e				MouseEvent		a MouseEvent object

@example:
grid.events.on("CellDblClick", function(row,column,e){
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
