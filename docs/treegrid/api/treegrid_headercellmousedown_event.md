---
sidebar_label: headerCellMouseDown
title: headerCellMouseDown
---          

@short: fires on moving the mouse pointer over a grid header cell

@signature: {'headerCellMouseDown: (col: ICol, e: MouseEvent & TouchEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent | TouchEvent` - a native HTML event object

@example:
grid.events.on("HeaderCellMouseDown", function(column,e){
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. TreeGrid Events](https://snippet.dhtmlx.com/sgwnxshe)
