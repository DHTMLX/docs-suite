---
sidebar_label: afterSelect
title: JavaScript Grid - afterSelect Event 
description: You can explore the afterSelect event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterSelect

@short: fires after selecting a cell

@signature: {'afterSelect: (row: IRow, col: ICol) => void;'}

@params:

- `row: object` - the config of a row
- `col: object` - the config of a column

@example:
grid.selection.events.on("AfterSelect", function(row, col){
    console.log("afterSelect", row, col); 
});

@descr:
It is also possible to use the simplified version of the event:

~~~js
grid.events.on("AfterSelect", function(row, col){
    console.log("afterSelect", row, col); 
});
~~~

@changelog:
added in v7.0

[comment]: # (@relatedapi: grid/api/selection/selection_enable_method.md)
