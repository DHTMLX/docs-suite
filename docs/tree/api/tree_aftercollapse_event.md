---
sidebar_label: afterCollapse
title: JavaScript Tree - afterCollapse Event 
description: You can explore the afterCollapse event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterCollapse

@short: fires after collapsing a tree item

@signature: {'afterCollapse: (id: Id) => void;'}

@params:
- `id: string | number` - the id of a collapsed item

@example:
tree.events.on("afterCollapse", function(id) {
    // your logic here
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v6.4

[comment]: # (@related: [](tree/events_handling.md)
