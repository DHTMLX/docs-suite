---
sidebar_label: headerCellClick
title: headerCellClick
---          

@short: fires on click on a grid header cell

@signature: {'headerCellClick: (col: ICol, events: MouseEvent) => void;'}

@params:
- column		object		an object with a column configuration
- events		Event		a native event object


@example:
grid.events.on("HeaderCellClick", function(column,e){
    // your logic here
});


@template: api_event
@descr:

**Related sample**:
- [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

