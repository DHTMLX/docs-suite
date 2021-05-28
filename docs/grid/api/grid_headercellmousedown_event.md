---
sidebar_label: headerCellMouseDown
title: JavaScript Grid - headerCellMouseDown Event 
hide_title: true
description: You can explore the headerCellMouseDown event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# headerCellMouseDown

@short: fires on moving the mouse pointer over a grid header cell

@signature: {'headerCellMouseDown: (col: ICol, events: MouseEvent & TouchEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `events: MouseEvent & TouchEvent` - a native HTML event object 

@example:
grid.events.on("HeaderCellMouseDown", function(col,e){
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
