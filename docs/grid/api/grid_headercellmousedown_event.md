---
sidebar_label: headerCellMouseDown
title: headerCellMouseDown
---          

@short: fires on moving the mouse pointer over a grid header cell

@signature: headerCellMouseDown: (col: object, e: MouseEvent & TouchEvent) => void;

<!--todo @params:
- column		object		an object with a column configuration
- e				Event		a native event object -->

@example:
grid.events.on("HeaderCellMouseDown", function(column,e){
    // your logic here
});


@template: api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/9zeyp4ds	Grid. Events

