---
sidebar_label: footerCellMouseOver
title: JavaScript Grid - footerCellMouseOver Event 
description: You can explore the footerCellMouseOver event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# footerCellMouseOver

@short: fires on moving the mouse pointer over a grid footer cell

@signature: {'footerCellMouseOver: (col: object, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("FooterCellMouseOver ", function(col,e){
    // your logic here
});

@descr:
