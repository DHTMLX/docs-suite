---
sidebar_label: afterSelect
title: JavaScript TreeGrid - afterSelect Event 
description: You can explore the afterSelect event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterSelect

@short: fires after selecting a cell

@signature: {'afterSelect: (row: object, col: object) => void;'}

@params:
- `row: object` - the config of a row
- `col: object` - the config of a column

@example:
treegrid.selection.events.on("afterSelect", function(row, col){
    console.log("afterSelect", row, col); 
});

@descr:

It is also possible to use the simplified version of the event:

~~~js
treegrid.events.on("afterSelect", function(row, col){
    console.log("afterSelect", row, col); 
});
~~~

@changelog:
added in v7.0
