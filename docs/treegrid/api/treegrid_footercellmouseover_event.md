---
sidebar_label: footerCellMouseOver
title: JavaScript TreeGrid - footerCellMouseOver Event 
description: You can explore the footerCellMouseOver event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerCellMouseOver

@short: fires on moving the mouse pointer over a grid footer cell

@signature: {'footerCellMouseOver: (col: ICol, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("footerCellMouseOver ", function(column,e){
    // your logic here
});

@descr:
