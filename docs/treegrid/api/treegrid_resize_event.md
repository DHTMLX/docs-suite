---
sidebar_label: resize
title: resize
---          

@short: fires on resizing a column

@signature: resize: (col: object, e: MouseEvent) => void;

@params:
- col		object		an object with a column configuration
- e				Event		a native event object

@example:
grid.events.on("Resize", function(col,e){
	// your code here
});

@template: api_event
@descr:

@changelog:
added in v6.2
