---
sidebar_label: beforeCollapse
title: beforeCollapse
---          

@short: fires before collapsing a tree item

@signature: {'beforeCollapse: (id: string) => boolean | void;'}

@params: 
`id: string` - the id of a collapsed item

@returns:
Return `false` to block collapsing  a tree item; otherwise, `true`.

@example:
tree.events.on("BeforeCollapse", function(id) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v6.4

[comment]: # (@related: tree/events_handling.md)
