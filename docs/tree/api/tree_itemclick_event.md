---
sidebar_label: itemClick
title: JavaScript Tree - itemClick Event 
description: You can explore the itemClick event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# itemClick

@short: fires on clicking a tree item

@signature: {'itemClick: (id: string | number, e: Event) => void;'}

@params:
- `id: string | number` - the id of an item
- `e: Event` - a native event object

@example:
tree.events.on("itemClick", function(id, e){
    console.log("The item with the id "+ id +" was clicked.");
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

[comment]: # (@related: tree/events_handling.md)
