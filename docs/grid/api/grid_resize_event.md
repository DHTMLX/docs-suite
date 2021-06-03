---
sidebar_label: resize
title: JavaScript Grid - resize Event 
description: You can explore the resize event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# resize

@short: fires on resizing a column

@signature: {'resize: (col: ICol, events: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `events: MouseEvent` - a native HTML event object

@example:
grid.events.on("Resize", function(col,e){
	// your code here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog:
added in v6.2