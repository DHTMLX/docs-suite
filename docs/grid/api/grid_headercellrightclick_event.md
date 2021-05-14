---
sidebar_label: headerCellRightClick
title: headerCellRightClick
---          

@short: fires on right click on a grid header cell

@signature: {'headerCellRightClick: (col: object, events: MouseEvent) => void;'}

<!-- @params:
- column		object		an object with a column configuration
- events		Event		a native event object -->

@example:
grid.events.on("HeaderCellRightClick", function(column,e){
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)
