---
sidebar_label: beforeSelect
title: beforeSelect
---          

@short: fires before selecting a cell


@params:

- row		object		the config of a row
- col       object      the config of a column

@returns:
param   boolean     false - to prevent selecting of a cell, otherwise - true



@example:
treegrid.selection.events.on("BeforeSelect", function(row, col){
    console.log("beforeSelect", row, col); 
    return false;
});


@template: api_method
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

