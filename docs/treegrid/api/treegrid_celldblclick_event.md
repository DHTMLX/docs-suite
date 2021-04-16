---
sidebar_label: cellDblClick
title: cellDblClick
---          

@short: fires on double-click on a grid cell

@signature: cellDblClick: (row: object, col: object, e: MouseEvent) => void;

@params:
- row			object		an object with a row configuration
- column		object		an object with a column configuration
- e				Event		a native event object

@example:
grid.events.on("CellDblClick", function(row,column,e){
    // your logic here
});

@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/sgwnxshe	TreeGrid. TreeGrid Events	
