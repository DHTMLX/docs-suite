---
sidebar_label: resize
title: resize
---          

@short: fires on resizing a column

@signature: {'resize: (col: ICol, events: MouseEvent) => void;'}

@params:
- col		object		an object with a column configuration
- events	Event		a native event object


@example:
grid.events.on("Resize", function(col,e){
	// your code here
});



@descr:

**Related sample**:
- [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog:
added in v6.2