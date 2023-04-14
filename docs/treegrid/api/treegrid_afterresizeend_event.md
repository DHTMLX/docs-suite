---
sidebar_label: afterResizeEnd
title: JavaScript TreeGrid - afterResizeEnd Event 
description: You can explore the afterResizeEnd event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterResizeEnd

@short: fires after resizing of a column is ended

@signature: {'afterResizeEnd: (column: object, events: MouseEvent) => void;'}

@params:
- `column: object` - an object with a column configuration
- `events: MouseEvent` - a native HTML event object

@example:
grid.events.on("afterResizeEnd", function(col,e){
	// your logic here
});

@descr:

@changelog:
added in v6.2
