---
sidebar_label: cellDblClick
title: cellDblClick
---          

@short: fires on double-click on a grid cell

@signature: {'cellDblClick: (row: IRow, col: ICol, e: MouseEvent) => void;'}

@params:
- `row: object` - an object with a row configuration
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("CellDblClick", function(row,column,e){
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. TreeGrid Events	](https://snippet.dhtmlx.com/sgwnxshe)
