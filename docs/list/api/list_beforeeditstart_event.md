---
sidebar_label: beforeEditStart
title: JavaScript List - beforeEditStart Event 
description: You can explore the beforeEditStart event of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeEditStart

@short: fires before editing of an item has started

@signature: beforeEditStart: (id: string | number) => void | boolean;

@params:
- `id: string | number` - the id of an item

@returns:
Return `false` to block item editing; otherwise, `true`.

@example:
list.events.on("beforeEditStart", function(value,id){
	// your logic here
    return false;
});

@descr:

**Related sample**: [List. Events](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v6.1
