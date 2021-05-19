---
sidebar_label: cellMouseDown
title: cellMouseDown
---          

@short: fires before releasing the left mouse button when clicking on a grid cell

@signature: {'cellMouseDown: (row: IRow, col: ICol, e: MouseEvent & TouchEvent) => void;'}

@params:
`row: object` - an object with a row configuration
`column: object` - an object with a column configuration
`e: Event` - a native event object

@example:
grid.events.on("CellMouseDown", function(row,column,e){
     // your logic here
});

@descr:

**Related sample**: [TreeGrid. TreeGrid Events](https://snippet.dhtmlx.com/sgwnxshe)
