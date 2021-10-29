---
sidebar_label: beforeHide
title: JavaScript Layout - beforeHide Event 
description: You can explore the beforeHide event of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeHide

@short: fires before a cell is hidden

@signature: {'beforeHide: (id: string) => boolean | void;'}

@params:
`id: string` - the id of a cell

@returns:
Return `false` to prevent a cell from being hidden; otherwise, `true`.

@example:
layout.events.on("beforeHide", function(id){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
