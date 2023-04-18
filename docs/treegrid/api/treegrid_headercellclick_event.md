---
sidebar_label: headerCellClick
title: JavaScript TreeGrid - headerCellClick Event 
description: You can explore the headerCellClick event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerCellClick

@short: fires on click on a grid header cell

@signature: {'headerCellClick: (col: object, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("headerCellClick", function(column,e){
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)
