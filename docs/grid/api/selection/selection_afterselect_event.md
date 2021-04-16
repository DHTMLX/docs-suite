---
sidebar_label: afterSelect
title: afterSelect
---          

@short: fires after selecting a cell

@signature: afterSelect: (row: object, col: object) => void;

@params:

- row		object		the config of a row
- col       object      the config of a column




@example:
grid.selection.events.on("AfterSelect", function(row, col){
    console.log("afterSelect", row, col); 
});

@template: api_method
@descr:
It is also possible to use the simplified version of the event:

~~~js
grid.events.on("AfterSelect", function(row, col){
    console.log("afterSelect", row, col); 
});
~~~


@changelog:
added in v7.0

@relatedapi: 
grid/api/selection/selection_enable_method.md
