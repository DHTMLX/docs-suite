---
sidebar_label: headerCellDblClick
title: JavaScript Grid - headerCellDblClick Event 
description: You can explore the headerCellDblClick event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# headerCellDblClick

@short: fires on double-click on a grid footer cell

@signature: {'headerCellDblClick: (col: ICol, events: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `events: MouseEvent` - a native HTML event object

@example:
grid.events.on("headerCellDblClick", function(col,e){
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
