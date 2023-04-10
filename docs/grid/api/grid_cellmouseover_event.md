---
sidebar_label: cellMouseOver
title: JavaScript Grid - cellMouseOver Event 
description: You can explore the cellMouseOver event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# cellMouseOver

@short: fires on moving the mouse pointer over a grid cell

@signature: {'cellMouseOver: (row: object, col: object, e: MouseEvent) => void;'}

@params:
- `row: object` - an object with a row configuration
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("cellMouseOver", function(row,column,e){
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
