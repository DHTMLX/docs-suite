---
sidebar_label: itemDblClick
title: itemDblClick
---          

@short: fires on double-clicking a tree item

@signature: itemDblClick: (id: string, e: Event) => void;

<!-- в d.ts any-->

@params:
- id	string		the id of an item
- e		Event		a native event object

@example:
// allows opening folders on double click
tree.events.on("ItemDblClick", function(id, e){
	tree.data.update(id, {opened: !tree.data.getItem(id).opened})
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/vux1ye9g	Tree. Events

@related: tree/events_handling.md