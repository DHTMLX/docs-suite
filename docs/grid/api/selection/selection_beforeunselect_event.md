---
sidebar_label: beforeUnSelect
title: JavaScript Grid - beforeUnSelect Event 
description: You can explore the beforeUnSelect event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeUnSelect

@short: fires before unselecting a cell

@signature: {'beforeUnSelect: (row: object, column: object) => boolean | void;'}

@params:
The callback of the event is called with the following parameters:

- `row: object` - the config of a row
- `column: object` - the config of a column

@returns:
Return `false` to prevent unselecting of a cell; otherwise, `true`.

@example:
grid.selection.events.on("BeforeUnSelect", (row, column) => {
    console.log("beforeUnSelect", row, column); 
    return false;
});

@descr:
It is also possible to use the simplified version of the event:

~~~js
grid.events.on("BeforeUnSelect", (row, column) => {
    console.log("beforeUnSelect", row, column); 
    return false;
});
~~~

@changelog:
added in v7.0

[comment]: # (@relatedapi: grid/api/selection/selection_enable_method.md)
