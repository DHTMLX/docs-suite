---
sidebar_label: headerCellRightClick
title: JavaScript Grid - headerCellRightClick Event 
description: You can explore the headerCellRightClick event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# headerCellRightClick

@short: fires on right click on a grid header cell

@signature: {'headerCellRightClick: (col: ICol, events: MouseEvent) => void;'}

@params:
- `column: object` - an object with a column configuration
- `events: MouseEvent` - a native HTML event object

@example:
grid.events.on("headerCellRightClick", function(col,e){
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
