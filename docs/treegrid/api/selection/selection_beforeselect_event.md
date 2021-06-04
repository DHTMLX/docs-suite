---
sidebar_label: beforeSelect
title: JavaScript TreeGrid - beforeSelect Event 
description: You can explore the beforeSelect event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeSelect

@short: fires before selecting a cell

@signature: {'beforeSelect: (row: IRow, col: ICol) => boolean | void;'}

@params:

- `row: object` - the config of a row
- `col: object` - the config of a column

@returns:
Return `false` to prevent selecting of a cell; otherwise, `true`.

@example:
treegrid.selection.events.on("BeforeSelect", function(row, col){
    console.log("beforeSelect", row, col); 
    return false;
});

@descr:

It is also possible to use the simplified version of the event:

~~~js
treegrid.events.on("BeforeSelect", function(row, col){
    console.log("beforeSelect", row, col); 
    return false;
});
~~~

@changelog:
added in v7.0
