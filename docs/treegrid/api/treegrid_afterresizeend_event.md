---
sidebar_label: afterResizeEnd
title: afterResizeEnd
---          

@short: fires after resizing of a column is ended

@signature: {'afterResizeEnd: (column: ICol, events: MouseEvent) => void;'}

@params:
- `column: object` - an object with a column configuration
- `events: MouseEvent` - a native HTML event object

@example:
grid.events.on("AfterResizeEnd", function(col,e){
	// your logic here
});

@descr:

@changelog:
added in v6.2
