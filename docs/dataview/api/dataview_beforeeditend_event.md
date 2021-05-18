---
sidebar_label: beforeEditEnd
title: beforeEditEnd
---          

@short: fires before editing of an item is completed

@signature: {'beforeEditEnd: (value: string, id: string | number) => boolean | void;'}

@params:
- `value: string` - the value of an item
- `id: string | number` - the id of an item

@returns:
Return `false` to prevent closing of an editor; otherwise, `true`.

@example:
dataview.events.on("BeforeEditEnd", function(value,id){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v6.1
