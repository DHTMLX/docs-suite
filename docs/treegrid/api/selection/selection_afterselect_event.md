---
sidebar_label: afterSelect
title: afterSelect
---          

@short: fires after selecting a cell

@signature: {'afterSelect: (row: IRow, col: ICol) => void;'}

@params:
- `row: object` - the config of a row
- `col: object` - the config of a column

@example:
treegrid.selection.events.on("AfterSelect", function(row, col){
    console.log("afterSelect", row, col); 
});

@descr:

It is also possible to use the simplified version of the event:

~~~js
treegrid.events.on("AfterSelect", function(row, col){
    console.log("afterSelect", row, col); 
});
~~~

@changelog:
added in v7.0
