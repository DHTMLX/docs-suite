---
sidebar_label: beforeEditEnd
title: JavaScript DataView - beforeEditEnd Event 
description: You can explore the beforeEditEnd event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeEditEnd

@short: fires before editing of an item is completed

@signature: {'beforeEditEnd: (value: string, id: string | number) => boolean | void;'}

@params:
- `value: string` - the value of an item
- `id: string | number` - the id of an item

@returns:
Return `false` to prevent closing of an editor; otherwise, `true`.

@example:
dataview.events.on("beforeEditEnd", function(value,id){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Dataview. Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v6.1
