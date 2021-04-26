---
sidebar_label: afterResizeEnd
title: afterResizeEnd
---          

@short: fires after resizing of a column is ended

@signature: afterResizeEnd: (col: object, e: MouseEvent) => void;

<!-- @params:
- column		object		an object with a column configuration
- e				Event		a native event object -->

@example:
grid.events.on("AfterResizeEnd", function(col,e){
	// your logic here
});


@template: api_event
@descr:

**Related sample**:
- [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog:
added in v6.2

