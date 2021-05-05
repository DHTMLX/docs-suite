---
sidebar_label: itemRightClick
title: itemRightClick
---          

@short: fires on right-clicking a tree item

@signature: {'itemRightClick: (id: string, e: Event) => void;'}

@params:
- id	string		the id of an item
- e		Event		a native event object

@example:
tree.events.on("itemRightClick", function(id, e){
    console.log("The item with the id "+ id +" was right-clicked.");
});


@descr:


**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@related: tree/events_handling.md

@changelog: added in v6.3