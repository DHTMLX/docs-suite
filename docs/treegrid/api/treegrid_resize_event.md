---
sidebar_label: resize
title: JavaScript TreeGrid - resize Event 
description: You can explore the resize event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# resize

@short: fires on resizing a column

@signature: {'resize: (col: ICol, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("resize", function(col,e){
	// your code here
});

@descr:

@changelog:
added in v6.2
