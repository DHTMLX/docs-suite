---
sidebar_label: headerCellRightClick
title: headerCellRightClick
---          

@short: fires on right click on a grid header cell

@signature: {'headerCellRightClick: (col: ICol, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("HeaderCellRightClick", function(column,e){
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. TreeGrid Events](https://snippet.dhtmlx.com/sgwnxshe)
