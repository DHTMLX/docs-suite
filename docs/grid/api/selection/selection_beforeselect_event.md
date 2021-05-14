---
sidebar_label: beforeSelect
title: beforeSelect
---          

@short: fires before selecting a cell

@signature: {'beforeSelect: (row: IRow, col: ICol) => boolean | void;'}

@params:

- row		object		the config of a row
- col       object      the config of a column

@returns:
param   boolean | void     false - to prevent selecting of a cell, otherwise - true

@example:
grid.selection.events.on("BeforeSelect", function(row, col){
    console.log("beforeSelect", row, col); 
    return false;
});

@descr:
It is also possible to use the simplified version of the event:

~~~js
grid.events.on("BeforeSelect", function(row, col){
    console.log("beforeSelect", row, col); 
    return false;
});
~~~

@changelog:
added in v7.0

[comment]: # (@relatedapi: grid/api/selection/selection_enable_method.md)