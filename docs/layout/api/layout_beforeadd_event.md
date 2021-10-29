---
sidebar_label: beforeAdd
title: JavaScript Layout - beforeAdd Event 
description: You can explore the beforeAdd event of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeAdd

@short: fires before adding a cell

@signature: {'beforeAdd: (id: string) => boolean | void;'}

@params:
`id: string` - the id of a cell

@returns:
Return `false` to prevent adding of a cell; otherwise, `true`.

@example:
layout.events.on("beforeAdd", function(id){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
