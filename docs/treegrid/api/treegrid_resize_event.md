---
sidebar_label: resize
title: resize
---          

@short: fires on resizing a column

@signature: {'resize: (col: ICol, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("Resize", function(col,e){
	// your code here
});

@descr:

@changelog:
added in v6.2
