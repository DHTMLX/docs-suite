---
sidebar_label: afterUnSelect
title: JavaScript TreeGrid - afterUnSelect Event 
description: You can explore the afterUnSelect event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterUnSelect

@short: fires after unselecting a cell

@signature: {'afterUnSelect: (row: IRow, col: ICol) => void;'}

@params:
- `row: object` - the config of a row
- `col: object` - the config of a column

@example:
treegrid.selection.events.on("afterUnSelect", function(row, col){
    console.log("afterUnSelect", row, col); 
});

@descr:

It is also possible to use the simplified version of the event:

~~~js
treegrid.events.on("afterUnSelect", function(row, col){
    console.log("afterUnSelect", row, col); 
});
~~~

@changelog:
added in v7.0
