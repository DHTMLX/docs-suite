---
sidebar_label: headerCellMouseDown
title: headerCellMouseDown
---          

@short: fires on moving the mouse pointer over a grid header cell

@signature: {'headerCellMouseDown: (col: ICol, events: MouseEvent & TouchEvent) => void;'}

@params:
- col		object		an object with a column configuration
- events	Event		a native event object 

@example:
grid.events.on("HeaderCellMouseDown", function(column,e){
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
