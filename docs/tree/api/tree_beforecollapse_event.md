---
sidebar_label: beforeCollapse
title: JavaScript Tree - beforeCollapse Event 
description: You can explore the beforeCollapse event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeCollapse

@short: fires before collapsing a tree item

@signature: {'beforeCollapse: (id: Id) => boolean | void;'}

@params:
- `id: string | number` - the id of a collapsed item

@returns:
Return `false` to block collapsing  a tree item; otherwise, `true`.

@example:
tree.events.on("beforeCollapse", function(id) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v6.4

[comment]: # (@related: tree/events_handling.md)
