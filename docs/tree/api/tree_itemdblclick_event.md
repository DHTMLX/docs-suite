---
sidebar_label: itemDblClick
title: JavaScript Tree - itemDblClick Event 
description: You can explore the itemDblClick event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# itemDblClick

@short: fires on double-clicking a tree item

@signature: {'itemDblClick: (id: Id, e: Event) => void;'}

@params:
- `id: string | number` - the id of an item
- `e: Event` - a native event object

@example:
// allows opening folders on double click
tree.events.on("ItemDblClick", function(id, e){
	tree.data.update(id, {opened: !tree.data.getItem(id).opened})
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

[comment]: # (@related: tree/events_handling.md)
