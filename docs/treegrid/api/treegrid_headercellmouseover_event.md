---
sidebar_label: headerCellMouseOver
title: headerCellMouseOver
---          

@short: fires on moving the mouse pointer over a grid header cell

@signature: {'headerCellMouseOver: (col: ICol, e: MouseEvent) => void;'}

@params:
- column		object		an object with a column configuration
- e				Event		a native event object

@example:
grid.events.on("HeaderCellMouseOver", function(column,e){
    // your logic here
});


@descr:

**Related sample**: [TreeGrid. TreeGrid Events](https://snippet.dhtmlx.com/sgwnxshe)
