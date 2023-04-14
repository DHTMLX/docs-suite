---
sidebar_label: headerCellDblClick
title: JavaScript TreeGrid - headerCellDblClick Event 
description: You can explore the headerCellDblClick event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerCellDblClick

@short: fires on double-click on a grid footer cell

@signature: {'headerCellDblClick: (col: object, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("headerCellDblClick", function(column,e){
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)
