---
sidebar_label: beforeUnSelect
title: JavaScript TreeGrid - beforeUnSelect Event 
hide_title: true
description: You can explore the beforeUnSelect event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeUnSelect

@short: fires before unselecting a cell

@signature: {'beforeUnSelect: (row: IRow, col: ICol) => boolean | void;'}

@params:

- `row: object` - the config of a row
- `col: object` - the config of a column

@returns:
Return `false` to prevent unselecting of a cell; otherwise, `true`.

@example:
treegrid.selection.events.on("BeforeUnSelect", function(row, col){
    console.log("beforeUnSelect", row, col); 
    return false;
});

@descr:

It is also possible to use the simplified version of the event:

~~~js
treegrid.events.on("BeforeUnSelect", function(row, col){
    console.log("beforeUnSelect", row, col); 
    return false;
});
~~~

@changelog:
added in v7.0
