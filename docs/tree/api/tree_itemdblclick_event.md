---
sidebar_label: itemDblClick
title: itemDblClick
---          

@short: fires on double-clicking a tree item

@signature: {'itemDblClick: (id: string, e: Event) => void;'}

@params:
- id	string		the id of an item
- e		Event		a native event object

@example:
// allows opening folders on double click
tree.events.on("ItemDblClick", function(id, e){
	tree.data.update(id, {opened: !tree.data.getItem(id).opened})
});



@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@related: tree/events_handling.md
