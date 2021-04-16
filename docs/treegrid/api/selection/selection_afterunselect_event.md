---
sidebar_label: afterUnSelect
title: afterUnSelect
---          

@short: fires after unselecting a cell

@params:

- row		object		the config of a row
- col       object      the config of a column


@example:
treegrid.selection.events.on("AfterUnSelect", function(row, col){
    console.log("afterUnSelect", row, col); 
});


@template: api_method
@descr:
It is also possible to use the simplified version of the event:

~~~js
treegrid.events.on("AfterUnSelect", function(row, col){
    console.log("afterUnSelect", row, col); 
});
~~~

@changelog:
added in v7.0

