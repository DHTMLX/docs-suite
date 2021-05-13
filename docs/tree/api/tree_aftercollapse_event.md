---
sidebar_label: afterCollapse
title: afterCollapse
---          

@short: fires after collapsing a tree item

@signature: {'afterCollapse: (id: string) => void;'}

@params:
- id       string      the id of a collapsed item

@example:
tree.events.on("AfterCollapse", function(id) {
    // your logic here
});


@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v6.4

@related: [](tree/events_handling.md) 
