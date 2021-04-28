---
sidebar_label: headerCellDblClick
title: headerCellDblClick
---          

@short: fires on double-click on a grid footer cell

@signature: headerCellDblClick: (col: object, e: MouseEvent) => void;

<!-- todo @params:
- column		object		an object with a column configuration
- e				Event		a native event object -->

@example:
grid.events.on("HeaderCellDblClick", function(column,e){
    // your logic here
});


@template: api_event
@descr:


**Related sample**:
- [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
