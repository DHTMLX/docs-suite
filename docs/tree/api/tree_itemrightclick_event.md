---
sidebar_label: itemRightClick
title: JavaScript Tree - itemRightClick Event 
description: You can explore the itemRightClick event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# itemRightClick

@short: fires on right-clicking a tree item

@signature: {'itemRightClick: (id: Id, e: Event) => void;'}

@params:
- `id: string | number` - the id of an item
- `e: Event` - a native event object

@example:
tree.events.on("itemRightClick", function(id, e){
    console.log("The item with the id "+ id +" was right-clicked.");
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v6.3

[comment]: # (@related: tree/events_handling.md)
