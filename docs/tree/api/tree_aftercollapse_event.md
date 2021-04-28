---
sidebar_label: afterCollapse
title: afterCollapse
---          

@short: fires after collapsing a tree item
todoanton any приходит из d.ts
@signature: {'afterCollapse: (id: string) => any;'}

@params:
- id       string      the id of a collapsed item

@example:
tree.events.on("AfterCollapse", function(id) {
    // your logic here
});

@template: api_event
@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v6.4

@related: [](tree/events_handling.md) 