---
sidebar_label: footerCellMouseDown
title: JavaScript Grid - footerCellMouseDown Event 
hide_title: true
description: You can explore the footerCellMouseDown event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# footerCellMouseDown

@short: fires on moving the mouse pointer over a grid footer cell

@signature: {'footerCellMouseDown: (col: ICol, e: MouseEvent & TouchEvent) => void;'}

@params:
- `column: object` - an object with a column configuration
- `e: MouseEvent & TouchEvent` - a native HTML event object

@example:
grid.events.on("FooterCellMouseDown", function(column,e){
    // your logic here
});

@descr:
