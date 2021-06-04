---
sidebar_label: beforeEditEnd
title: JavaScript List - beforeEditEnd Event 
description: You can explore the beforeEditEnd event of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeEditEnd

@short: fires before editing of an item is ended

@signature: {'beforeEditEnd: (value: any, id: string | number) => void | boolean;'}

@params:
- `value: string` - the value of an item
- `id: string | number` - the id of an item

@returns:
Return `false` to prevent closing of an editor; otherwise, `true`.

@example:
list.events.on("BeforeEditEnd", function(value,id){
	// your logic here
    return false;
});

@descr:

**Related sample**: [List. List Events](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v6.1
