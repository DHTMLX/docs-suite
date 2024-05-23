---
sidebar_label: afterSelect
title: JavaScript Grid - afterSelect Event 
description: You can explore the afterSelect event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterSelect

@short: fires after selecting a cell

@signature: {'afterSelect: (row: object, column: object) => void;'}

@params:
The callback of the event is called with the following parameters:

- `row: object` - the config of a row
- `column: object` - the config of a column

@example:
grid.selection.events.on("AfterSelect", (row, column) => {
    console.log("afterSelect", row, column); 
});

@descr:
It is also possible to use the simplified version of the event:

~~~js
grid.events.on("AfterSelect", (row, column) => {
    console.log("afterSelect", row, column); 
});
~~~

@changelog:
added in v7.0

[comment]: # (@relatedapi: grid/api/selection/selection_enable_method.md)
