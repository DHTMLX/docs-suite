---
sidebar_label: cellDblClick
title: JavaScript TreeGrid - cellDblClick Event 
description: You can explore the cellDblClick event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# cellDblClick

@short: fires on double-click on a grid cell

@signature: {'cellDblClick: (row: object, col: object, e: MouseEvent) => void;'}

@params:
- `row: object` - an object with a row configuration
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("cellDblClick", function(row,column,e){
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)
