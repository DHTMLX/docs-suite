---
sidebar_label: cellRightClick
title: JavaScript TreeGrid - cellRightClick Event 
description: You can explore the cellRightClick event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# cellRightClick

@short: fires on right click on a grid cell

@signature: {'cellRightClick: (row: object, col: object, e: MouseEvent) => void;'}

@params:
- `row: object` - an object with a row configuration
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("cellRightClick", function(row,column,e){
     // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)
