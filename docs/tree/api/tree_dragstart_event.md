---
sidebar_label: dragStart
title: JavaScript Tree - dragStart Event 
description: You can explore the dragStart event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragStart

@short: fires when dragging of an item has started

@signature: {'dragStart: (data: object, events: MouseEvent) => void;'}

@params:
- `data: object` - data object. It can contain the following parameters:
    - `start: string | number` - the id of an item, from which the dragging process has started
    - `source: array` - an array with ids of dragged items
    - `target: string | number` - the id of a potential target item
- `events: MouseEvent` - a native HTML event object

@example:
tree.events.on("dragStart", function(data, events) {
    // your logic here
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v7.0

[comment]: # (@relatedapi: tree/api/tree_afterdrag_event.md tree/api/tree_afterdrop_event.md tree/api/tree_beforedrag_event.md tree/api/tree_beforedrop_event.md tree/api/tree_canceldrop_event.md tree/api/tree_candrop_event.md tree/api/tree_dragin_event.md tree/api/tree_dragout_event.md)
