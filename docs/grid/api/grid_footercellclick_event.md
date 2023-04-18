---
sidebar_label: footerCellClick
title: JavaScript Grid - footerCellClick Event 
description: You can explore the footerCellClick event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerCellClick

@short: fires on click on a grid footer cell

@signature: {'footerCellClick: (col: object, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("footerCellClick", function(col,e){
    // your logic here
});

@descr:
