---
sidebar_label: beforeExpand
title: JavaScript Layout - beforeExpand Event 
description: You can explore the beforeExpand event of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeExpand

@short: fires before expanding a Layout cell

@signature: {'beforeExpand: (id: string) => boolean | void;'}

@params:
`id: string` - the id of a cell

@returns:
Return `false` to block expanding a cell; otherwise, `true`.

@example:
layout.events.on("BeforeExpand", function(id){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.4
