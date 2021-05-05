---
sidebar_label: afterResizeEnd
title: afterResizeEnd
---          

@short: fires after resizing of a column is ended

@signature: {'afterResizeEnd: (col: ICol, e: MouseEvent) => void;'}

@params:
- col		object		an object with a column configuration
- e				Event		a native event object

@example:
grid.events.on("AfterResizeEnd", function(col,e){
	// your logic here
});



@descr:

**Related sample**:
- [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog:
added in v6.2

