---
sidebar_label: headerCellMouseOver
title: headerCellMouseOver
---          

@short: fires on moving the mouse pointer over a grid header cell

@signature: {'headerCellMouseOver: (col: ICol, events: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `events: MouseEvent` - a native HTML event object

@example:
grid.events.on("HeaderCellMouseOver", function(col,e){
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
