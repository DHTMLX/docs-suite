---
sidebar_label: cellMouseOver
title: cellMouseOver
---          

@short: fires on moving the mouse pointer over a grid cell

@signature: cellMouseOver: (row: IRow, col: ICol, e: MouseEvent) => void;

@params:
- row			object		an object with a row configuration
- col		object		an object with a column configuration
- e				Event		a native event object


@example:
grid.events.on("CellMouseOver", function(row,column,e){
    // your logic here
});


@template: api_event
@descr:

**Related sample**:
- [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

