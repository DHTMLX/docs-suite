---
sidebar_label: headerCellClick
title: headerCellClick
---          

@short: fires on click on a grid header cell

@signature: {'headerCellClick: (col: ICol, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("HeaderCellClick", function(column,e){
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. TreeGrid Events](https://snippet.dhtmlx.com/sgwnxshe)
