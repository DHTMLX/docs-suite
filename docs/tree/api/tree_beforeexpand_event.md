---
sidebar_label: beforeExpand
title: beforeExpand
---          

@short: fires before expanding a tree item

@signature: {'beforeExpand: (id: string) => boolean | void;'}

@params: 
- id    string      the id of an expanded item

@returns:
- param     boolean | void     false - to block expanding  a tree item, otherwise true

@example:
tree.events.on("BeforeExpand", function(id) {
    // your logic here
    return false;
});



@descr:


**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v6.4

@related: tree/events_handling.md
