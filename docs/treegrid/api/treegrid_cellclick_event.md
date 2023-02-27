---
sidebar_label: cellClick
title: JavaScript TreeGrid - cellClick Event 
description: You can explore the cellClick event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# cellClick

@short: fires on click on a grid cell

@signature: {'cellClick: (row: IRow, col: ICol, e: MouseEvent) => void;'}

@params:
- `row: object` - an object with a row configuration
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("cellClick", function(row,column,e){
     // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

You can use the event when you need to open the editor of a treegrid cell with a single click. Check the details in the [Opening editor with one click](../../../treegrid/configuration/#opening-editor-with-one-click) article.