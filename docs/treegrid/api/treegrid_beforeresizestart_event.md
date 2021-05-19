---
sidebar_label: beforeResizeStart
title: beforeResizeStart
---          

@short: fires before resizing of a column has started

@signature: {'beforeResizeStart: (col: ICol, events: MouseEvent) => boolean | void;'}

@params:
- `column: object` - an object with a column configuration
- `events: MouseEvent` - a native HTML event object

@returns:
Return `false` to block resizing of a column; otherwise, `true`.

@example:
grid.events.on("BeforeResizeStart", function(col,e){
	// your logic here
    return false;
});

@descr:

@changelog:
added in v6.2
