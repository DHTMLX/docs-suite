---
sidebar_label: beforeExpand
title: JavaScript Tree - beforeExpand Event 
description: You can explore the beforeExpand event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeExpand

@short: fires before expanding a tree item

@signature: {'beforeExpand: (id: Id) => boolean | void;'}

@params:
- `id: string | number` - the id of an expanded item

@returns:
Return `false` to block expanding  a tree item; otherwise, `true`.

@example:
tree.events.on("beforeExpand", function(id) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v6.4

[comment]: # (@related: tree/events_handling.md)
