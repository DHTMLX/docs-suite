---
sidebar_label: beforeResizeStart
title: JavaScript Layout - beforeResizeStart Event 
description: You can explore the beforeResizeStart event of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeResizeStart

@short: fires before resizing of a cell has started

@signature: {'beforeResizeStart: (id: string) => boolean | void;'}

@params:
- `id: string` - the id of a cell

@returns:
Return `false` to prevent resizing of a cell; otherwise, `true`.

@example:
layout.events.on("beforeResizeStart", function(id){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
