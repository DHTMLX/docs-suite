---
sidebar_label: afterExpand
title: JavaScript Tree - afterExpand Event 
description: You can explore the afterExpand event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterExpand

@short: fires after expanding a tree item

@signature: {'afterExpand: (id: Id) => void;'}

@params:
`id: string | number` - the id of an expanded item

@example:
tree.events.on("AfterExpand", function(id) {
    // your logic here
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v6.4

[comment]: # (@related: tree/events_handling.md)
