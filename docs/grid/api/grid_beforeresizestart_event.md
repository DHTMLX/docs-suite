---
sidebar_label: beforeResizeStart
title: beforeResizeStart
---          

@short: fires before resizing of a column has started

@signature: {'beforeResizeStart: (col: ICol, e: MouseEvent) => boolean | void;'}

@params:
- col		object		an object with a column configuration
- e				Event		a native event object


@returns:
- result		boolean		false - to block resizing of a column, otherwise true

@example:
grid.events.on("BeforeResizeStart", function(col,e){
	// your logic here
    return false;
});



@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog:
added in v6.2

