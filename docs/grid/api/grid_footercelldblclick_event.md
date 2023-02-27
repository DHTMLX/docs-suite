---
sidebar_label: footerCellDblClick
title: JavaScript Grid - footerCellDblClick Event 
description: You can explore the footerCellDblClick event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

#  footerCellDblClick

@short: fires on double-click on a grid footer cell

@signature: {'footerCellDblClick: (col: ICol, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("footerCellDblClick", function(col,e){
    // your logic here
});

@descr:
