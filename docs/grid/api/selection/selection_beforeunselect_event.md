---
sidebar_label: beforeUnSelect
title: beforeUnSelect
---          

@short: fires before unselecting a cell

@signature: beforeUnSelect: (row: object, col: object) => boolean | void;

@params:

- row		object		the config of a row
- col       object      the config of a column

@returns:
param   boolean     false - to prevent unselecting of a cell, otherwise - true




@example:
grid.selection.events.on("BeforeUnSelect", function(row, col){
    console.log("beforeUnSelect", row, col); 
    return false;
});


@template: api_method
@descr:
It is also possible to use the simplified version of the event:

~~~js
grid.events.on("BeforeUnSelect", function(row, col){
    console.log("beforeUnSelect", row, col); 
    return false;
});
~~~

@relatedapi: 
grid/api/selection/selection_enable_method.md

@changelog:
added in v7.0

