---
sidebar_label: beforeDrag
title: JavaScript Tree - beforeDrag Event 
description: You can explore the beforeDrag event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeDrag

@short: fires before dragging of an item has started 

@signature: {'beforeDrag: (data: object, events: MouseEvent, ghost: HTMLElement) => void | boolean;'}

@params:
- `data: object` - data object. It can contain the following parameters:
	- `start: string | number` - the id of an item, from which the dragging process has started
	- `source: array` - an array with ids of dragged items
	- `target: string | number` - the id of a potential target item
- `events: MouseEvent` - a native HTML event object
- `ghost: HTMLElement` - an HTML element

@returns:
Return `false` to block dragging of an item; otherwise, `true`.

@example:
tree.events.on("beforeDrag", function(data, events) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v7.0

[comment]: # (@relatedapi: tree/api/tree_afterdrag_event.md tree/api/tree_afterdrop_event.md tree/api/tree_beforedrop_event.md tree/api/tree_canceldrop_event.md tree/api/tree_candrop_event.md tree/api/tree_dragin_event.md tree/api/tree_dragout_event.md tree/api/tree_dragstart_event.md)
