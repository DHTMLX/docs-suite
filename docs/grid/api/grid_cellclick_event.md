---
sidebar_label: cellClick
title: JavaScript Grid - cellClick Event 
description: You can explore the cellClick event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# cellClick

@short: fires on click on a grid cell

@signature: {'cellClick: (row: object, column: object, event: MouseEvent) => void;'}

@params:
The callback of the event is called with the following parameters:
- `row: object` - an object with a row configuration
- `column: object` - an object with a column configuration
- `event: MouseEvent` - a native HTML event object

@example:
grid.events.on("cellClick", (row, column, event) => {
     // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

You can use the event when you need to open the editor of a grid cell with a single click. Check the details in the [Opening editor with one click](../../../grid/configuration/#opening-editor-with-one-click) article.