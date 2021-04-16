---
sidebar_label: headerCellRightClick
title: headerCellRightClick
---          

@short: fires on right click on a grid header cell

@signature: headerCellRightClick: (col: object, e: MouseEvent) => void;

@params:
- column		object		an object with a column configuration
- e				MouseEvent		a native event object

@example:
grid.events.on("HeaderCellRightClick", function(column,e){
    // your logic here
});


@template: api_event
@descr:


@relatedsample: https://snippet.dhtmlx.com/sgwnxshe	TreeGrid. TreeGrid Events
