---
sidebar_label: headerCellDblClick
title: headerCellDblClick
---          

@short: fires on double-click on a grid footer cell

@signature: {'headerCellDblClick: (col: ICol, events: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `events: MouseEvent` - a native HTML event object

@example:
grid.events.on("HeaderCellDblClick", function(column,e){
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
