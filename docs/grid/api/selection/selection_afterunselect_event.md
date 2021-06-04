---
sidebar_label: afterUnSelect
title: JavaScript Grid - afterUnSelect Event 
description: You can explore the afterUnSelect event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterUnSelect

@short: fires after unselecting a cell

@signature: {'afterUnSelect: (row: object, col: object) => void;'}

@params:

- `row: object` - the config of a row
- `col: object` - the config of a column

@example:
grid.selection.events.on("AfterUnSelect", function(row, col){
    console.log("afterUnSelect", row, col); 
});

@descr:
It is also possible to use the simplified version of the event:

~~~js
grid.events.on("AfterUnSelect", function(row, col){
    console.log("afterUnSelect", row, col); 
});
~~~

@changelog:
added in v7.0

[comment]: # (@relatedapi: grid/api/selection/selection_enable_method.md)
