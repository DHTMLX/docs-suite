---
sidebar_label: cellMouseDown
title: JavaScript Grid - cellMouseDown Event 
description: You can explore the cellMouseDown event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# cellMouseDown

@short: fires before releasing the left mouse button when clicking on a grid cell

@signature: {'cellMouseDown: (row: object, col: object, e: MouseEvent & TouchEvent) => void;'}

@params:
- `row: object` - an object with a row configuration
- `column: object` - an object with a column configuration
- `e: MouseEvent & TouchEvent` - a native HTML event object

@example:
grid.events.on("cellMouseDown", function(row,column,e){
     // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
