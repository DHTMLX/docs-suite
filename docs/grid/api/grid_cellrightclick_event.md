---
sidebar_label: cellRightClick
title: JavaScript Grid - cellRightClick Event 
description: You can explore the cellRightClick event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# cellRightClick

@short: fires on right click on a grid cell

@signature: {'cellRightClick: (row: IRow, col: ICol, e: MouseEvent) => void;'}

@params:
- `row: object` - an object with a row configuration
- `column: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("CellRightClick", function(row,column,e){
     // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
