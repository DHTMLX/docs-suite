---
sidebar_label: beforeRemove
title: JavaScript Layout - beforeRemove Event 
description: You can explore the beforeRemove event of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeRemove

@short: fires before removing a cell

@signature: {'beforeRemove: (id: string) => boolean | void;'}

@params:
`id: string` - the id of a cell

@returns:
Return `false` to prevent removing of a cell; otherwise, `true`.

@example:
layout.events.on("beforeRemove", function(id){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
