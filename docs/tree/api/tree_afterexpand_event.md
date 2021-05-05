---
sidebar_label: afterExpand
title: afterExpand
---          

@short: fires after expanding a tree item

@signature: {'afterExpand: (id: string) => void;'}

@params:
- id    string      the id of an expanded item

@example:
tree.events.on("AfterExpand", function(id) {
    // your logic here
});


@descr:

@changelog: added in v6.4

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@related: tree/events_handling.md
