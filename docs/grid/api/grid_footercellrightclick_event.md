---
sidebar_label: footerCellRightClick
title: JavaScript Grid - footerCellRightClick Event 
description: You can explore the footerCellRightClick event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerCellRightClick

@short: fires on right click on a grid footer cell

@signature: {'footerCellRightClick: (col: object, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("footerCellRightClick", function(col,e){
    // your logic here
});

@descr:
